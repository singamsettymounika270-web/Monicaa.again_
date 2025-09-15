import React from 'react';

const SkeletonLoader: React.FC = () => {
    return (
        <div className="bg-gray-800/50 border border-gray-700 p-5 rounded-xl shadow-lg w-full animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-3 bg-gray-700 rounded w-full mb-6"></div>
            <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gray-700"></div>
                <div className="w-16 h-16 rounded-full bg-gray-700"></div>
                <div className="w-16 h-16 rounded-full bg-gray-700"></div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
