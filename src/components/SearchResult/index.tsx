import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

interface Props {
    title: string
    year: string
    type: string
    imdbID: string
    poster: string
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

const SearchResult: React.FC<Props> = ({ title, year, type, poster, imdbID }) => {
    return (
        <View style={styles.SearchResult} key={imdbID}>
            <View style={styles.Details}>
                <Text style={styles.TitleText}>
                    {title}
                </Text>
                <Text style={styles.DetailsText}>
                    {`Ano: ${year}`}
                </Text>
                <Text style={styles.DetailsText}>
                    {`Tipo: ${formatType(type)}`}
                </Text>
            </View>
            <View style={styles.Poster}>
                <Image
                    style={styles.PosterImage}
                    source={(poster !== 'N/A' ? { uri: poster } : require('../../assets/noposter.png'))}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    SearchResult: {
        padding: 8,
        borderRadius: 12,
        backgroundColor: '#D3D3D3',
        width: 348,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 16
    },
    Poster: {
        width: '30%'
    },
    Details: {
        width: '65%'
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
    PosterImage: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        borderRadius: 6,
        borderColor: '#121312',
    }
})

export default SearchResult