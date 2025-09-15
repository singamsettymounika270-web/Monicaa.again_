import React from 'react';
import { View } from '../types';
import { MyClosetIcon, AddIcon, CameraIcon, SyncIcon, SurpriseIcon, UserIcon, HeartIcon, StarIcon, ShoppingBagIcon } from '../constants';
import WeatherWidget from './WeatherWidget';

interface HomeProps {
  setCurrentView: (view: View) => void;
}

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
    color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, onClick, color }) => (
    <div onClick={onClick} className="group relative bg-gray-800/50 border border-gray-700 p-6 rounded-2xl shadow-lg cursor-pointer card-hover-effect overflow-hidden">
      <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full ${color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300`}></div>
      {/* FIX: Cast style object to React.CSSProperties to allow custom CSS properties like '--glow-color'. */}
      <div style={{'--glow-color': color} as React.CSSProperties} className={`relative w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-gray-900/50 border border-gray-700 shadow-inner`}>
        <div className="w-7 h-7 text-gray-200">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
);


const Home: React.FC<HomeProps> = ({ setCurrentView }) => {
  const features = [
    { 
      icon: <MyClosetIcon />, 
      title: 'My Closet', 
      description: 'View your wardrobe and get AI-powered outfit suggestions.',
      view: View.MyCloset,
      color: 'bg-purple-500'
    },
    { 
      icon: <AddIcon />, 
      title: 'Add Item', 
      description: 'Upload new clothing items to expand your digital closet.',
      view: View.AddItem,
      color: 'bg-pink-500'
    },
    { 
      icon: <CameraIcon />, 
      title: 'AR Try-On', 
      description: 'Virtually try on clothes using your camera or a photo.',
      view: View.ARTryOn,
      color: 'bg-blue-500'
    },
    { 
      icon: <SyncIcon />, 
      title: 'Wardrobe Sync', 
      description: 'Coordinate outfits with friends for the perfect look.',
      view: View.WardrobeSync,
      color: 'bg-green-500'
    },
    { 
      icon: <UserIcon />, 
      title: 'My Profile', 
      description: 'Manage your personal details for tailored suggestions.',
      view: View.Profile,
      color: 'bg-gray-500'
    },
    { 
      icon: <SurpriseIcon />, 
      title: 'Surprise Me', 
      description: 'Let AI create a unique, unexpected outfit for you.',
      view: View.SurpriseMe,
      color: 'bg-orange-500'
    },
     { 
      icon: <HeartIcon />, 
      title: 'Favorites', 
      description: 'Save and revisit your most-loved outfit suggestions.',
      view: View.Favorites,
      color: 'bg-red-500'
    },
    { 
      icon: <StarIcon />, 
      title: 'Wishlist', 
      description: 'Keep track of items you want to add to your collection.',
      view: View.Wishlist,
      color: 'bg-yellow-500'
    },
    { 
      icon: <ShoppingBagIcon />, 
      title: 'Shopping', 
      description: 'Discover and shop for new items to complete your looks.',
      view: View.Shopping,
      color: 'bg-teal-500'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-100 tracking-tight">Welcome Back, Monica!</h1>
        <p className="mt-4 text-xl text-gray-400">What would you like to do today?</p>
      </div>
      <WeatherWidget />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            onClick={() => setCurrentView(feature.view)}
            color={feature.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;