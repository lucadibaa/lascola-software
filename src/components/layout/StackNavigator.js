import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RegisterScreen from '../../screens/RegisterScreen'
import LoginScreen from '../../screens/LoginScreen'
import ProductsScreen from '../../screens/ProductsScreen'
import Header from './Header'
import BottomNavigation from './BottomNavigation'
import OrdersScreen from '../../screens/OrdersScreen'
import HomeScreen from '../../screens/HomeScreen'
import CashDeskScreen from '../../screens/CashDeskScreen'
import { useState } from 'react'
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../../../firebase"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../../redux/slices/dataSlice'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const products = collection(db, 'products')
        const getData = onSnapshot(products, snapshot => {
            dispatch(setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
        })

        return () => {
            getData()
        }
    }, [])

    const user = true
    const [active, setActive] = useState('Home')

    return (
        <Tab.Navigator
            tabBar={props => <BottomNavigation {...props} active={active} setActive={setActive} />}
        >
            {
                user ?
                    <>
                        <Tab.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                header: props => <Header {...props} active={active} setActive={setActive} />
                            }}
                        />
                        <Tab.Screen
                            name="CashDesk"
                            component={CashDeskScreen}
                            options={{
                                header: props => <Header {...props} active={active} setActive={setActive} />
                            }}
                        />
                        <Tab.Screen
                            name="Orders"
                            component={OrdersScreen}
                            options={{
                                header: props => <Header {...props} active={active} setActive={setActive} />
                            }}
                        />
                        <Tab.Screen
                            name="Products"
                            component={ProductsScreen}
                            options={{
                                header: props => <Header {...props} active={active} setActive={setActive} />
                            }}
                        />
                    </>
                    :
                    <>
                        <Tab.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                        <Tab.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                    </>
            }
        </Tab.Navigator>
    )
}

export default TabNavigator
