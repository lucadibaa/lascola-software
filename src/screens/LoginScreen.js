import { useState } from 'react'
import { View, Text, ImageBackground, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CustomInput from '../components/auth/CustomInput'
import CustomButton from '../components/auth/CustomButton'

const LoginScreen = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <ImageBackground
                source={{ uri: "https://cdn.pixabay.com/photo/2022/01/05/16/58/butterfly-6917552_960_720.jpg" }}
                style={{ height: Dimensions.get('window').height / 2.5, width: Dimensions.get('window').width }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(140, 20, 252, 0.5)' }}>
                    <Ionicons name="school-outline" size={60} color="white" />
                    <Text style={{ color: '#fff', fontSize: 35, fontWeight: 'bold', }}>LA SCOLA</Text>
                </View>
            </ImageBackground>
            <View style={{ flex: 1.5, backgroundColor: '#fff', bottom: 50, borderTopStartRadius: 35, borderTopEndRadius: 35 }}>
                <View style={{ padding: 40 }}>
                    <Text style={{ color: '#4632A1', fontSize: 30, fontWeight: 'bold' }}>Welcome</Text>
                    <Text>
                        Don't have an account?
                        <Text style={{ color: '#4632A1' }}> Register now</Text>
                    </Text>
                    <View style={{ marginTop: 30 }}>
                        <View>
                            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <CustomButton text="Login" />
                    </View>
                </View>
            </View>
        </View >
    )
}

export default LoginScreen
