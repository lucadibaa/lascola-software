import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry, keyboardType }) => {

    const [visible, setVisible] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{placeholder}</Text>
            <View style={{ position: 'relative', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#4632A1', }}>
                <TextInput
                    value={value}
                    onChangeText={setValue}
                    placeholder={placeholder}
                    secureTextEntry={visible ? false : secureTextEntry}
                    style={styles.input}
                    keyboardType={keyboardType}
                />
                {secureTextEntry && <Ionicons name={visible ? 'eye-off' : 'eye'} size={24} onPress={() => setVisible(!visible)} style={{ color: '#4632A1', position: 'absolute', right: 5 }} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    label: {
        fontSize: 16,
        marginLeft: 3,
        marginBottom: 3,
        color: '#4632A1'
    },
    input: {
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
})

export default CustomInput
