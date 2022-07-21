import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import CustomInput from '../auth/CustomInput'
import { db } from '../../../firebase'
import { addDoc, collection } from '@firebase/firestore'

const AddProductModal = ({ modalVisible, setModalVisible }) => {

    const [name, setName] = useState('')
    const [stock, setStock] = useState('')
    const [price, setPrice] = useState('')
    const [purchasePrice, setPurchasePrice] = useState('')

    const handleSubmit = () => {
        const productsRef = collection(db, 'products')
        const newProduct = {
            name
        }

        if (stock) newProduct.stock = parseFloat(stock)
        if (price) newProduct.price = parseFloat(price)
        if (purchasePrice) newProduct.purchasePrice = parseFloat(purchasePrice)

        addDoc(productsRef, newProduct)
        setModalVisible(false)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.topView}>
                        <TouchableOpacity style={styles.close} onPress={() => setModalVisible(false)}>
                            <AntDesign name="close" size={22} color="#444" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomView}>
                        <CustomInput
                            style={styles.input}
                            setValue={setName}
                            value={name}
                            placeholder="Nome Prodotto"
                        />
                        <CustomInput
                            style={styles.input}
                            setValue={setStock}
                            value={stock}
                            placeholder="Giacenza Prodotto"
                            keyboardType="numeric"
                        />
                        <CustomInput
                            style={styles.input}
                            setValue={setPrice}
                            value={price}
                            placeholder="Prezzo Prodotto"
                            keyboardType="numeric"
                        />
                        <CustomInput
                            style={styles.input}
                            setValue={setPurchasePrice}
                            value={purchasePrice}
                            placeholder="Prezzo Acquisto Prodotto"
                            keyboardType="numeric"
                        />
                        <TouchableOpacity style={styles.add} onPress={handleSubmit}>
                            <Text style={{ color: '#fff' }}>Aggiungi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, .6)",
    },
    modalView: {
        width: '80%',
        margin: 20,
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    topView: {
        alignSelf: 'flex-end',
    },
    close: {
        width: 35,
        height: 35,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomView: {
        justifyContent: 'center',
    },
    add: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 8,
        marginTop: 15
    }
})

export default AddProductModal
