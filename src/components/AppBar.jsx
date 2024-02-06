import { View, StyleSheet } from 'react-native'
import AppBarTab from './AppBarTab'
import Constants from 'expo-constants'

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 20,
    paddingLeft: 10,
    backgroundColor: theme.colors.bgPrimary,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />
    </View>
  )
}

export default AppBar
