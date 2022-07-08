import { Text, View } from 'react-native'
import HomeReports from '../components/home/HomeReports'

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* Best Cusomer of The Month */}
            {/* Reports of the day */}
            {/* <HomeReports /> */}
            <Text>Totale incassi giornaliero</Text>
            <Text>{450} €</Text>
        </View>
    )
}

export default HomeScreen
