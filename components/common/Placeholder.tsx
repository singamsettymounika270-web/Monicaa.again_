import React from 'react';

interface PlaceholderProps {
    title: string;
    icon: React.ReactNode;
}

const Placeholder: React.FC<PlaceholderProps> = ({ title, icon }) => (
    <div className="text-center animate-fade-in flex flex-col items-center justify-center h-[60vh]">
        <div className="w-24 h-24 text-purple-800 opacity-70">{icon}</div>
        <h1 className="text-4xl font-extrabold text-gray-200 mt-4">{title}</h1>
        <p className="mt-2 text-lg text-gray-500">This feature is coming soon. Stay tuned!</p>
    </div>
);

export default Placeholder;