import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useHeaderHeight } from "@react-navigation/elements";

const Feed = () => {
  const headerHeight = useHeaderHeight(); 
  return (
    <SafeAreaView style={{ flex: 1 ,  paddingTop: headerHeight }}>
      <View >
        <Text style={{ fontFamily: "Poppins_400Regular"}}>Feed</Text>
      </View>
    </SafeAreaView>
  )
}


export default Feed