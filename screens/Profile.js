import { View, Text, Image,FlatList, Pressable } from 'react-native'
import React, { useContext } from 'react'
import {AntDesign} from '@expo/vector-icons'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import { MovieItems } from '../ContextApi';

const profiles = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5_C49-HkFimzHQHqQwMLnCq4fHr1pgLtvw&usqp=CAU",
      name: "Pranav",
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQfOPr1m7jryKxiCFP4IShrr88EWnR2mZJQ&usqp=CAU",
      name: "Sujan",
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU",
      name: "Kiran",
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU",
      name: "Samarth",
    },
  ];

const Profile = () => {
const navigation  = useNavigation()

const {profileUser, setProfile} = useContext(MovieItems)
const Singoutbtn = ()=> {
    signOut(auth).then((user)=> {
        navigation.replace('login')
    })
}   
console.log(profileUser) 
  return (
    <View style={{marginTop: 40, backgroundColor: 'black', flex: 1}}>
    <Pressable onPress={()=> navigation.goBack()} style={{flexDirection: 'row' ,paddingTop: 10, }}>
    <AntDesign name="left" size={24} color="white" marginHorizontal={5} />
        <Text style={{color: 'white', fontSize: 18}}>Profiles and more</Text>
    </Pressable>
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}> 
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'}} style={{height: 100, width: 100, resizeMode: 'contain'}} />
    </View>
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: "white", fontSize: 20}}>Who is watching ?</Text>
        <FlatList 
       
        data={profiles}
        numColumns={2}
renderItem={({item})=>(
    <Pressable 
    onPress={()=>{
        setProfile(item)
        navigation.navigate('loading')
    }}
    style={{marginTop: 30, alignItems: 'center', marginHorizontal: 20}}>
        <Image source={{uri: item.image}}  style={{height: 100, width: 100, borderRadius: 5}} />
        <Text style={{color: 'white', fontSize: 18, marginTop: 5}}>{item.name}</Text>
    </Pressable>
)}
/>
<Pressable onPress={Singoutbtn}>
<Text style={{color: 'gray', fontSize:20, fontWeight: '500', marginTop: 20}}>Sing Out</Text>

</Pressable>
    </View>
    </View>
  )
}

export default Profile