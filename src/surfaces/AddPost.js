import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useHeaderHeight } from "@react-navigation/elements";

const AddPost = () => {
     const headerHeight = useHeaderHeight(); 
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <View>
        <Text>AddPost</Text>
      </View>
    </SafeAreaView>
  )
}

export default AddPost