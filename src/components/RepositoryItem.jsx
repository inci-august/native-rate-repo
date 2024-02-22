import { View, Text, Image, StyleSheet } from 'react-native'
import InfoDisplay from './InfoDisplay'

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.light,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    margin: theme.spacing.extraSmall,
    flexShrink: 1,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: theme.spacing.medium,
  },
  badge: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.small,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginTop: theme.spacing.small,
    marginBottom: theme.spacing.small,
  },
  language: {
    color: theme.colors.light,
    fontSize: theme.fontSizes.body,
  },
})

const RepositoryItem = ({ item }) => (
  <View testID="repositoryItem" style={styles.container}>
    <View style={styles.main}>
      <Image
        style={styles.avatar}
        source={{
          uri: item.ownerAvatarUrl,
        }}
      />

      <View style={styles.content}>
        <InfoDisplay
          title={item.description}
          value={item.fullName}
          alignItems="left"
        />
        <View style={styles.badge}>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
    </View>
    <View style={styles.info}>
      <InfoDisplay title="Stars" value={item.stargazersCount} />
      <InfoDisplay title="Forks" value={item.forksCount} />
      <InfoDisplay title="Reviews" value={item.reviewCount} />
      <InfoDisplay title="Rating" value={item.ratingAverage} />
    </View>
  </View>
)

export default RepositoryItem
