import { View, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  container: (alignment) => ({
    display: 'flex',
    fontSize: theme.fontSizes.body,
    alignItems: alignment || 'center',
  }),
  title: {
    color: theme.colors.textSecondary,
  },
  value: {
    fontWeight: theme.fontWeights.bold,
    paddingBottom: theme.spacing.small,
  },
})

const InfoDisplay = ({ title, value, alignItems }) => {
  const formattedValue = value > 1000 ? `${(value / 1000).toFixed(1)}k` : value

  return (
    <View style={styles.container(alignItems)}>
      <Text style={styles.value}>{formattedValue}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default InfoDisplay
