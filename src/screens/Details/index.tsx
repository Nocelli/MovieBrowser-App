import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { getMovieDetailById, MovieDetails } from '../../services/api'

interface Params {
    imdbID: string
}
function formatType(type: string) {
    switch (type) {
        case 'game':
            return ('Jogo')
        case 'series':
            return ('Seriado')
        default:
            return ('Filme')
    }
}

const Details = () => {
    const route = useRoute()
    const routeParams = route.params as Params
    const [movieDetails, setMovieDetails] = useState<MovieDetails>()

    useEffect(() => {
        getMovieDetailById(routeParams.imdbID).then(response => setMovieDetails(response))
    }, [])

    return (
        <ScrollView style={styles.Container}>
            {
                !movieDetails ?
                    (
                        <View style={styles.Loading}>
                            <Text style={styles.LoadingText}>Carregando...</Text>
                        </View>
                    )
                    :
                    (
                        <View style={styles.Container}>
                            <View style={styles.Content}>
                                <Image style={styles.PosterImage} source={(movieDetails.Poster !== 'N/A' ? { uri: movieDetails.Poster } : require('../../assets/noposter.png'))} />
                                <View style={styles.Details}>
                                    <Text style={styles.TitleText}>{movieDetails.Title}</Text>
                                    <Text style={styles.DetailsText}>({movieDetails.Year})</Text>
                                    <Text style={styles.DetailsText}>Tipo: {formatType(movieDetails.Type)}</Text>
                                    <Text style={styles.DetailsGenre}>{movieDetails.Genre}</Text>
                                    <Text style={styles.DetailsText}>Duração: {movieDetails.Runtime}</Text>
                                    <Text style={styles.DetailsText}>Diretor: {movieDetails.Director}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.TitleTextSmall}>Avaliações</Text>
                                {
                                    movieDetails.Ratings.map((rating, index) => (
                                            <Text key={index} style={styles.DetailsTextSmall}>{rating.Source}: <Text style={styles.Rating}>{rating.Value}</Text></Text>
                                    ))
                                }
                                <Text style={styles.TitleTextSmall}>Elenco</Text>
                                <Text style={styles.DetailsTextSmall}>{movieDetails.Actors}</Text>
                                <Text style={styles.TitleTextSmall}>Prêmios</Text>
                                <Text style={styles.DetailsTextSmall}>({movieDetails.Awards})</Text>
                            </View>
                        </View>

                    )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginBottom: 12
    },
    Loading: {
        flex: 1,
        marginTop: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },
    LoadingText: {
        fontFamily: 'Ubuntu_300Light',
        fontSize: 32,
    },
    Content: {
        justifyContent: 'flex-start',
        marginTop: 30,
        flexDirection: "row",
        flexWrap: 'wrap',
        borderBottomWidth: 2,
        borderColor: '#5a5a5f'
    },
    Details: {
        flex: 1,
        alignItems: 'center'
    },
    TitleText: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 24,
        lineHeight: 32,
        color: '#F13F40' || '#1d1d1f',
        textAlign: "center"
    },
    TitleTextSmall: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 8,
        color: '#F13F40' || '#18181a',
        textAlign: "center"
    },
    Rating: {
        fontSize: 20,
        color: '#0f0f05',
    },
    DetailsText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        lineHeight: 26,
        color: '#333',
        paddingTop: 8,
        textAlign: "center"
    },
    DetailsTextSmall: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 18,
        lineHeight: 26,
        paddingLeft: 12,
        color: '#555',
        textAlign: "justify"
    },
    DetailsGenre: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        marginTop: 18,
        color: '#202020',
        textAlign: "center"
    },
    PosterImage: {
        width: 200,
        height: 300,
        resizeMode: "contain",
        borderRadius: 6,
        borderColor: '#121312',
        margin: 6
    }
})
export default Details