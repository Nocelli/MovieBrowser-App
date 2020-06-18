
const getMovies = async (query: string, page?: number) => {

    const serializedQuery = query.replace(' ','+')

    const response = await fetch(`https://www.omdbapi.com/?apikey=d0afcd37&s=${serializedQuery}&page=${page || 1}`,
        {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })

    return response.json()
}

export default getMovies