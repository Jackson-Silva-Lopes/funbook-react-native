import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useHeaderHeight } from "@react-navigation/elements";
import ListOfAvatars from '../components/ListOfAvatars';
import ListOfCards from '../components/ListOfCards';

const Feed = () => {
  const headerHeight = useHeaderHeight(); 
  return (
    <SafeAreaView style={{ flex: 1 ,  paddingTop: headerHeight + 20, paddingHorizontal:16 }}>
      <View >
      <ListOfAvatars />
      <ListOfCards />:
      </View>
    </SafeAreaView>
  )
}

export default Feed