import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const MatchedScreen = () => {
    const navigation = useNavigation();
    const {params} = useRoute();
  return (
    <View className="h-full bg-sky-500 pt-20" style={{opacity: 0.89}}>
      <View className="justify-center px-10 pt-20">
        <Image className="h-20 w-full " source={{uri: 'https://links.papareact.com/mg9'}} />
      </View>

      <Text className="text-white text-center mt-5">
            You and Google have liked each other.
      </Text>
      <View className="flex-row justify-evenly mt-5">
         <Image 
            className="h-32 w-32 rounded-full"
            source={{ uri: "https://avatars.githubusercontent.com/developer-rdg"}}
         /> 
         <Image 
            className="h-32 w-32 rounded-full"
            source={{ uri: "https://wallpapercave.com/wp/wp2860510.png"}}
         />   

          
      </View>
      <TouchableOpacity 
        className="bg-white m-5 px-10 py-8 rounded-full mt-20"
                onPress={() => {
                    navigation.goBack();
                    navigation.navigate('Chat');
                }}>
            <Text className="text-center text-xl ">
                Send a Message
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default MatchedScreen