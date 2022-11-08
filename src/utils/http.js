import axios from 'axios'

export const client = axios.create({
    baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&page=1',
    headers: {
        'X-RapidAPI-Key': 'a987493574msha967cb3232a1c7cp1cac5cjsncc26a5d242d1',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    },
})
