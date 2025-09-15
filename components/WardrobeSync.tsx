import React, { useState, useCallback } from 'react';
import { User, OutfitItem } from '../types';
import { MOCK_FRIENDS, MOCK_USER_CLOSET } from '../constants';
import Spinner from './Spinner';
import { getCoordinatedOutfits } from '../services/geminiService';

interface CoordinatedSuggestion {
    occasion: string;
    reason: string;
    userA_outfit: string[];
    userB_outfit: string[];
}

const WardrobeSync: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState<User | null>(MOCK_FRIENDS[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<CoordinatedSuggestion[]>([]);

  const handleSync = useCallback(async () => {
    if (!selectedFriend) {
        setError("Please select a friend to sync with.");
        return;
    }
    setIsLoading(true);
    setError(null);
    setSuggestions([]);
    try {
        const result = await getCoordinatedOutfits(MOCK_USER_CLOSET, selectedFriend.wardrobe);
        setSuggestions(result);
    } catch (err) {
        setError("Could not generate coordinated outfits. Please try again.");
        console.error(err);
    } finally {
        setIsLoading(false);
    }
  }, [selectedFriend]);

  const findItemImageUrl = (itemName: string, wardrobe: OutfitItem[]): string | undefined => {
      const foundItem = wardrobe.find(item => item.name.toLowerCase() === itemName.toLowerCase());
      return foundItem?.imageUrl;
  }

  const combinedWardrobe = selectedFriend ? [...MOCK_USER_CLOSET, ...selectedFriend.wardrobe] : MOCK_USER_CLOSET;
  const userAWardrobe = MOCK_USER_CLOSET;
  const userBWardrobe = selectedFriend?.wardrobe || [];

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-100 tracking-tight">Wardrobe Sync</h1>
        <p className="mt-2 text-lg text-gray-400">Coordinate your outfits with friends for any occasion.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl shadow-lg">
                <h2 className="font-semibold text-lg mb-3 text-gray-200">Sync with a Friend</h2>
                <div className="space-y-3">
                    {MOCK_FRIENDS.map(friend => (
                        <button key={friend.id} onClick={() => setSelectedFriend(friend)} className={`w-full flex items-center p-3 rounded-lg text-left transition ${selectedFriend?.id === friend.id ? 'bg-purple-600/30 ring-2 ring-purple-500' : 'bg-gray-700/50 hover:bg-gray-700'}`}>
                            <img src={friend.avatar} alt={friend.name} className="w-10 h-10 rounded-full mr-4"/>
                            <span className="font-semibold text-gray-200">{friend.name}</span>
                        </button>
                    ))}
                </div>
                 <button 
                    onClick={handleSync}
                    disabled={!selectedFriend || isLoading}
                    className="w-full mt-6 py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/20 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                 >
                    {isLoading ? <Spinner /> : "Find Coordinated Outfits"}
                 </button>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl shadow-lg">
                <h2 className="font-semibold text-lg mb-3 text-gray-200">
                    {selectedFriend ? `Combined Closet with ${selectedFriend.name}` : 'Your Closet'}
                </h2>
                <div className="flex flex-wrap gap-2">
                    {combinedWardrobe.slice(0,14).map(item => (
                        <img key={item.id} src={item.imageUrl} title={item.name} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-gray-900 shadow-sm"/>
                    ))}
                    {combinedWardrobe.length > 14 && <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-400">+{combinedWardrobe.length - 14}</div>}
                </div>
            </div>
        </div>
        <div className="lg:col-span-2 bg-gray-800/50 border border-gray-700 p-6 rounded-2xl shadow-lg">
            <h2 className="font-semibold text-lg mb-4 text-center text-gray-200">AI Coordinated Looks</h2>
            {isLoading && <div className="flex justify-center items-center h-full"><Spinner /><p className="ml-2 text-gray-400">Finding perfect matches...</p></div>}
            {error && <p className="text-red-400 text-center">{error}</p>}
            {!isLoading && suggestions.length === 0 && !error && (
                <div className="text-center text-gray-500 py-16">
                    <p>Click "Find Coordinated Outfits" to get suggestions.</p>
                </div>
            )}
            <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2">
                {suggestions.map((suggestion, index) => (
                    <div key={index} className="p-4 bg-gray-900/50 rounded-xl border border-gray-700">
                       <h3 className="font-bold text-gray-200">{suggestion.occasion}</h3>
                       <p className="text-sm text-gray-400 mt-1 mb-4 italic">"{suggestion.reason}"</p>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           <div>
                               <p className="font-semibold mb-2 text-center text-gray-300">Your Outfit</p>
                               <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-800 rounded-lg border border-gray-700">
                                   {suggestion.userA_outfit.map((item: string, i: number) => {
                                      const imgUrl = findItemImageUrl(item, userAWardrobe);
                                      return imgUrl ? <img key={i} src={imgUrl} title={item} alt={item} className="w-16 h-16 object-cover rounded-md shadow-sm"/> : <span key={i} className="text-xs">{item}</span>;
                                   })}
                               </div>
                           </div>
                           <div>
                               <p className="font-semibold mb-2 text-center text-gray-300">{selectedFriend?.name}'s Outfit</p>
                               <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-800 rounded-lg border border-gray-700">
                                   {suggestion.userB_outfit.map((item: string, i: number) => {
                                      const imgUrl = findItemImageUrl(item, userBWardrobe);
                                      return imgUrl ? <img key={i} src={imgUrl} title={item} alt={item} className="w-16 h-16 object-cover rounded-md shadow-sm"/> : <span key={i} className="text-xs">{item}</span>;
                                   })}
                               </div>
                           </div>
                       </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default WardrobeSync;