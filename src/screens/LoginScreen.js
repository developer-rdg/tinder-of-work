import { useNavigation } from "@react-navigation/native"
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  
  return (
    <View className="flex-1 bg-white">
      <ImageBackground
        resizeMode="center"
        className="flex-1"
        source={{ uri: 'https://i.imgur.com/1unHmOD.png' }}
      >
        <TouchableOpacity className="absolute bottom-40 w-52 bg-black p-4 rounded-2xl" style={{ marginHorizontal: '25%' }} onPress={() => {}}>
          <Text className="font0semibold text-center text-white">Sign in & get hired</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default LoginScreen