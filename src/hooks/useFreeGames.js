import { useEffect, useState } from 'react'
import { client } from '../utils/http'

export const useFreeGames = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        ;(async () => {
            const { data } = await client.get()
            setGames(
                data.map((el) => ({
                    preview: el.thumbnail,
                    title: el.title,
                    description: el.short_description,
                    release_date: el.release_date,
                    id: el.id,
                }))
            )
        })()
    }, [])

    return {
        games,
    }
}
