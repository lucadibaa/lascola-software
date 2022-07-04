import { View, Text } from 'react-native'

const OrderRow = ({ order }) => {
    return (
        <View>
            <Text>{order.title}</Text>
        </View>
    )
}

export default OrderRow
