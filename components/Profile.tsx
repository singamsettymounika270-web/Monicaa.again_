import React, { useState } from 'react';
import { UserProfile } from '../types';

const mockProfile: UserProfile = {
    name: 'Monica',
    height: "5'9\"",
    weight: '165 lbs',
    bodyType: 'Athletic',
    location: 'New York, NY',
};

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile>(mockProfile);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would save this to a backend.
        console.log("Saved profile:", profile);
        setIsEditing(false);
    };

    return (
        <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-100 tracking-tight">My Profile</h1>
                <p className="mt-2 text-lg text-gray-400">Keep your details updated for the best style recommendations.</p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-2xl shadow-lg">
                <form onSubmit={handleSave}>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                                <input type="text" name="name" id="name" value={profile.name} onChange={handleChange} disabled={!isEditing} className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-700 disabled:text-gray-400" />
                            </div>
                             <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-400">Location</label>
                                <input type="text" name="location" id="location" value={profile.location} onChange={handleChange} disabled={!isEditing} className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-700 disabled:text-gray-400" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div>
                                <label htmlFor="height" className="block text-sm font-medium text-gray-400">Height</label>
                                <input type="text" name="height" id="height" value={profile.height} onChange={handleChange} disabled={!isEditing} className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-700 disabled:text-gray-400" />
                            </div>
                            <div>
                                <label htmlFor="weight" className="block text-sm font-medium text-gray-400">Weight</label>
                                <input type="text" name="weight" id="weight" value={profile.weight} onChange={handleChange} disabled={!isEditing} className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-700 disabled:text-gray-400" />
                            </div>
                             <div>
                                <label htmlFor="bodyType" className="block text-sm font-medium text-gray-400">Body Type</label>
                                <input type="text" name="bodyType" id="bodyType" value={profile.bodyType} onChange={handleChange} disabled={!isEditing} className="mt-1 block w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 disabled:bg-gray-700 disabled:text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-end space-x-4">
                        {isEditing ? (
                            <>
                                <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 text-sm font-semibold text-gray-200 bg-gray-600 rounded-lg hover:bg-gray-500 transition">Cancel</button>
                                <button type="submit" className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition">Save Changes</button>
                            </>
                        ) : (
                            <button type="button" onClick={() => setIsEditing(true)} className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition">Edit Profile</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;