import React, { useState, useCallback } from 'react';
import { View } from './types';
import Home from './components/Home';
import MyCloset from './components/MyCloset';
import AddItem from './components/AddItem';
import ARTryOn from './components/ARTryOn';
import WardrobeSync from './components/WardrobeSync';
import Login from './components/Login';
import Header from './components/Header';
import Profile from './components/Profile';
import SurpriseMe from './components/SurpriseMe';
import Placeholder from './components/common/Placeholder';
import { HeartIcon, ShoppingBagIcon, StarIcon } from './constants';


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState<View>(View.Home);

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true);
    setCurrentView(View.Home);
  }, []);

  const handleNavigate = useCallback((view: View) => {
    setCurrentView(view);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case View.Home:
        return <Home setCurrentView={handleNavigate} />;
      case View.MyCloset:
        return <MyCloset />;
      case View.AddItem:
        return <AddItem />;
      case View.ARTryOn:
        return <ARTryOn />;
      case View.WardrobeSync:
        return <WardrobeSync />;
      case View.Profile:
        return <Profile />;
      case View.SurpriseMe:
          return <SurpriseMe />;
      case View.Favorites:
          return <Placeholder title="Favorites" icon={<HeartIcon />} />;
      case View.Wishlist:
          return <Placeholder title="Wishlist" icon={<StarIcon />} />;
      case View.Shopping:
          return <Placeholder title="Shopping" icon={<ShoppingBagIcon />} />;
      default:
        return <Home setCurrentView={handleNavigate} />;
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen text-gray-100">
      <Header 
        currentView={currentView}
        onNavigateHome={() => handleNavigate(View.Home)}
        onNavigate={handleNavigate}
      />
      <main className="p-4 sm:p-6 lg:p-8">
        {renderView()}
      </main>
    </div>
  );
};

export default App;