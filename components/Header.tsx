import React from 'react';
import { Logo, BackIcon } from '../constants';
import { View } from '../types';

interface HeaderProps {
    onNavigateHome: () => void;
    onNavigate: (view: View) => void;
    currentView: View;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome, onNavigate, currentView }) => {
    return (
        <header className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-4">
                        {currentView !== View.Home && (
                            <button 
                                onClick={onNavigateHome} 
                                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                                aria-label="Go back to homepage"
                            >
                                <BackIcon />
                                <span className="font-semibold text-sm">Back</span>
                            </button>
                        )}
                        <div onClick={onNavigateHome} className="cursor-pointer">
                            <Logo />
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <img src="https://i.pravatar.cc/100?u=monica" alt="User" className="w-10 h-10 rounded-full border-2 border-purple-500/50" />
                        <div>
                            <p className="font-semibold text-gray-200">Monica</p>
                            <button onClick={() => onNavigate(View.Profile)} className="text-sm text-purple-400 hover:underline">View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;