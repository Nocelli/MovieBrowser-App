export interface MovieList {
    totalResults: string
    Search: {
        Title: string
        Year: string
        imdbID: string
        Type: string
        Poster: string
    }[]
}

export interface MovieDetails {
    Title: string
    Year: string
    Runtime: string
    Genre: string
    Director: string
    Actors: string
    Awards: string
    Poster: string
    Type: string
    Ratings: {
        Source: string
        Value: string
    }[]
}

export async function getMovies(query: string, page?: number): Promise<MovieList> {

    const serializedQuery = query.replace(' ', '+')

    const response = await fetch(`https://www.omdbapi.com/?apikey=d0afcd37&s=${serializedQuery}&page=${page || 1}`,
        {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })

    return response.json()
}

export async function getMovieDetailById(id: string): Promise<MovieDetails> {

    const response = await fetch(`http://www.omdbapi.com/?apikey=d0afcd37&i=${id}`,
        {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })

    return response.json()
}

export default getMovies