import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useHeaderHeight } from "@react-navigation/elements";

const Conversations = () => {
    const headerHeight = useHeaderHeight(); 
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: headerHeight }}>
      <View>
        <Text>Conversations: Tela de bate papo</Text>
      </View>
    </SafeAreaView>
  )
}

export default Conversations