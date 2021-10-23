import React,{useState,useEffect} from 'react'
import { useNavigation } from "@react-navigation/core";
//import {auth} from '../firebase';
import {KeyboardAvoidingView,TextInput,TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

const LoginScreen = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigation = useNavigation();
    useEffect(()=>{
       /*const unsubscribe= auth.onAuthStateChanged(user=>{
            if(user){
                navigation.navigate("Home")
            }})
            return unsubscribe*/
    },[])
    const handleSignUp=()=>{
       /* auth.createUserWithEmailAndPassword(email,password)
            .then(userCredentials=>{
                const user = userCredentials.user;
                console.log('Registered with ',user.email); 
            })
            .catch(error => alert(error.message))*/
    }
    const handleLogin=()=>{
        auth.createUserWithEmailAndPassword(email,password)
            .then(userCredentials=>{
                const user = userCredentials.user;
                console.log('Logged in with ',user.email); 
            })
            .catch(error => alert(error.message))
    }
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">
            <View style={styles.inputContainer}>
                <Text>Email</Text>
                <TextInput
                placecholder="Email"
                value={email}
                onChangeText={text=>setEmail(text)}
                style={styles.input}
                />
                <Text>Password</Text>
                <TextInput
                placecholder="Password"
                value={password}
                onChangeText={text=>setPassword(text)}
                style={styles.input}
                secureTextEntry/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleLogin}
                style ={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignUp}
                style ={[styles.button,styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        padding:50,
        flex:2,
        justifyContent:'center',
        alignContent:'center',
    },
    inputContainer:{
        width: '80%',
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal: 15,
        paddingVertical: 10, 
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer:{
        width: '40%',
        justifyContetn:'center',
        alignItems:'center',
        marginTop:40,
    },
    button:{
        backgroundColor: '#0782F9',
        width: '100%' ,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10, 
       
    },
    buttonText:{
        color: 'white',
        fontWeight: '450',
        fontSize: 16,
        
    },
    buttonOutline:{
        backgroundColor: 'white',
        borderColor: '#0782F9',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonOutlineText:{
        color: '#0782F9',
        fontWeight: '450',
        fontSize: 16,
    },

})
