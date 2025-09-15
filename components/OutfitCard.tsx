import React from 'react';
import { OutfitItem } from '../types';
import { EditIcon } from '../constants';

interface OutfitCardProps {
  item: OutfitItem;
  onEdit?: (id: string) => void;
}

const OutfitCard: React.FC<OutfitCardProps> = ({ item, onEdit }) => {
    const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (onEdit) {
      onEdit(item.id);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg card-hover-effect aspect-[4/6]">
      <img src={item.imageUrl} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300"></div>
      
      {onEdit && (
        <button
          onClick={handleEdit}
          className="absolute top-2 right-2 p-2 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label={`Edit ${item.name}`}
        >
          <div className="w-4 h-4">
            <EditIcon />
          </div>
        </button>
      )}

      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="font-semibold text-white text-md drop-shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">{item.name}</h3>
        <p className="text-xs text-gray-300 capitalize opacity-100 group-hover:opacity-0 transition-opacity duration-300">{item.category}</p>
      </div>
    </div>
  );
};

export default OutfitCard;