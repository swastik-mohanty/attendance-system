import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { router, useRouter } from 'expo-router';


const studets = () => {
    const [students, setStudents] = useState([])
    const [input, setInput] = useState("")
    const router = useRouter()
    useEffect(() => {
        const getStudnetsData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/students")
                setStudents(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getStudnetsData()
    }, [])
    console.log(students)
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }}>
                <Ionicons style={{ marginLeft: 10 }} name="arrow-back" size={24} color="black" />
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 7, gap: 10, backgroundColor: 'white', height: 40, borderRadius: 4 }}>
                    <AntDesign name="search1" size={24} color="black" />
                    <TextInput value={input} onChangeText={(text) => setInput(text)} style={{ flex: 1 }} placeholder='Search' />

                    {studets.length > 0 && (
                        <View>
                            <Pressable>
                                <AntDesign name="pluscircle" size={24} color="black" />
                            </Pressable>
                        </View>
                    )}

                </Pressable>
            </View>
            <Pressable onPress={() => router.push("/(home)/adddetails")}>
                <AntDesign name="pluscircle" size={24} color="#0072b1" />
            </Pressable>
        </View>
    )
}

export default studets

const styles = StyleSheet.create({})