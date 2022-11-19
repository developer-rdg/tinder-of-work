import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native';
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Swiper from 'react-native-deck-swiper';

const DUMMY_DATA = [
  {
    firstName: 'Google',
    lastName: 'California',
    job: 'Front-end Developer React Native',
    photoURL: "https://wallpapercave.com/wp/wp2860510.png",
    age: 158,
    id: 123,
  },
  {
    firstName: 'Twitter',
    lastName: 'Chicago',
    job: 'Back-end Developer Node',
    photoURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F9to5mac.com%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F09%2FTwitter.jpg%3Fquality%3D82%26strip%3Dall%26w%3D1600&f=1&nofb=1&ipt=e04c7cda05e3219cab2fb0900998fea7925527453b8576f26a2d6c3c319f9310&ipo=images",
    age: 123,
    id: 456,
  },
  {
    firstName: 'Tesla',
    lastName: 'Texas',
    job: 'Full-Stack Developer Mobile Application',
    photoURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-marques.com%2Fwp-content%2Fuploads%2F2021%2F02%2FTesla-Logo-1536x868.png&f=1&nofb=1&ipt=7ab80666bb818ff2482638a249021f47201a54a477331f3d8054b5421c363600&ipo=images",
    age: 100,
    id: 789,
  },
  {
    firstName: 'Reddit',
    lastName: 'LDA',
    job: 'Data Analysis',
    photoURL: "https://cdn.technadu.com/wp-content/uploads/2019/12/Reddit-Logo.jpg",
    age: 55,
    id: 789,
  },
]

const HomeScreen = () => {
  const navigation = useNavigation();
  const swipeRef = useRef(null);
  const [profiles, setProfiles] = useState([]);

  useLayoutEffect(() => {
   
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

  }, []);

  return (
    <SafeAreaView className="flex-1">
      {/* Header */}
      <View className="flex-row items-center relative justify-between px-5 py-3">
        <TouchableOpacity onPress={() => navigation.navigate("Matched")}>
          <Image className="h-10 w-10 rounded-full" source={{ uri: 'https://avatars.githubusercontent.com/developer-rdg' }} />
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => navigation.navigate("Modal")}>
          <MaterialCommunityIcons name="clipboard-text-search-outline" size={50} color="#4169E1" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name='chatbubbles-sharp' size={35} color="#4682B4" />
        </TouchableOpacity>
      </View>
      {/* End of Header */}
      <View className="flex-1 -mt-6">
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: 'transparent' }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={() => {
            console.log('Swipe PASS')
          }}
          onSwipedRight={() => {
            console.log('Swipe MATCH')
          }}
          backgroundColor={"#4FD0E9"}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4DED30",
                },
              },
            },
          }}
          renderCard={(card) => card ? (
            <View
              key={card.id}
              className="relative bg-white h-3/4 rounded-xl"
            >
              <Image
                className="absolute top-0 h-full w-full rounded-xl"
                source={{ uri: card.photoURL }}
              />

              <View
                style={styles.cardShadow}
                className="absolute bottom-0 bg-white w-full h-20 
                flex-row justify-between items-center px-6 py-2 rounded-b-xl"
              >
                <View>
                  <Text className="text-xl font-bold">
                    {card.firstName} {card.lastName}
                  </Text>
                  <Text>{card.job}</Text>
                </View>
                <Text className="text-2xl font-bold">{card.age}K</Text>
              </View>
            </View>
          ) : (
            <View className="relative bg-white h-3/4 rounded-xl justify-center items-center" style={styles.cardShadow}>
              <Text className="font-bold pb-3">No more profiles</Text>
              <MaterialCommunityIcons name="emoticon-sad-outline" size={35} color="red" />
            </View>
          )}
        />
      </View>
      {/* <Text>I am the HomeScreen</Text>
      <Button title="Go to Chat Screen" onPress={() => navigation.navigate('Chat')} /> */}
      <View>
        <View className="flex flex-row justify-evenly">
          <TouchableOpacity
            onPress={() => swipeRef.current.swipeLeft()}
            className="items-center justify-center rounded-full w-16 h-16 bg-red-200"
          >
            <Entypo name="cross" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => swipeRef.current.swipeRight()}
            className="items-center justify-center rounded-full w-16 h-16 bg-green-200"
          >
            <Entypo name="heart" size={24} color="green" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});