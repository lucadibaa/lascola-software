import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import ProductRow from '../components/products/ProductRow'

const ProductsScreen = () => {

    const { products } = useSelector(state => state.data)

    return (
        <View style={styles.container}>
            <View style={styles.topView}>

            </View>
            <View style={styles.bottomView}>
                <View style={styles.table}>
                    <View style={styles.thead}>
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.theadItemText}>Prodotto</Text>
                        </View>
                        <View style={styles.theadItem}>
                            <Text style={styles.theadItemText}>Giacenza</Text>
                        </View>
                        <View style={styles.theadItem}>
                            <Text style={styles.theadItemText}>Prezzo</Text>
                        </View>
                    </View>
                    <FlatList
                        contentContainerStyle={styles.tbody}
                        data={products}
                        keyExtractor={product => product.id}
                        renderItem={({ item }) => <ProductRow product={item} />}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        minHeight: Dimensions.get('window').height
    },
    topView: {

    },
    bottomView: {
        alignItems: 'center',
    },
    table: {
        width: '90%',
        marginTop: 20,
        borderRadius: 5
    },
    thead: {
        flexDirection: 'row',
        backgroundColor: 'rgb(229, 231, 235)',
        padding: 5
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
    }
})

export default ProductsScreen
