import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RegisterScreen from '../../screens/RegisterScreen'
import LoginScreen from '../../screens/LoginScreen'
import ProductsScreen from '../../screens/ProductsScreen'
import Header from './Header'
import BottomNavigation from './BottomNavigation'
import OrdersScreen from '../../screens/OrdersScreen'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {

    const user = true

    return (
        <Tab.Navigator
            tabBar={props => <BottomNavigation {...props} />}
        >
            {
                user ?
                    <>
                        <Tab.Screen
                            name="Home"
                            component={ProductsScreen}
                            options={{
                                header: () => <Header />
                            }}
                        />
                        <Tab.Screen
                            name="Products"
                            component={ProductsScreen}
                            options={{
                                header: () => <Header />
                            }}
                        />
                        <Tab.Screen
                            name="Orders"
                            component={OrdersScreen}
                            options={{
                                header: () => <Header />
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
