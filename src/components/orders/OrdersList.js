import { View, Text, FlatList } from 'react-native'
import OrderRow from './OrderRow'

const orders = [
    {
        id: 304234,
        orderId: 1,
        customerId: 0,
        products: [
            {
                id: 423,
                title: 'Tonic',
                price: 1.00,
                qty: 2,
            },
            {
                id: 234322,
                title: 'Spritz',
                price: 2.50,
                qty: 1,
            },
            {
                id: 2343243,
                title: 'Coca Cola',
                price: 1.50,
                qty: 1,
            }
        ]
    },
    {
        id: 304234,
        orderId: 2,
        customerId: 0,
        products: [
            {
                id: 423,
                title: 'Tonic',
                price: 1.00,
                qty: 2,
            },
            {
                id: 234322,
                title: 'Spritz',
                price: 2.50,
                qty: 1,
            },
            {
                id: 2343243,
                title: 'Coca Cola',
                price: 1.50,
                qty: 1,
            }
        ]
    }
]

const OrdersList = () => {

    const editedOrders = orders.map(order => order.products.map(product => ({ ...product, id: product.id + order.orderId }))).reduce((a, b) => ([...a, ...b]))

    return (
        <View>
            <FlatList
                // contentContainerStyle={styles.list}
                data={editedOrders}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <OrderRow order={item} />}
            />
        </View >
    )
}

export default OrdersList
