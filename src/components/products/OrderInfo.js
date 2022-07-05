import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const order = [
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
    return (
        <View style={styles.container}>
            {/* Close Button */}
            <View style={styles.closeContainer}>
                <TouchableOpacity style={styles.close} onPress={handleSheetClose}>
                    <AntDesign name="close" size={22} color="#444" />
                </TouchableOpacity>
            </View>
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
                    data={[...order, { id: -1, title: 'TOTALE', price: order.map(o => o.price).reduce((a, b) => a + b) }]}
                    keyExtractor={order => order.id}
                    renderItem={({ item }) => <OrderRow product={item} />}
                />
            </View>
            {/* Confirm Buttons */}
            <View style={styles.btnsContainer}>
                <View>
                    <TouchableOpacity style={styles.cancel} onPress={handleSheetClose}>
                        <Text style={{ color: 'rgb(55, 65, 81)' }}>Annulla</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.notPaid} onPress={handleSheetClose}>
                        <Text>Non Pagato</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paid} onPress={handleSheetClose}>
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
        borderBottomRightRadius: 5
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
