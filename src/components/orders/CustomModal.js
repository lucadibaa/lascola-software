import { View, Text, Modal, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

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

const CustomModal = ({ order, modalVisible, setModalVisible }) => {
    if (!order) return null
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View>
                        <Text style={{ fontSize: 15 }}>Il cliente <Text style={{ fontWeight: '600' }}>Giovanni Rana</Text> ha pagato</Text>
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
                                data={[...order?.products, (order?.products.length > 1 && { id: -1, title: 'TOTALE', price: order?.products.map(o => o.price).reduce((a, b) => a + b) })].filter(p => p)}
                                keyExtractor={product => product.id}
                                renderItem={({ item }) => <ProductRow product={item} />}
                            />
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        <TouchableOpacity style={{ ...styles.button, backgroundColor: 'red' }} onPress={() => setModalVisible(!modalVisible)}                        >
                            <Text style={styles.textStyle}>No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.button, backgroundColor: 'green' }} onPress={() => setModalVisible(!modalVisible)}                        >
                            <Text style={styles.textStyle}>Si</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, .6)",
    },
    modalView: {
        width: '80%',
        margin: 20,
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    button: {
        borderRadius: 999,
        paddingVertical: 12,
        paddingHorizontal: 25,
        elevation: 2
    },
});

export default CustomModal