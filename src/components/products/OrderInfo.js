import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import SearchableDropdown from 'react-native-searchable-dropdown'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import { clearProducts, createOrder } from '../../redux/slices/orderSlice'
import { useDispatch, useSelector } from 'react-redux'

const customers = [
    {
        id: 1,
        name: 'JavaScript',
    },
    {
        id: 2,
        name: 'Java',
    },
    {
        id: 3,
        name: 'Ruby',
    },
    {
        id: 4,
        name: 'React Native',
    },
    {
        id: 5,
        name: 'PHP',
    },
    {
        id: 6,
        name: 'Python',
    },
    {
        id: 7,
        name: 'Go',
    },
    {
        id: 8,
        name: 'Swift',
    },
]

const OrderRow = ({ product }) => {
    return (
        <View style={{ ...styles.tbodyRow, borderTopWidth: product.id === -1 ? 1 : 0, borderTopColor: 'rgb(156, 163, 175)' }}>
            <View style={{ flex: 2 }} >
                <Text style={styles.tbodyItemText}>{product.title}</Text>
            </View>
            <View style={styles.tbodyItem}>
                <Text style={styles.tbodyItemText}>{product.qty}</Text>
            </View>
            <View style={styles.tbodyItem}>
                <Text style={{ ...styles.tbodyItemText, fontSize: product.id === -1 ? 18 : 14, fontWeight: product.id === -1 ? '500' : 'normal' }}>{parseFloat(product.price * (product.qty || 1)).toFixed(2)} €</Text>
            </View>
        </View>
    )
}

const OrderInfo = ({ handleSheetClose }) => {

    const { orderProducts } = useSelector(state => state.order)
    const dispatch = useDispatch()

    const [selectedCustomer, setSelectedCustomer] = useState('')

    const handleCancel = () => {
        dispatch(clearProducts())
        handleSheetClose()
    }

    const hanldeOrder = paid => {
        const customer = customers.find(c => c.name === selectedCustomer)

        if (!customer) {
            // create new customer
        }

        const order = {
            customerId: customer?.id,
            paid,
            products: orderProducts
        }

        // create new order
        dispatch(clearProducts())
        handleSheetClose()
    }

    return (
        <View style={styles.container}>
            {/* Close Button */}
            <View style={styles.closeContainer}>
                <TouchableOpacity style={styles.close} onPress={handleSheetClose}>
                    <AntDesign name="close" size={22} color="#444" />
                </TouchableOpacity>
            </View>
            {/* Select Customer */}
            <SearchableDropdown
                onItemSelect={customer => setSelectedCustomer(customer.name)}
                onRemoveItem={() => setSelectedCustomer(null)}
                containerStyle={{ width: '60%' }}
                itemStyle={{
                    padding: 10,
                    marginTop: 2,
                    backgroundColor: '#ddd',
                    borderColor: '#bbb',
                    borderWidth: 1,
                    borderRadius: 5,
                }}
                itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: 130 }}
                items={customers}
                resetValue={false}
                textInputProps={{
                    placeholder: "Seleziona un cliente",
                    underlineColorAndroid: "transparent",
                    value: selectedCustomer,
                    onChangeText: e => setSelectedCustomer(e),
                    style: {
                        padding: 8,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 8,
                    }
                }}
                listProps={{
                    nestedScrollEnabled: true,
                }}
            />
            {/* Table */}
            <View style={styles.table}>
                <View style={styles.thead}>
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.theadItemText}>Prodotto</Text>
                    </View>
                    <View style={styles.theadItem}>
                        <Text style={styles.theadItemText}>Qty</Text>
                    </View>
                    <View style={styles.theadItem}>
                        <Text style={styles.theadItemText}>Prezzo</Text>
                    </View>
                </View>
                <FlatList
                    contentContainerStyle={styles.tbody}
                    data={[...orderProducts, { id: -1, title: 'TOTALE', price: orderProducts.length > 0 ? orderProducts.map(o => o.price).reduce((a, b) => a + b) : 0 }]}
                    keyExtractor={order => order.id}
                    renderItem={({ item }) => <OrderRow product={item} />}
                />
            </View>
            {/* Confirm Buttons */}
            <View style={styles.btnsContainer}>
                <View>
                    <TouchableOpacity style={styles.cancel} onPress={handleCancel}>
                        <Text style={{ color: 'rgb(55, 65, 81)' }}>Annulla</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.notPaid} onPress={() => hanldeOrder(false)}>
                        <Text>Non Pagato</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paid} onPress={() => hanldeOrder(false)}>
                        <Text>Pagato</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    closeContainer: {
        alignSelf: 'flex-end',
        marginRight: 15
    },
    close: {
        width: 35,
        height: 35,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    table: {
        width: '90%',
        marginTop: 20,
        maxHeight: 210,
        overflow: 'scroll'
    },
    thead: {
        flexDirection: 'row',
        backgroundColor: 'rgb(229, 231, 235)',
        padding: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    theadItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    theadItemText: {
        textTransform: 'uppercase',
        fontSize: 13,
        fontWeight: '500',
        color: 'rgb(75, 85, 99)',
        letterSpacing: .5
    },
    tbody: {
        backgroundColor: 'rgb(243, 244, 246)',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    tbodyRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    tbodyItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tbodyItemText: {
        color: 'rgb(17, 24, 39)'
    },
    btnsContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 25,
    },
    cancel: {
        alignSelf: 'flex-start',
        borderColor: 'rgb(209, 213, 219)',
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 10
    },
    notPaid: {
        alignSelf: 'flex-start',
        borderColor: 'rgb(209, 213, 219)',
        backgroundColor: 'red',
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 10,
        marginRight: 5
    },
    paid: {
        alignSelf: 'flex-start',
        borderColor: 'rgb(209, 213, 219)',
        backgroundColor: 'green',
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 10
    },
})

export default OrderInfo
