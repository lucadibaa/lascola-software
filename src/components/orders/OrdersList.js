import { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import CustomModal from './CustomModal'
import OrderRow from './OrderRow'

const OrdersList = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [order, setOrder] = useState(null)

    const { orders } = useSelector(state => state.data)


    return (
        <View>
            <FlatList
                contentContainerStyle={styles.list}
                data={orders?.filter(o => {
                    const today = new Date()
                    const yesterday = new Date()
                    yesterday.setDate(yesterday.getDate() - 1)

                    if (new Date(o.date).toDateString() === today.toDateString() || new Date(o.date).toDateString() === yesterday.toDateString()) return o
                })?.sort((a, b) => new Date(b?.date) - new Date(a?.date))}
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
