import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import useAuth from '../hooks/useAuth'

const ModalScreen = () => {
    const { user } = useAuth();
    const [image, setImage] = useState(null);
    const [job, setJob] = useState(null);
    const [age, setAge] = useState(null);

    const updateUserProfile = () => {
        user.updateProfile({
            image,
            job,
            age,
        })
    }

    const incompleteForm = !image || !job || !age;
    return (
        <View className="flex-1 items-center pt-1">
            <View className="flex-row items-top justify-center py-1 py-5">
                <MaterialCommunityIcons name="clipboard-text-search-outline" size={35} color="#4169E1" />
                <Text className="text-2xl font-bold">Tinder of Work</Text>
            </View>
            <Text className="text-xl text-gray-500 p-2 font-bold">Welcome User</Text>
            <Text className="text-center p-4 font-bold text-[#4169E1]">Step 1: The Profle Pic</Text>
            <TextInput
                value={image}
                onChangeText={text => setImage(text)}
                className="text-center text-xl pb-2"
                placeholder='Enter a Profile Pic URL'
            />
            <Text className="text-center p-4 font-bold text-[#4169E1]">Step 2: Job</Text>
            <TextInput
                value={job}
                onChangeText={text => setJob(text)}
                className="text-center text-xl pb-2"
                placeholder='Enter your occupation'
            />
            <Text className="text-center p-4 font-bold text-[#4169E1]">Step 3: Age</Text>
            <TextInput
                value={age}
                onChangeText={text => setAge(text)}
                className="text-center text-xl pb-2"
                placeholder='Enter your age'
                keyboardType="numeric"
                maxLength={2}

            />

            <TouchableOpacity 
            disabled={incompleteForm}
            className="w-64 p-3 rounded-xl absolute bottom-10 bg-blue-400"
            >
                <Text className="text-center text-white text-xl">Update Profile</Text>
            </TouchableOpacity>
        </View>

    )
}

export default ModalScreen