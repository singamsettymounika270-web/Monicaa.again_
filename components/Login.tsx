import React from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="relative flex items-center justify-center h-screen w-screen bg-gray-900 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform scale-105" 
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto-format&fit=crop')", filter: 'blur(8px)'}}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 w-full max-w-md p-8 space-y-8 bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 transition-all">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-white tracking-tight">Welcome to SmartWardrobe</h1>
                <p className="mt-2 text-gray-300">Your personal AI wardrobe assistant.</p>
            </div>

            <div className="space-y-4">
                <button 
                    onClick={onLogin} 
                    className="w-full flex items-center justify-center px-4 py-3 font-semibold text-white bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500 transform hover:scale-105">
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.021,35.596,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    Continue with Google
                </button>
                <button 
                    onClick={onLogin} 
                    className="w-full flex items-center justify-center px-4 py-3 font-semibold text-gray-200 bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm hover:bg-gray-700/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500 transform hover:scale-105">
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.182.008C10.148-.03 9.07.247 8.25.916c-.82-.67-1.898-.947-2.932-.908C3.34 0 .5 2.5 1.094 6.244c.572 3.63 3.493 6.908 6.166 6.908 2.673 0 5.594-3.278 6.166-6.908C13.916 2.5 11.07 0 9.098.008ZM10.09 4.95a.69.69 0 0 1 .634.638c-.015 1.58-.935 2.917-2.494 2.917-1.56 0-2.48-1.337-2.495-2.917a.69.69 0 0 1 .634-.638c.64-.044 1.25.27 1.86.27.608 0 1.218-.314 1.86-.27Z"/>
                    </svg>
                    Continue with Apple
                </button>
                <button 
                    onClick={onLogin} 
                    className="w-full flex items-center justify-center px-4 py-3 font-semibold text-gray-200 bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm hover:bg-gray-700/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500 transform hover:scale-105">
                    <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Continue with Email
                </button>
                 <button 
                    onClick={onLogin} 
                    className="w-full flex items-center justify-center px-4 py-3 font-semibold text-gray-200 bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm hover:bg-gray-700/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500 transform hover:scale-105">
                     <svg className="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    Continue with Mobile
                </button>
            </div>
            
            <p className="text-xs text-center text-gray-400">
                By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
        </div>
    </div>
  );
};

export default Login;