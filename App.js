import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import TabNavigator from './src/components/layout/StackNavigator'
import { AuthProvider } from './src/customHooks/useAuth'

const App = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <BottomSheetModalProvider>
            <TabNavigator />
          </BottomSheetModalProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
