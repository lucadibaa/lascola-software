import { useState } from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import CustomModal from './CustomModal'
import OrderRow from './OrderRow'

const orders = [
    {
        id: 304234,
        orderId: 3,
        customerId: 0,
        paid: true,
        products: [
            {
                id: 423,
                name: 'Tonic',
                price: 1.00,
                qty: 2,
            }
        ]
    },
    {
        id: 304234,
        orderId: 1,
        customerId: 0,
        paid: true,
        products: [
            {
                id: 423,
                name: 'Tonic',
                price: 1.00,
                qty: 2,
            },
            {
                id: 234322,
                name: 'Spritz',
                price: 2.50,
                qty: 1,
            },
            {
                id: 2343243,
                name: 'Coca Cola',
                price: 1.50,
                qty: 1,
            }
        ]
    },
    {
        id: 304234,
        orderId: 2,
        customerId: 0,
        paid: false,
        products: [
            {
                id: 423,
                name: 'Tonic',
                price: 1.00,
                qty: 2,
            },
            {
                id: 234322,
                name: 'Spritz',
                price: 2.50,
                qty: 1,
            },
            {
                id: 2343243,
                name: 'Coca Cola',
                price: 1.50,
                qty: 1,
            }
        ]
    }
]

const OrdersList = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [order, setOrder] = useState(null)

    return (
        <View>
            <FlatList
                contentContainerStyle={styles.list}
                data={orders}
                keyExtractor={item => item.id}
                listKey={item => item.id}
                renderItem={({ item }) => <OrderRow order={item} setOrder={setOrder} setModalVisible={setModalVisible} />}
            />
            <CustomModal order={order} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        paddingVertical: 15,
        backgroundColor: 'gray',
        minHeight: '100%'
    }
})

export default OrdersList
