import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { addProduct } from '../../redux/slices/orderSlice'
import { useDispatch } from 'react-redux'

const Product = ({ product }) => {

    const dispatch = useDispatch()

    const handlePress = () => {
        dispatch(addProduct(product))
    }

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <View style={styles.topView}>
                <Text style={styles.title}>{product.name}</Text>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.price}>{parseFloat(product.price).toFixed(2)} €</Text>
                {
                    product.stock &&
                    <>
                        <Text style={{ marginHorizontal: 5, fontSize: 16 }}>|</Text>
                        <View style={styles.stock}>
                            <Text style={{ marginRight: 5, fontSize: 16 }}>{product.stock}</Text>
                            <MaterialCommunityIcons name="history" size={18} color="black" />
                        </View>
                    </>
                }
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
        fontWeight: '600',
        width: Dimensions.get('window').width / 2 - 32,
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderRadius: 15,
        backgroundColor: '#F2F2F2'
    },
    topView: {
        marginBottom: 13
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingHorizontal: 5,
        letterSpacing: .6
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 12
    },
    price: {
        padding: 6,
        borderRadius: 15,
        fontSize: 16
    },
    stock: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        borderRadius: 15,
    }
})

export default Product
