import { View, Text, StyleSheet, Pressable, Dimensions, Image } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { addProduct } from '../../redux/slices/orderSlice'
import { useDispatch } from 'react-redux'

const Product = ({ product }) => {

    const dispatch = useDispatch()

    const handlePress = () => {
        dispatch(addProduct({ ...product, qty: 1 }))
    }

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <Image
                style={styles.banner}
                source={{ uri: product.image }}
            />
            <View style={styles.topView}>
                <Text style={styles.title}>{product.name}</Text>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.price}>{parseFloat(product.price).toFixed(2)} €</Text>
                <Text style={{ marginHorizontal: 5, fontSize: 16 }, product?.stock === undefined && { display: 'none' }}>|</Text>
                <View style={{ ...styles.stock, display: product?.stock ? 'flex' : 'none' }}>
                    <Text style={{ marginRight: 5, fontSize: 16 }}>{product.stock}</Text>
                    <MaterialCommunityIcons name="history" size={18} color="black" />
                </View>
                <View style={{ ...styles.stock, display: product?.stock === 0 ? 'flex' : 'none' }}>
                    <AntDesign name="exclamationcircleo" size={18} color="red" />
                </View>
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
        borderRadius: 12,
        backgroundColor: '#F2F2F2',
        padding: 6,
        paddingBottom: 10
    },
    banner: {
        width: '100%',
        height: 80,
        borderRadius: 12,
    },
    topView: {
        marginVertical: 6
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        color: '#3a3a3a',
        paddingHorizontal: 2,
        letterSpacing: .3
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3a3a3a',
        paddingHorizontal: 2,
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
