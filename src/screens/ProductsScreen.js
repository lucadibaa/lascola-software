import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'
import { useCallback, useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import OrderInfo from '../components/products/OrderInfo'
import ProductsList from '../components/products/ProductsList'

const ProductsScreen = () => {

    const bottomSheetModalRef = useRef(null)
    const [open, setOpen] = useState(false)

    const handleSheetClose = useCallback((index) => {
        bottomSheetModalRef.current.close()
    }, [])

    const renderBackdrop = useCallback(props => <BottomSheetBackdrop disappearsOnIndex={-1} appearsOnIndex={0} {...props} />, [])


    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ProductsList bottomSheetModalRef={bottomSheetModalRef} />
            <View style={styles.container}>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    snapPoints={['50%']}
                    style={{ borderRadius: 1 }}
                    backdropComponent={renderBackdrop}
                >
                    <OrderInfo handleSheetClose={handleSheetClose} />
                </BottomSheetModal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
    }
})

export default ProductsScreen
