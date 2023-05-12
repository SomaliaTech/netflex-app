import { View, Text, ImageBackground, Image, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {AntDesign} from '@expo/vector-icons'
import {Entypo} from '@expo/vector-icons'

import { MovieItems } from './ContextApi'

const Headerjs = () => {
  const {profileUser, setProfile}= useContext(MovieItems)
const API_KEY = 'c7e3877865c55983b5575e74d55bff53'

const [moviedata,setMovie] = useState([])
// console.log(moviedata)
useEffect(()=> {
  const request = async ()=>{
    await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response)=> response.json())
    .then((data)=> {
      setMovie(data.results[Math.floor(Math.random() * data.results.length -1)])
    })
  }
  request()
},[])  
  return (
    <View>
      <ImageBackground
       style={{ width: "100%", height: 480, position: "relative"}}
       source={{
         uri: `https://image.tmdb.org/t/p/original/${moviedata?.poster_path}`,
       }}
      >
<View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: -10, alignItems: 'center'}}> 
  <View>
    <Image  style={{width: 100, height: 100, borderRadius: 5,resizeMode:'contain'}} source={{uri:  'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'}}/>
  </View>
  <View style={{flexDirection: 'row',alignItems: 'center'}}>
  <AntDesign name="search1" size={24} color="white" />
  <Pressable>
    <Image source={{uri: profileUser.image}} style={{width: 40, height: 40, borderRadius: 8, marginHorizontal: 10}}/>
  </Pressable>
  </View>
</View>
<View style={{justifyContent: 'center', alignItems: 'center', margin: 10, flexDirection: 'row'}}>
  <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>Catogray</Text>
  <Text style={{color: 'white', fontSize: 18, fontWeight: '500' , marginHorizontal: 18}}>Movies</Text>
  <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>TV Shows</Text>
</View>
      </ImageBackground>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-around'}}>
        <View style={{alignItems: 'center'}}>
        <AntDesign name="infocirlceo" size={30} color="white" />
        <Text style={{fontSize: 18, fontWeight: '500', color: 'white'}}>Info</Text>
        </View>
        <View style={{backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', padding: 8, width: 120, borderRadius: 7, justifyContent: 'center'}}>
        <Entypo name="controller-play" size={24} color="black" />
        <Text style={{fontSize: 18, fontWeight: '500', color: 'black', marginLeft: 10}}>Play</Text>
        </View>
        <View style={{alignItems: 'center'}}>
        <AntDesign name="plus" size={30} color="white" />
        <Text style={{fontSize: 18, fontWeight: '500', color: 'white'}}>My list</Text>
        </View>
      </View>
    </View>
  )
}

export default Headerjs