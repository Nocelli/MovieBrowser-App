import React from 'react'
import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

interface Params {
    search: string
}

const Details = () => {
    const route = useRoute()
    const routeParams = route.params as Params

    return (
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                {routeParams.search}
            </Text>
        </View>
    )
}

export default Details