import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topView}>
                <MaterialIcons name="bar-chart" size={24} style={styles.icon} />
                <Ionicons name="school-outline" size={24} style={styles.icon} />
                <Feather name="layout" size={24} style={styles.icon} />
            </View>
            <View style={styles.bottomView}>
                <Pressable style={styles.tab}>
                    <Text style={styles.tabText}>Home</Text>
                </Pressable>
                <Pressable style={styles.tab}>
                    <Text style={styles.tabText}>Stats</Text>
                </Pressable>
                <Pressable style={styles.tab}>
                    <Text style={styles.tabText}>Clienti</Text>
                </Pressable>
                <Pressable style={styles.tab}>
                    <Text style={styles.tabText}>Report</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        backgroundColor: '#000',
        padding: 10,
    },
    topView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 7
    },
    icon: {
        color: '#fff',
        marginHorizontal: 8
    },
    bottomView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tab: {
        marginHorizontal: 8,
        backgroundColor: '#2c2c2c',
        paddingVertical: 4,
        paddingHorizontal: 7,
        borderRadius: 6
    },
    tabText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '500',
        letterSpacing: .3
    }
})

export default Header
