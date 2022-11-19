import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const ChatScreen = () => {
  return (
    <SafeAreaView>
      <Header title="Chat" callEnabled />
      {/* <ChatList /> */}
    </SafeAreaView>
  )
}

export default ChatScreen