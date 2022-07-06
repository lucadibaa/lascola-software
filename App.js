import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import TabNavigator from './src/components/layout/StackNavigator'
import { AuthProvider } from './src/customHooks/useAuth'
import store from './src/redux/store'

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthProvider>
            <BottomSheetModalProvider>
              <TabNavigator />
            </BottomSheetModalProvider>
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
