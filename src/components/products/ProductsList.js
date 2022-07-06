import { View, Pressable, FlatList, StyleSheet } from 'react-native'
import Product from './Product'
import { AntDesign } from '@expo/vector-icons'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'

const ProductsList = ({ bottomSheetModalRef }) => {

    const { products } = useSelector(state => state.data)
    const { orderProducts } = useSelector(state => state.order)

    const handleSheetOpen = useCallback(() => {
        bottomSheetModalRef.current?.present()
    }, [])

    const handlePress = () => {
        if (orderProducts.length === 0) return
        handleSheetOpen()
    }

    return (
        <View styel={{ position: 'relative' }}>
            <FlatList
                contentContainerStyle={styles.list}
                data={products}
                numColumns={2}
                horizontal={false}
                keyExtractor={product => product.id}
                renderItem={({ item }) => <Product product={item} />}
            />
            <Pressable style={{ ...styles.checkBtn, opacity: orderProducts.length === 0 ? 0 : 1 }} disabled={orderProducts.length === 0} onPress={handlePress}>
                <AntDesign name="check" size={24} color="black" />
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({
    list: {
        paddingBottom: 70,
        backgroundColor: 'red'
    },
    checkBtn: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        width: 60,
        height: 60,
        borderRadius: 999,
    }
})

export default ProductsList
