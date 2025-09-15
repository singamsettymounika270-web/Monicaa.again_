import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MOCK_USER_CLOSET } from '../constants';
import { OutfitItem } from '../types';
import { virtualTryOn } from '../services/geminiService';
import Spinner from './Spinner';

const ARTryOn: React.FC = () => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [selectedClothing, setSelectedClothing] = useState<OutfitItem | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      streamRef.current = stream;
      setIsCameraOn(true);
      setUserImage(null);
      setResultImage(null);
    } catch (err)
      {
      console.error("Error accessing camera:", err);
      setError("Could not access camera. Please check permissions.");
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCameraOn(false);
  }, []);
  
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  const captureFrame = useCallback(() => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        setUserImage(canvas.toDataURL('image/jpeg'));
        stopCamera();
      }
    }
  }, [stopCamera]);

  const handleUserImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      stopCamera();
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result as string);
        setResultImage(null);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  
  const getBase64FromImageUrl = async (url: string): Promise<string> => {
    const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const handleTryOn = useCallback(async () => {
    if (!userImage || !selectedClothing) {
      setError("Please provide your photo and select an item to try on.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setResultImage(null);
    try {
      const userImageBase64 = userImage.split(',')[1];
      const clothingImageBase64 = await getBase64FromImageUrl(selectedClothing.imageUrl);
      
      const result = await virtualTryOn(userImageBase64, clothingImageBase64, "wear this item");
      setResultImage(`data:image/jpeg;base64,${result}`);

    } catch (err) {
      setError("Failed to generate the try-on image. This can happen due to cross-origin policies on images. Please try another item.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [userImage, selectedClothing]);

  return (
    <div className="animate-fade-in">
       <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-100 tracking-tight">Virtual Try-On</h1>
        <p className="mt-2 text-lg text-gray-400">See how it looks before you decide. Upload your photo and choose an item.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl shadow-lg">
            <h2 className="font-semibold text-lg mb-3 text-gray-200">1. Your Picture</h2>
            <div className="w-full aspect-square bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden border border-gray-700">
                {isCameraOn ? (
                    <video ref={videoRef} autoPlay className="w-full h-full object-cover" />
                ) : userImage ? (
                    <img src={userImage} alt="User" className="w-full h-full object-cover" />
                ) : (
                    <span className="text-gray-500 text-sm">Upload or use camera</span>
                )}
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
                <button onClick={isCameraOn ? stopCamera : startCamera} className="text-sm py-2 px-3 bg-blue-600/20 text-blue-300 font-semibold rounded-lg hover:bg-blue-600/40 transition">{isCameraOn ? "Stop" : "Camera"}</button>
                {isCameraOn && <button onClick={captureFrame} className="text-sm py-2 px-3 bg-green-600/20 text-green-300 font-semibold rounded-lg hover:bg-green-600/40 transition">Capture</button>}
                {!isCameraOn && <label htmlFor="user-img-upload" className="text-sm text-center py-2 px-3 bg-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-600 transition cursor-pointer">Upload</label>}
                <input id="user-img-upload" type="file" className="hidden" accept="image/*" onChange={handleUserImageUpload} />
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-2xl shadow-lg">
            <h2 className="font-semibold text-lg mb-3 text-gray-200">2. Choose an Item</h2>
            <div className="grid grid-cols-3 gap-2 max-h-56 overflow-y-auto pr-1">
              {MOCK_USER_CLOSET.map(item => (
                <div key={item.id} onClick={() => setSelectedClothing(item)} className={`relative rounded-lg overflow-hidden cursor-pointer border-4 transition-all ${selectedClothing?.id === item.id ? 'border-purple-500 scale-105' : 'border-transparent hover:border-purple-500/50'}`}>
                  <img src={item.imageUrl} alt={item.name} className="aspect-square object-cover" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-gray-800/50 border border-gray-700 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
            <h2 className="font-semibold text-lg mb-3 text-gray-200">3. See the Magic</h2>
            <div className="w-full max-w-lg aspect-square bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden relative border border-gray-700">
                {isLoading ? (
                    <div className="flex flex-col items-center text-gray-400">
                      <Spinner />
                      <span className="mt-2">Styling your look...</span>
                    </div>
                ) : resultImage ? (
                    <img src={resultImage} alt="AR Try-on result" className="w-full h-full object-contain" />
                ) : (
                    <p className="text-gray-500 text-center p-4">Your result will appear here</p>
                )}
            </div>
            <button
                onClick={handleTryOn}
                disabled={!userImage || !selectedClothing || isLoading}
                className="mt-6 w-full max-w-xs py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/20 hover:bg-purple-700 disabled:bg-purple-400 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
            >
                {isLoading ? 'Generating...' : 'Try It On!'}
            </button>
            {error && <p className="text-red-400 mt-4 text-sm text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ARTryOn;