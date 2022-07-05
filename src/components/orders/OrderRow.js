import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

const ProductRow = ({ product }) => {
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

const OrderRow = ({ order, setOrder, setModalVisible }) => {

    return (
        <View style={styles.container}>
            <View style={styles.leftView}>
                <TouchableOpacity style={{ ...styles.paidInfo, backgroundColor: order.paid ? 'green' : 'red' }} onPress={() => { setModalVisible(true), setOrder(order) }}>
                    <Text style={{ fontSize: 8, textAlign: 'center', color: '#fff' }}>{order.paid ? 'Pagato' : 'Non Pagato'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rightView}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#777', paddingBottom: 8 }}>
                    <Text style={{ fontWeight: '600', fontSize: 16, letterSpacing: .5 }}>Giovanni Rana</Text>
                </View>
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
                        data={[...order.products, (order.products.length > 1 && { id: -1, title: 'TOTALE', price: order.products.map(o => o.price).reduce((a, b) => a + b) })].filter(p => p)}
                        keyExtractor={product => product.id}
                        listKey={product => product.id}
                        renderItem={({ item }) => <ProductRow product={item} />}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginVertical: 6,
        padding: 10
    },
    leftView: {
        flex: 1,
        marginRight: 15
    },
    paidInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 999
    },
    rightView: {
        flex: 5,
        justifyContent: 'center',
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    table: {
        marginTop: 13,
        backgroundColor: 'rgb(243, 244, 246)',
        borderRadius: 5
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
})

export default OrderRow
