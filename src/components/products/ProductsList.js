import { View, Pressable, FlatList, StyleSheet } from 'react-native'
import Product from './Product'
import { AntDesign } from '@expo/vector-icons'
import { useCallback } from 'react'

const products = [
    {
        id: 304234,
        title: 'Birra Moretti',
        price: 1.50,
        stock: 15,
    },
    {
        id: 423,
        title: 'Tonic',
        price: 1.00,
        stock: 30,
    },
    {
        id: 234322,
        title: 'Spritz',
        price: 2.50,
        stock: null,
    },
    {
        id: 2343243,
        title: 'Coca Cola',
        price: 1.50,
        stock: 23,
    },
    {
        id: 4324324,
        title: 'Chinotto',
        price: 1.50,
        stock: 1,
    },
    {
        id: 0,
        title: 'Birra Moretti',
        price: 1.50,
        stock: 15,
    },
    {
        id: 1,
        title: 'Tonic',
        price: 1.00,
        stock: 30,
    },
    {
        id: 2,
        title: 'Spritz',
        price: 2.50,
        stock: null,
    },
    {
        id: 3,
        title: 'Coca Cola',
        price: 1.50,
        stock: 23,
    },
    {
        id: 4,
        title: 'Chinotto',
        price: 1.50,
        stock: 1,
    },
    {
        id: 345340,
        title: 'Birra Moretti',
        price: 1.50,
        stock: 15,
    },
    {
        id: 145334,
        title: 'Tonic',
        price: 1.00,
        stock: 30,
    },
    {
        id: 32432,
        title: 'Spritz',
        price: 2.50,
        stock: null,
    },
    {
        id: 323432,
        title: 'Coca Cola',
        price: 1.50,
        stock: 23,
    }
]

const ProductsList = ({ bottomSheetModalRef }) => {

    const handleSheetOpen = useCallback(() => {
        bottomSheetModalRef.current?.present()
    }, [])

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
            <Pressable style={styles.checkBtn} onPress={handleSheetOpen}>
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
