import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import getMovies from '../../services/api'

interface Params {
    search: string
}

interface MovieList {
    totalResults: string
    Search: {
        Title: string
        Year: string
        imdbID: string
        Type: string
        Poster: string
    }[]
}

const Details = () => {
    const route = useRoute()
    const routeParams = route.params as Params
    const [movies,setMovies] = useState<MovieList>({} as MovieList)

    useEffect(() => {
        getMovies(routeParams.search).then(response => setMovies(response))
    },[])

    return (
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                {movies.totalResults}
            </Text>
            <Text>
                {movies.Search[0].Title}
            </Text>
        </View>
    )
}

export default Details