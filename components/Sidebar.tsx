
import React from 'react';
import { View } from '../types';
// FIX: Module '"../constants"' has no exported member 'DashboardIcon'. Changed to 'MyClosetIcon'.
import { Logo, MyClosetIcon, AddIcon, CameraIcon, SyncIcon } from '../constants';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  view: View;
  currentView: View;
  onClick: (view: View) => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, view, currentView, onClick }) => {
  const isActive = currentView === view;
  return (
    <button
      onClick={() => onClick(view)}
      className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-all duration-200 ${
        isActive
          ? 'bg-purple-100 text-purple-700'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <div className="w-6 h-6 mr-4">{icon}</div>
      <span className="font-semibold">{label}</span>
    </button>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  const navItems = [
    // FIX: Property 'Dashboard' does not exist on type 'typeof View'. Changed to 'MyCloset' and updated icon.
    { icon: <MyClosetIcon />, label: 'My Closet', view: View.MyCloset },
    { icon: <AddIcon />, label: 'Add Outfit', view: View.AddItem },
    { icon: <CameraIcon />, label: 'AR Try-on', view: View.ARTryOn },
    { icon: <SyncIcon />, label: 'Wardrobe Sync', view: View.WardrobeSync },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col justify-between">
      <div>
        <div className="mb-10">
          <Logo />
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.view}
              icon={item.icon}
              label={item.label}
              view={item.view}
              currentView={currentView}
              onClick={setCurrentView}
            />
          ))}
        </nav>
      </div>
      
      <div className="mt-auto">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <img src="https://picsum.photos/seed/user/100/100" alt="User" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold text-gray-800">Casey</p>
            <a href="#" className="text-sm text-purple-600 hover:underline">View Profile</a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
