import { View, Text, StyleSheet } from 'react-native'

const ProductRow = ({ product }) => {
    return (
        <View style={{ ...styles.tbodyRow, borderTopWidth: product.id === -1 ? 1 : 0, borderTopColor: 'rgb(156, 163, 175)' }}>
            <View style={{ flex: 2 }} >
                <Text style={styles.tbodyItemText}>{product.name}</Text>
            </View>
            <View style={styles.tbodyItem}>
                <Text style={styles.tbodyItemText}>{product.stock}</Text>
            </View>
            <View style={styles.tbodyItem}>
                <Text style={{ ...styles.tbodyItemText, fontSize: product.id === -1 ? 18 : 14, fontWeight: product.id === -1 ? '500' : 'normal' }}>{parseFloat(product.price * (product.qty || 1)).toFixed(2)} €</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default ProductRow
