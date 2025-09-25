import { View, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'


const ListHeaderComponent = () => {
  return (
      <Pressable onPress={() => console.log("pressed the add button")}>
      <View
        style={{
          width: 56,
          height: 56,
          marginRight: 30,
        }}
      >
        <LinearGradient
          colors={["#FFE1E0", "#E1F6F4"]}
          style={{
            borderRadius: 28,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="add" size={30} color="#000000" />
        </LinearGradient>
      </View>
    </Pressable>
  )
}

export default ListHeaderComponent