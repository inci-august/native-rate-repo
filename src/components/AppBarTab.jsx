import { View, StyleSheet } from 'react-native'
import Text from './Text'

import theme from '../theme'

const styles = StyleSheet.create({
  navTab: {
    marginRight: theme.spacing.medium,
  },
})

const AppBarTab = ({ text }) => {
  return (
    <View style={styles.navTab}>
      <Text color="textSecondary" fontSize="subheading" fontWeight="bold">
        {text}
      </Text>
    </View>
  )
}

export default AppBarTab
