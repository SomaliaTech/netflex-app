import { View, Text, FlatList, Pressable, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import data from "../data";
import { useStripe } from "@stripe/stripe-react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";

const PlanScree = () => {
  const [touched, setTouched] = useState("");
  const [selectPrice, setPrice] = useState();
  const stripe = useStripe()
  const subscribe = async() => {
    const response = await fetch("http://localhost:8080/payment", {
      method: "POST",
      body: JSON.stringify({
        amount:Math.floor(selectPrice * 100),

      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) return Alert.alert(data.message);
    const clientSecret = data.clientSecret;
    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
    });
    if (initSheet.error) return Alert.alert(initSheet.error.message);
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret,
    });
    if (presentSheet.error) return Alert.alert(presentSheet.error.message);

     else{
     createUserWithEmailAndPassword(auth,email,password).then((userCredentials) => {
        console.log(userCredentials);
         const user = userCredentials.user;
         console.log(user.email);
       })
 }


  }
  const route = useRoute();
  console.log(touched);
  console.log(selectPrice);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 40, marginHorizontal: 10 }}
      >
        <Text>Chose The Plan thats is right for you</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
        >
          <Ionicons name="checkmark-outline" size={24} color="red" />
          <Text style={{ fontSize: 16, marginLeft: 5 }}>
            Cencel you plan any Time
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
        >
          <Ionicons name="checkmark-outline" size={24} color="red" />
          <Text style={{ fontSize: 16, marginLeft: 5 }}>
            Cencel you plan any Time
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginRight: 3 }}
        >
          <Ionicons name="checkmark-outline" size={24} color="red" />
          <Text style={{ fontSize: 16, marginLeft: 5 }}>
            Cencel you plan any Time
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Ionicons name="checkmark-outline" size={24} color="red" />
          <Text style={{ fontSize: 16, marginLeft: 5 }}>
            Cencel you plan any Time
          </Text>
        </View>
        <View>
          {data.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => {
                setTouched(item.name);
                setPrice(item.price);
              }}
              style={
                touched.includes(item.name)
                  ? {
                      height: 150,
                      borderColor: "red",
                      marginVertical: 15,
                      borderWidth: 1.5,
                      borderRadius: 11,
                    }
                  : {
                      height: 150,
                      borderColor: "red",
                      marginVertical: 15,
                      borderWidth: 0.8,
                      borderRadius: 11,
                    }
              }
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    margin: 10,
                    justifyContent: "center",
                    borderRadius: 10,
                    width: 100,
                    padding: 10,
                    borderColor: "red",
                    color: "white",
                    backgroundColor: "red",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 16,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <View style={{ marginHorizontal: 10 }}>
                  <Text style={{ fontSize: 18, fontWeight: "600" }}>
                    Price: ${item.price}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginRight: 20,
                }}
              >
                <View style={{ marginHorizontal: 10 }}>
                  <Text style={{ color: "gray", fontSize: 13 }}>
                    Video Quality : {item.videoQuality}
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>
                    Resolution : {item.resolution}
                  </Text>
                </View>
                <View>
                  <Fontisto name="netflix" size={30} color="black" />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 17,
                  marginHorizontal: 10,
                }}
              >
                <View>
                  <Text>Devices you can watch on: </Text>
                </View>
                {item.devices.map((nam) => (
                  <View key={nam.id} style={{ flexDirection: "row" }}>
                    <Entypo
                      name={nam.name}
                      size={25}
                      color={"red"}
                      marginHorizontal={5}
                    />
                  </View>
                ))}
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      {
        touched.length > 0 ? (
          <Pressable
         
          style={{
            backgroundColor: "#e50914",
            padding: 10,
            height: 50,
            justifyContent: "space-between",
            flexDirection: "row",
            borderRadius: 5,
            marginBottom: 10,
            alignItems: 'center'
          
          }}
        >
          <View>
            <Text style={{ fontSize: 19, fontWeight: "500", color: "white" }}>
              Selected Plan {touched}{" "}
            </Text>
          </View>
          <Pressable  onPress={subscribe}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>PAY $ {selectPrice}</Text>
          </Pressable>
        </Pressable>
        ): (
          null
        )
      }
     
    </>
  );
};

export default PlanScree;
