import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const adddetails = () => {
    const [studentName, setStudentName] = useState("")
    const [studentId, setStudentId] = useState("")
    const [dob, setDob] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    const [address, setAddress] = useState("")
    const [father, setFather] = useState("")
    const [mother, setMother] = useState("")
    const [email, setMailID] = useState("")
    const handleRegister = () => {
        const studentData = {
            studentName: studentName,
            studentId: studentId,
            dateOfBirth: dob,
            phoneNumber: mobileNo,
            father: father,
            mother: mother,
            address: address,
            mailID: email
        }
        axios.post("http://localhost:8000/addStudent", studentData).then((response) => {
            Alert.alert("Registration Successfully", "You have been registered successfully.")
            setAddress("")
            setDob("")
            setFather("")
            setMother("")
            setMailID("")
            setMobileNo("")
            setStudentId("")
            setStudentName("")
        }).catch((err) => {
            console.log(err);
            Alert.alert("Error in Registration", "Please fill all the fields correctly.")
        })
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Add A New Student</Text>
                <TextInput style={{ padding: 10, borderColor: '#d0b0b0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='India' placeholderTextColor={'black'} />
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Full Name (First and last Name)</Text>
                    <TextInput value={studentName} onChangeText={(text) => setStudentName(text)} style={{ padding: 10, borderColor: '#d0b0b0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Enter Your Name' placeholderTextColor={'black'} />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Father's Name</Text>
                    <TextInput value={father} onChangeText={(text) => setFather(text)} style={{ padding: 10, borderColor: '#d0b0b0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder="Enter Your Father's Name" placeholderTextColor={'black'} />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Mother's Name</Text>
                    <TextInput value={mother} onChangeText={(text) => setMother(text)} style={{ padding: 10, borderColor: '#d0b0b0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder="Enter Your Mother's Name" placeholderTextColor={'black'} />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Student Id (Roll Number)</Text>
                    <TextInput value={studentId} onChangeText={(text) => setStudentId(text)} style={{ padding: 10, borderColor: '#d0b0b0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='enter your roll number' placeholderTextColor={'black'} />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Address</Text>
                    <TextInput value={address} onChangeText={(text) => setAddress(text)} style={{ padding: 10, borderColor: '#d0b0b0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Enter Your Address' placeholderTextColor={'black'} />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Mobile Number</Text>
                    <TextInput value={mobileNo} onChangeText={(text) => setMobileNo(text)} style={{ padding: 10, borderColor: '#d0b0b0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Mobile No' placeholderTextColor={'black'} />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Enter Email ID</Text>
                    <TextInput value={email} onChangeText={(text) => setMailID(text)} style={{ padding: 10, borderColor: '#d0b0b0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Enter Your Email ID (optional)' placeholderTextColor={'black'} />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Date Of Birth</Text>
                    <TextInput value={dob} onChangeText={(text) => setDob(text)} style={{ padding: 10, borderColor: '#d0b0b0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Enter Date Of Birth' placeholderTextColor={'black'} />
                </View>

                <Pressable onPress={handleRegister} style={{ backgroundColor: '#ABCABA', padding: 10, marginTop: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Add Student</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default adddetails

const styles = StyleSheet.create({})