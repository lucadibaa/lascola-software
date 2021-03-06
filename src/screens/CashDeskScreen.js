import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'
import { useCallback, useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import OrderInfo from '../components/cashDesk/OrderInfo'
import CashDeskList from '../components/cashDesk/CashDeskList'

const CashDeskScreen = () => {

    const bottomSheetModalRef = useRef(null)

    const handleSheetClose = useCallback((index) => {
        bottomSheetModalRef.current.close()
    }, [])

    const renderBackdrop = useCallback(props => <BottomSheetBackdrop disappearsOnIndex={-1} appearsOnIndex={0} {...props} />, [])

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <CashDeskList bottomSheetModalRef={bottomSheetModalRef} />
            <View style={styles.container}>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    snapPoints={['60%']}
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

export default CashDeskScreen
