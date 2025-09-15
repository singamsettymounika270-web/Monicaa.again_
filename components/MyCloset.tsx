import React, { useState, useMemo, useRef } from 'react';
import { OutfitItem, AISuggestion, ClothingCategory } from '../types';
import { MOCK_USER_CLOSET } from '../constants';
import OutfitCard from './OutfitCard';
import Rating from './Rating';

const MOCK_SUGGESTIONS: AISuggestion[] = [
    { id: 's1', title: "Casual Weekend Look", items: [{name: 'White Linen Shirt', category: 'top'}, {name: 'Classic Blue Jeans', category: 'bottom'}, {name: 'Gold Pendant Necklace', category: 'accessory'}], reason: "A timeless, effortless combo for a relaxed day out." },
    { id: 's2', title: "Chic City Explorer", items: [{name: 'Beige Trench Coat', category: 'outerwear'}, {name: 'Floral Sundress', category: 'dress'}, {name: 'Leather Ankle Boots', category: 'shoes'}], reason: "Perfectly balances sophistication and comfort for city adventures." },
    { id: 's3', title: "Office Ready", items: [{name: 'White Linen Shirt', category: 'top'}, {name: 'Beige Trench Coat', category: 'outerwear'}], reason: "A smart-casual look that's both professional and stylish." },
];

const categories: (ClothingCategory | 'all')[] = ['all', 'top', 'bottom', 'dress', 'outerwear', 'shoes', 'accessory'];

const MyCloset: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'items' | 'suggestions'>('items');
  const [suggestions, setSuggestions] = useState<AISuggestion[]>(MOCK_SUGGESTIONS);
  const [activeCategory, setActiveCategory] = useState<ClothingCategory | 'all'>('all');
  const [closetItems, setClosetItems] = useState<OutfitItem[]>(MOCK_USER_CLOSET);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleRatingChange = (id: string, rating: number) => {
    setSuggestions(suggestions.map(s => s.id === id ? { ...s, review: { ...s.review, rating } } : s));
  };

  const filteredCloset = useMemo(() => {
    if (activeCategory === 'all') return closetItems;
    return closetItems.filter(item => item.category === activeCategory);
  }, [activeCategory, closetItems]);

  const getImagesForSuggestion = (suggestion: AISuggestion): OutfitItem[] => {
    return suggestion.items
      .map(item => closetItems.find(closetItem => closetItem.name.toLowerCase() === item.name.toLowerCase()))
      .filter((item): item is OutfitItem => item !== undefined);
  };

  const handleEditClick = (itemId: string) => {
    setEditingItemId(itemId);
    fileInputRef.current?.click();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && editingItemId) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImageUrl = reader.result as string;
        setClosetItems(prevItems =>
          prevItems.map(item =>
            item.id === editingItemId ? { ...item, imageUrl: newImageUrl } : item
          )
        );
        setEditingItemId(null);
      };
      reader.readAsDataURL(file);
    }
    if (event.target) {
        event.target.value = '';
    }
  };

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-100 tracking-tight">My Closet</h1>
        <p className="mt-2 text-lg text-gray-400">Your personal style collection and curated looks.</p>
      </div>

      <div className="flex justify-center border-b border-gray-700">
          <button onClick={() => setActiveTab('items')} className={`px-6 py-3 font-semibold transition-colors duration-300 ${activeTab === 'items' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-500 hover:text-gray-300'}`}>My Items</button>
          <button onClick={() => setActiveTab('suggestions')} className={`px-6 py-3 font-semibold transition-colors duration-300 ${activeTab === 'suggestions' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-500 hover:text-gray-300'}`}>AI Suggestions</button>
      </div>
      
      {activeTab === 'items' && (
        <div>
          <div className="mb-6 flex justify-center flex-wrap gap-2">
            {categories.map(category => (
              <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 capitalize ${activeCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                {category}
              </button>
            ))}
          </div>
           <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredCloset.map(item => (
              <OutfitCard key={item.id} item={item} onEdit={handleEditClick} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'suggestions' && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-4 sr-only">AI Suggested Outfits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suggestions.map(suggestion => {
              const suggestionImages = getImagesForSuggestion(suggestion);
              return (
                <div key={suggestion.id} className="bg-gray-800/50 border border-gray-700 p-5 rounded-xl shadow-lg card-hover-effect">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg mb-1 text-gray-100">{suggestion.title}</h3>
                    <div className="flex -space-x-4">
                      {suggestionImages.map(item => (
                        <img 
                          key={item.id} 
                          src={item.imageUrl} 
                          alt={item.name}
                          className="w-12 h-12 rounded-full border-2 border-gray-800 object-cover shadow-sm"
                        />
                      ))}
                    </div>
                  </div>
                   <p className="text-sm text-gray-400 mt-2 mb-4 italic">"{suggestion.reason}"</p>
                   <div className="border-t border-gray-700 pt-4">
                     <p className="text-sm font-semibold mb-2 text-gray-400">Rate this outfit:</p>
                     <Rating 
                        count={5}
                        value={suggestion.review?.rating || 0}
                        onChange={(rating) => handleRatingChange(suggestion.id, rating)}
                     />
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCloset;