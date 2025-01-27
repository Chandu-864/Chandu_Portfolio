import dImage from '../src/assets/ProjectImages/3d.png'
import poke from '../src/assets/ProjectImages/Pokemon.png'
import weather from '../src/assets/ProjectImages/Weather.png'
import ise from '../src/assets/ProjectImages/ISE.png'
import tictac from '../src/assets/ProjectImages/tic.png'
import cacl from '../src/assets/ProjectImages/cal.png'
import yout from '../src/assets/ProjectImages/yout.png'
import net from '../src/assets/ProjectImages/net.png'
import res from '../src/assets/ProjectImages/res.png'

const projects = [
    {
        img: dImage,
        head: '3D Web App',
        desc: 'Developed an interactive 3D web application using React and Three.js, incorporating models and responsive design.',
        link: 'https://chandu-864.github.io/3D-Portfolio/'
    },
    {
        img: poke,
        head: 'Pokemons',
        desc: 'A Pokémon search web app using the PokéAPI to fetch and display Pokémon details, including names and sprites.',
        link: 'https://chandu-864.github.io/First-151-Pokemons/'
    },
    {
        img: weather,
        head: 'Weather App',
        desc: 'A responsive Weather App fetching real-time data from the OpenWeather API to display weather details.',
        link: 'https://chandu-864.github.io/WeatherApp/'
    },
    {
        img: ise,
        head: 'Image Search Engine',
        desc: 'An image search engine using the Unsplash API to fetch and display images in a grid with seamless pagination.',
        link: 'https://chandu-864.github.io/Image-Search-Engine/'
    },
    {
        img: tictac,
        head: 'Tic-Tac-Toe',
        desc: 'A two-player Tic-Tac-Toe game where players take turns marking cells, with dynamic win and tie notifications. Includes a restart button to reset the game.',
        link: 'https://chandu-864.github.io/Tic-Tac-Toe/'
    },
    {
        img: cacl,
        head: 'Calculator',
        desc: 'A simple and interactive calculator offering basic arithmetic functions and a clean, user-friendly interface',
        link: 'https://chandu-864.github.io/Calculator/'
    },
]

const extras = [
    {
        img: res,
        head: 'Resaturent App',
        desc: "Implemented a complete restaurant management application using MERN stack (MongoDB, Express, React, and Node.js)"
    },
    {
        img: net,
        head: 'Netflix Clone',
        desc: 'Developed a Netflix web app with a dynamic card list,infinite scrolling, and API integration for fetching data'
    },
    {
        img: yout,
        head: 'Youtube Clone',
        desc: 'A YouTube clone featuring video browsing, video player and a sleek, responsive design for user experience.'
    },
]

export {projects, extras};