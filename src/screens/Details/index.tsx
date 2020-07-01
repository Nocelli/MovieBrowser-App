import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import getMovies from '../../services/api'

import SearchResult from '../../components/SearchResult'

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
    const [movies, setMovies] = useState<MovieList>({} as MovieList)
    const [total, setTotal] = useState<number>(0)
    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        getMovies(routeParams.search).then(response => {
            setMovies(response)
            setTotal(parseInt(response.totalResults))
        })
        setPage(page + 1)
    }, [])

    const loadMovies = async () => {
        if (loading) {
            return
        }

        if (page === Math.ceil(total / 10)) {
            return
        }

        setLoading(true)
        const response = await getMovies(routeParams.search, page)
        setMovies({ totalResults: response.totalResults, Search: [...movies.Search, ...response.Search] })
        setPage(page + 1)
        setLoading(false)
    }
    return (
        <View style={styles.Container}>
            {
                movies.totalResults ? (
                    <>
                        <FlatList
                            data={movies.Search}
                            onEndReached={loadMovies}
                            onEndReachedThreshold={0.5}
                            keyExtractor={movie => String(movie.imdbID)}
                            style={styles.ResultsContainer}
                            renderItem={({ item: movie }) => (
                                <SearchResult
                                    imdbID={movie.imdbID}
                                    title={movie.Title}
                                    year={movie.Year}
                                    type={movie.Type}
                                    poster={movie.Poster} />
                            )}
                        />
                        {loading ? (<Text style={styles.Loading}>Carregando...</Text>) : null}
                    </>)
                    : <Text style={styles.Loading}>Carregando...</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Loading: {
        fontFamily: 'Ubuntu_300Light',
        fontSize: 32
    },
    ResultsContainer: {
        marginTop: 36
    }
})
export default Details