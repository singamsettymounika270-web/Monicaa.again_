
import React from 'react';
import { OutfitItem } from '../types';
import { MOCK_USER_CLOSET } from '../constants';
import OutfitCard from './OutfitCard';

const MOCK_SUGGESTIONS = [
    { id: 's1', title: "Casual Weekend Look", items: [MOCK_USER_CLOSET[0], MOCK_USER_CLOSET[1], MOCK_USER_CLOSET[5]] },
    { id: 's2', title: "Chic City Explorer", items: [MOCK_USER_CLOSET[2], MOCK_USER_CLOSET[3], MOCK_USER_CLOSET[4]] },
    { id: 's3', title: "Office Ready", items: [MOCK_USER_CLOSET[0], MOCK_USER_CLOSET[2]] },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back, Casey!</h1>
        <p className="text-gray-500">Here's what's in your closet and some fresh ideas for you.</p>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Closet</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {MOCK_USER_CLOSET.map(item => (
            <OutfitCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI Suggested Outfits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_SUGGESTIONS.map(suggestion => (
            <div key={suggestion.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-lg mb-3 text-gray-800">{suggestion.title}</h3>
              <div className="flex -space-x-4">
                {suggestion.items.map(item => (
                  <img 
                    key={item.id} 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="w-16 h-16 rounded-full border-4 border-white object-cover"
                  />
                ))}
              </div>
               <p className="text-sm text-gray-500 mt-3">A perfect blend for a stylish yet comfortable day out.</p>
               <div className="flex justify-end mt-2">
                 <button className="text-xs font-semibold text-purple-600 hover:text-purple-800">View Details</button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
