import React from 'react';
import { WeatherIcon } from '../constants';

// Mock weather data for demonstration
const mockWeatherData = {
    location: "Vizag, Andhra Pradesh, India",
    temperature: "88°F",
    condition: "Sunny & Humid",
    tip: "It's warm and sunny! A light linen shirt and breathable bottoms are a great choice."
};

const WeatherWidget: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto bg-gray-800/50 border border-gray-700 p-6 rounded-2xl shadow-lg flex items-center space-x-6 my-8 animate-fade-in">
            <div className="w-16 h-16 text-blue-400">
                <WeatherIcon />
            </div>
            <div>
                <h3 className="font-bold text-lg text-gray-200">Style Forecast for {mockWeatherData.location}</h3>
                <p className="text-gray-400">{mockWeatherData.temperature}, {mockWeatherData.condition}</p>
                <p className="text-sm text-purple-300 mt-2 italic">"{mockWeatherData.tip}"</p>
            </div>
        </div>
    );
};

export default WeatherWidget;