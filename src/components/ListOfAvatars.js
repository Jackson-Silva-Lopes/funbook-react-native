import { View,Pressable, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ListHeaderComponent from './ListHeaderComponent'
import { UserListContext } from '../context'



const ListOfAvatars = () => {
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => console.log('pressed avatar')}>

        <Image style={{ width: 56, height: 56, borderRadius: 28, marginRight: 30 }} source={{ uri: item.url }} />
      </Pressable>
    )
  }
  return (
    <UserListContext.Consumer>
      {({ userList }) => (
        <View style={{ zIndex:100, paddingVertical:20, marginTop:-60}}>
          <FlatList
          data={userList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          ListHeaderComponent={<ListHeaderComponent />}
          showsHorizontalScrollIndicator={false}
          snapToInterval={86}
          decelerationRate={"fast"}
        />
      </View>
    )}

    </UserListContext.Consumer>

  )
}

export default ListOfAvatars