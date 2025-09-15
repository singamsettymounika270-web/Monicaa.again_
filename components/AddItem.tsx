import React, { useState, useCallback } from 'react';
import { getOutfitSuggestions } from '../services/geminiService';
import { AISuggestion, ClothingCategory, OutfitItem } from '../types';
import { MOCK_USER_CLOSET } from '../constants';
import Spinner from './Spinner';
import SkeletonLoader from './common/SkeletonLoader';

const AddItem: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<AISuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const imageUrls: string[] = [];
      
      files.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          imageUrls.push(reader.result as string);
          if (imageUrls.length === files.length) {
            setImages(prev => [...prev, ...imageUrls]);
          }
        };
        reader.readAsDataURL(file);
      });
      
      setSuggestions([]);
      setError(null);
    }
  };

  const fetchSuggestions = useCallback(async () => {
    if (images.length === 0) {
      setError("Please upload at least one image.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setSuggestions([]);
    try {
      const base64Images = images.map(img => img.split(',')[1]);
      const result = await getOutfitSuggestions(base64Images[0], MOCK_USER_CLOSET); 
      setSuggestions(result);
    } catch (err) {
      setError("Sorry, I couldn't generate suggestions. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [images]);

  const getImagesForSuggestion = (suggestion: AISuggestion): OutfitItem[] => {
    return suggestion.items
      .map(item => MOCK_USER_CLOSET.find(closetItem => closetItem.name.toLowerCase() === item.name.toLowerCase()))
      .filter((item): item is OutfitItem => item !== undefined);
  };
  
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-100 tracking-tight">Add Your Style</h1>
        <p className="mt-2 text-lg text-gray-400">Upload one or more items to get curated outfit ideas.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl shadow-lg">
          <label htmlFor="file-upload" className="block w-full h-48 border-2 border-dashed border-gray-600 rounded-xl flex flex-col items-center justify-center hover:bg-gray-700/50 transition-colors cursor-pointer mb-4">
            <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <p className="mt-2 text-sm font-semibold text-gray-300">Click to upload images</p>
            <p className="text-xs text-gray-500">Upload multiple items to create an outfit</p>
          </label>
          <input id="file-upload" type="file" multiple className="hidden" accept="image/png, image/jpeg" onChange={handleImageUpload} />
          
          <div className="min-h-[100px] bg-gray-900/50 rounded-xl p-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
              {images.map((img, index) => (
                  <img key={index} src={img} alt={`Uploaded item ${index + 1}`} className="w-full object-cover rounded-md aspect-square" />
              ))}
          </div>

          <button
            onClick={fetchSuggestions}
            disabled={images.length === 0 || isLoading}
            className="w-full mt-4 py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/20 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center transform hover:scale-105"
          >
            {isLoading ? <Spinner /> : "Generate Outfit Ideas"}
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-200">AI Suggestions</h2>
          {isLoading && (
            <div className="space-y-4">
              <SkeletonLoader />
              <SkeletonLoader />
            </div>
          )}
          {error && <p className="text-red-400">{error}</p>}
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {suggestions.map((suggestion) => {
              const suggestionImages = getImagesForSuggestion(suggestion);
              return (
              <div key={suggestion.id} className="bg-gray-800/50 border border-gray-700 p-5 rounded-xl shadow-lg animate-fade-in">
                <h3 className="font-bold text-lg text-gray-100">{suggestion.title}</h3>
                <p className="text-sm text-gray-400 mt-1 mb-3 italic">"{suggestion.reason}"</p>
                <div className="flex items-center -space-x-3">
                    {images.slice(0,1).map((img, index) => (
                        <img key={`uploaded-${index}`} src={img} title="Your uploaded item" className="w-16 h-16 rounded-full border-4 border-purple-500 object-cover z-10 shadow-lg" />
                    ))}
                    {suggestionImages.map(item => (
                        <img key={item.id} src={item.imageUrl} title={item.name} alt={item.name} className="w-16 h-16 rounded-full border-4 border-gray-700 object-cover shadow-md" />
                    ))}
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;