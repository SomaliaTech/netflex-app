import {
    View,
    Text,
    KeyboardAvoidingView,
    Image,
    TextInput,
    Pressable,
  } from "react-native";
  import React,{useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
  
  
  const LoginScreen = ({navigation}) => {
      const [password, setPassword] = useState('')
      const [email, setEmail] = useState('')
      // console.log(email)

    const SingUP = ()=> {
      createUserWithEmailAndPassword(auth,email, password)
      .then((userCredentials)=> {
const user  = userCredentials.user
console.log(user.email)
      })
      .catch((err)=>{
        console.log(err)
      })
    }  
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          padding: 10,
          alignItems: "center",
          alignItems: 'center'
        }}
      >
        <KeyboardAvoidingView>
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
          <View style={{ marginTop: 50, width: 320, margin: 'auto' }}>
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
            <View style={{ marginVertical: 10, justifyContent:'center' }}>
              <TextInput
                textContentType={'password'}
                placeholder="Password"
                placeholderTextColor={"white"}
                secureTextEntry={true}
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
            onPress={SingUP}
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
                SING UP
              </Text>
            </Pressable>
          </View>
          <Pressable 
          onPress={()=> navigation.goBack()}
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
              I  have account ?{" "}
              <Text style={{ textDecorationLine: "underline" }}>lOGIN</Text>
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    );
  };
  
  export default LoginScreen;
  