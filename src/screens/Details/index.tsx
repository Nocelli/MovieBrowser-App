import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { getMovieDetailById, MovieDetails } from '../../services/api'

interface Params {
    imdbID: string
}

const Details = () => {
    const route = useRoute()
    const routeParams = route.params as Params
    const [movieDetails, setMovieDetails] = useState<MovieDetails>()

    useEffect(() => {
        getMovieDetailById(routeParams.imdbID).then(response => setMovieDetails(response))
    }, [])

    return (
        <View style={styles.Container}>
            {
                !movieDetails ?
                    (
                        <Text style={styles.Loading}>
                            Carregando...
                        </Text>
                    )
                    :
                    (
                        <View>
                            <Text style={styles.TitleText}>
                                {movieDetails.Title}
                            </Text>
                            {
                                movieDetails.Ratings.map((item, index) =>
                                    <Text
                                        key={index}
                                        style={styles.DetailsText}>{item.Value}
                                    </Text>
                                )}
                        </View>
                    )
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
    TitleText: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 20,
        lineHeight: 32,
        color: '#1d1d1f',
        maxWidth: '85%'
    },
    DetailsText: {
        fontFamily: 'Ubuntu_300Light',
        fontSize: 18,
        lineHeight: 24,
        color: '#333'
    },
})
export default Details