import { View, StyleSheet } from 'react-native'
import AppBarTab from './AppBarTab'
import Constants from 'expo-constants'

import theme from '../theme'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 20,
    paddingLeft: 10,
    backgroundColor: theme.colors.bgPrimary,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.link} to="/">
        <AppBarTab text="Repositories" />
      </Link>
      <Link style={styles.link} to="/signin">
        <AppBarTab text="Sign in" />
      </Link>
    </View>
  )
}

export default AppBar
