import { Text, Pressable, StyleSheet } from 'react-native'

const CustomButton = ({ text }) => {
    return (
        <Pressable style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4632A1',
        borderRadius: 50,
        marginVertical: 25,
        padding: 10,
        shadowOffset: { width: 1, height: 10 },
        shadowOpacity: .4,
        shadowRadius: 3,
        elevation: 10,
        shadowColor: '#4632A1'
    },
    text: {
        color: '#fff',
        fontSize: 17,
        letterSpacing: .8
    }
})

export default CustomButton
