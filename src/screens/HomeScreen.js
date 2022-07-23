import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const HomeScreen = () => {

    const { orders } = useSelector(state => state.data)

    const total = [].concat.apply([], orders?.map(o => o?.products))?.map(o => o?.price * o.qty)?.reduce((a, b) => a + b, 0)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* Best Cusomer of The Month */}
            {/* Reports of the day */}
            {/* <HomeReports /> */}
            <Text>Totale incassi giornaliero</Text>
            <Text>{parseFloat(total).toFixed(2)} €</Text>
        </View>
    )
}

export default HomeScreen
