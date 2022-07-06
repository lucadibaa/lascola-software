import { View, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import { Octicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const BottomNavigation = ({ state, navigation, active, setActive }) => {

    return (
        <View style={styles.container}>
            {
                state.routes.slice(0, 3).map((route, index) => {

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        })

                        const isFocused = state.index === index

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({ name: route.name, merge: true })
                            setActive(route.name)
                        }
                    }

                    return (
                        <Pressable style={styles.tab} key={route.key} onPress={onPress}>
                            {route.name === 'Home' && <AntDesign name="dingding" size={24} color={active === route.name ? '#C100FE' : 'white'} />}
                            {route.name === 'CashDesk' && <Octicons name="apps" size={24} color={active === route.name ? '#C100FE' : 'white'} />}
                            {route.name === 'Orders' && <Entypo name="list" size={24} color={active === route.name ? '#C100FE' : 'white'} />}
                        </Pressable>
                    )
                })
            }
        </View>
        //  <Pressable style={styles.tab}>
        //         <MaterialIcons name="bar-chart" size={28} style={styles.icon} color={active === 'bar-chart' ? '#C100FE' : 'white'} />
        //     </Pressable>
        //     <Pressable style={styles.tab}>
        //         <MaterialIcons name="bar-chart" size={28} style={styles.icon} color={active === 'icon2' ? '#C100FE' : 'white'} />
        //     </Pressable>
        //     <Pressable style={styles.tab}>
        //         <MaterialIcons name="bar-chart" size={28} style={styles.icon} color={active === 'icon3' ? '#C100FE' : 'white'} />
        //     </Pressable> 
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        height: 45,
        bottom: 25,
        backgroundColor: '#2c2c2c',
        borderRadius: 999,
    },
    tab: {
        width: 43,
        height: 43,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderRadius: 999
    }
})

export default BottomNavigation
