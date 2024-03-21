import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/card';
import logo from  './media/logo.png';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  const fetchNowPlaying = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=d44a93aedf4221b5cc660be611e47d39', {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDRhOTNhZWRmNDIyMWI1Y2M2NjBiZTYxMWU0N2QzOSIsInN1YiI6IjY1ZmE5NDVmNzcwNzAwMDE0OTA1ZDMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vLeIlhWw95m5PTIfeYbBNY6w_nwtbPtuZwcretb_WN4'
        }
      });
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <body className='bg-black'>
      <nav class="bg-black border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="{logo}" class="h-8" alt="Flowbite Logo" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full bg-black md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col bg-black p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  md: dark:border-gray-700">
              <li>
                <a href="#" class="block py-2 px-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container mx-10  py-8'>
        <div className='flex flex-wrap gap-4'>
          {movies.map((movie, index) => (
            <Card
              key={index}
              title={movie.original_title}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              price={movie.vote_average}
              vote={movie.vote_average}
            />
          ))}
        </div>
      </div>
    </body>
  );
}

export default App;
