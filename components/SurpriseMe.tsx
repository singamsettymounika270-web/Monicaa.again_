import React, { useState, useCallback } from 'react';
import { getSurpriseOutfit } from '../services/geminiService';
import { AISuggestion, ClothingCategory, OutfitItem } from '../types';
import { MOCK_USER_CLOSET } from '../constants';
import Spinner from './Spinner';
import { SurpriseIcon } from '../constants';

const SurpriseMe: React.FC = () => {
    const [suggestion, setSuggestion] = useState<AISuggestion | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchSurpriseOutfit = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setSuggestion(null);
        try {
            const result = await getSurpriseOutfit(MOCK_USER_CLOSET);
            setSuggestion(result);
        } catch (err) {
            setError("Sorry, I couldn't generate a surprise outfit. Please try again.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);
    
    const categoryToEmoji = (category: ClothingCategory) => {
        const map: Record<ClothingCategory, string> = {
            top: '👕', bottom: '👖', dress: '👗', outerwear: '🧥', 
            shoes: '👟', accessory: '👜', jewelry: '💍', watch: '⌚', hairstyle: '💇'
        };
        return map[category] || '✨';
    };

    const getImagesForSuggestion = (suggestion: AISuggestion): OutfitItem[] => {
        return suggestion.items
            .map(item => MOCK_USER_CLOSET.find(closetItem => closetItem.name.toLowerCase() === item.name.toLowerCase()))
            .filter((item): item is OutfitItem => item !== undefined);
    };

    return (
        <div className="max-w-4xl mx-auto animate-fade-in text-center">
            <h1 className="text-4xl font-extrabold text-gray-100 tracking-tight">Surprise Me!</h1>
            <p className="mt-2 text-lg text-gray-400">Discover a new look from your own closet.</p>

            <div className="mt-8 flex justify-center">
                <button
                    onClick={fetchSurpriseOutfit}
                    disabled={isLoading}
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                >
                    {isLoading ? (
                        <>
                            <Spinner />
                            <span className="ml-2">Creating...</span>
                        </>
                    ) : (
                         <>
                            <div className="w-6 h-6 mr-2"><SurpriseIcon /></div>
                            Generate a New Look
                        </>
                    )}
                </button>
            </div>

            <div className="mt-10 min-h-[300px]">
                {isLoading && <p className="text-gray-500">Thinking of something creative...</p>}
                {error && <p className="text-red-400">{error}</p>}
                {suggestion && (
                    <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl shadow-lg text-left animate-fade-in">
                        <h3 className="text-2xl font-bold text-gray-100 text-center">{suggestion.title}</h3>
                        <p className="text-md text-gray-400 mt-2 mb-4 text-center italic">"{suggestion.reason}"</p>
                        
                        <div className="flex justify-center items-center -space-x-4 my-6">
                             {getImagesForSuggestion(suggestion).map(item => (
                                <img 
                                    key={item.id} 
                                    src={item.imageUrl} 
                                    alt={item.name}
                                    title={item.name}
                                    className="w-24 h-24 rounded-full border-4 border-gray-800 object-cover shadow-lg"
                                />
                             ))}
                        </div>

                        <ul className="space-y-2">
                            <h4 className="font-semibold text-gray-300">Items in this look:</h4>
                            {suggestion.items.map((item, index) => (
                                <li key={index} className="text-md text-gray-200 flex items-center bg-gray-700/50 p-3 rounded-md">
                                    <span className="mr-3 text-xl">{categoryToEmoji(item.category)}</span> {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SurpriseMe;