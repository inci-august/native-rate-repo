import { View, StyleSheet, Pressable, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import { useQuery } from '@apollo/client'
import Constants from 'expo-constants'
import { GET_AUTHORIZED_USER } from '../graphql/queries'

import theme from '../theme'
import AppBarTab from './AppBarTab'
import useSignOut from '../hooks/useSignOut'

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
  const { data } = useQuery(GET_AUTHORIZED_USER)
  const signOut = useSignOut()

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link style={styles.link} to="/">
          <AppBarTab text="Repositories" />
        </Link>
        {data?.me?.username ? (
          <Pressable onPress={signOut}>
            <AppBarTab text="Sign out" />
          </Pressable>
        ) : (
          <Link style={styles.link} to="/signin">
            <AppBarTab text="Sign in" />
          </Link>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
