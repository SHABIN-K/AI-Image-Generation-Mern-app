import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { logo } from './assets'
import { Home, CreatePost } from "./pages";
import GithubCorner from 'react-github-corner';

const NoInternetConnection = () => {
  return (
    <div className="no-internet-connection">
      <h2>No Internet Connection</h2>
      <p>Please check your internet connection and try again.</p>
    </div>
  );
};

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const checkConnection = () => {
      setIsConnected(navigator.onLine);
    };

    window.addEventListener("online", checkConnection);
    window.addEventListener("offline", checkConnection);

    return () => {
      window.removeEventListener("online", checkConnection);
      window.removeEventListener("offline", checkConnection);
    };
  }, []);

  return (
    <BrowserRouter>
      {isConnected ? (
        <>
          <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
            <Link to="/">
              <img src={logo} alt="logo" className="w-28 object-contain" />
            </Link>
            <Link to="/create-post" className='font-inter font-medium bg-[#6469ff]  text-white px-4 py-4 mr-[50px] rounded-md'>Create</Link>  
          </header>
          <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/create-post' element={<CreatePost/>}/>
            </Routes>
          </main>
          <GithubCorner href="https://github.com/SHABIN-K/AI-Image-Generation-app" />
        </>
      ) : (
        <NoInternetConnection />
      )}
    </BrowserRouter>
  );
};

export default App;
