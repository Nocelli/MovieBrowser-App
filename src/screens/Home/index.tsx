import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ImageBackground, KeyboardAvoidingView } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
    const [search,setSeatch] = useState('')

    const handleSearch = () => {
        navigation.navigate('Details', { search })
    } 

    return (
        <KeyboardAvoidingView behavior={"height"} style={styles.ScreenContainer}>
            <View style={styles.Header}>
                <Text style={styles.HeaderTextMain} >Encontre novos filmes!</Text>
                <ImageBackground
                    style={styles.Logo}
                    source={require('../../assets/home_background.jpg')}
                >
                    <Text style={styles.HeaderTextDescription} >Digite no campo abaixo, o nome do filme para buscar</Text>
                </ImageBackground>
            </View>
            <View style={styles.Body}>
                <TextInput 
                    style={styles.SearchBar} 
                    placeholder='Digite o nome de um filme'
                    onChangeText={setSeatch}
                    value={search}
                     />
                <TouchableOpacity 
                    style={styles.Button}
                    onPress={handleSearch}
                    disabled={!search}
                    >
                    <View style={styles.ButtonIcon}>
                        <Icon name='arrow-right' color='#fff' size={24} />
                    </View>
                    <Text style={styles.ButtonText}>
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    Logo: {
        resizeMode: 'contain',
        borderRadius: 16,
        height: 175,
        width: 400,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    ScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 32,
        backgroundColor: '#f0f0f5'
    },
    Header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f5',
    },
    HeaderTextMain: {
        fontFamily: 'Ubuntu_700Bold',
        color: '#F13F40',
        fontSize: 24,
        lineHeight: 32,
        marginBottom: 32,
    },
    HeaderTextDescription: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
        textAlign: "center",
    },
    Body: {
        marginTop: 32,
    },
    Button: {
        backgroundColor: '#F13F40',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    ButtonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    },
    ButtonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    SearchBar: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    }
})

export default Home