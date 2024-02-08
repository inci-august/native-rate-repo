import { View, StyleSheet, ScrollView } from 'react-native'
import AppBarTab from './AppBarTab'
import Constants from 'expo-constants'

import theme from '../theme'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing.medium,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: theme.colors.bgPrimary,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link style={styles.link} to="/">
          <AppBarTab text="Repositories" />
        </Link>
        <Link style={styles.link} to="/signin">
          <AppBarTab text="Sign in" />
        </Link>
      </ScrollView>
    </View>
  )
}

export default AppBar
