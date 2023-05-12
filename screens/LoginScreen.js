import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React,{useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";



const LoginScreen = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigation = useNavigation();
    const [loading,setloading]  = useState(false)
    useEffect(()=>{
      setloading(true)
      const unsubscribe = auth.onAuthStateChanged((user)=> {
        if(!user){
          setloading(false)
        }
        if(user){
          navigation.navigate("pro")
        }
      })
      return unsubscribe
      },[])
      const Login = ()=> {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=>{
          const user = userCredentials.user
          conseole.log(user.email)
        })
        .catch((err)=>{
          conseole.log(err)
        })
      }
    // console.log(email)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        padding: 10,
        alignItems: "center",
        
      }}
    >

     
      <KeyboardAvoidingView>

      {
        loading ? (
          <View style={{backgroundColor: 'black' ,flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 500 }}>Loading...</Text>
            <ActivityIndicator size={30} color="red"/>
          </View>
  ): (
    <>
       <View
          style={{
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
          <Image
            style={{ width: 110, height: 50 }}
            source={{
              uri: "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",
            }}
          />
        </View>
        <View style={{ marginTop: 50, width: 320, justifyContent: 'center', }}>
          <View>
            <TextInput
              textContentType={"emailAddress"}
              placeholder="Email"
              placeholderTextColor={"white"}
            value={email}
            onChangeText={(e)=> setEmail(e)}
              style={{
                width: 310,
                padding: 15,
                borderRadius: 6,
                color: "white",
                backgroundColor: "gray",
              }}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <TextInput
              textContentType={"password"}
              secureTextEntry={true}
              placeholder="password"
              placeholderTextColor={"white"}
              value={password}
              onChangeText={(e)=> setPassword(e)}
              style={{
                width: 310,
                padding: 15,
                borderRadius: 6,
                color: "white",
                backgroundColor: "gray",
              }}
            />
          </View>

          <Pressable
          onPress={Login}
            style={
                password.length > 4 ? {
                   
                    width: 310,
                backgroundColor: 'red',
                    borderRadius: 6,
                    alignItems: "center",
                    marginTop: 10,
                }: {
                    borderColor: "#c9c9c9",
                    width: 310,
                    borderWidth: 1,
                    borderRadius: 6,
                    alignItems: "center",
                    marginTop: 10,
                }
            }
          >
            
            <Text
              style={{
                padding: 16,
                fontSize: 19,
                fontWeight: "600",
                color: "white",
              }}
            >
              SING IN
            </Text>
          </Pressable>
        </View>
        <Pressable
        onPress={()=> navigation.navigate('singup')}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 19,
              fontWeight: "500",
              color: "white",
              marginTop: 20,
            }}
          >
            I don't have account ?{" "}
            <Text style={{ textDecorationLine: "underline" }}>SING UP</Text>
          </Text>
        </Pressable>
    </>
  )
      }
     
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
