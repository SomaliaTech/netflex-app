import { View, Text,Image ,Pressable,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'

const MovieSlide = () => {
const [movie,setMovie]= useState([])
const API_KEY = 'c7e3877865c55983b5575e74d55bff53'
useEffect(()=>{
  const request = async ()=>{
 await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`) 
 .then((response)=> response.json() )
 .then((data)=>{
   setMovie(data.results)
 })  
  } 
  request() 
},[])
    
  return (
    <View style={{flexDirection: 'row', marginTop: 10,padding: 10}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movie.slice(0,10).map((mov,id) =>(
    <Pressable style={{ margin: 10,borderRadius: 3}} key={id}>
<Image  source={{uri: `https://image.tmdb.org/t/p/original/${mov?.poster_path}` }} style={{width: 150, height: 150}}/>
<Text style={{color: 'white', fontSize:70, zIndex:1, width: '82%', fontWeight: '500',position: 'absolute',top: 80, right: 20, marginBottom: 10}}>{id + 1}</Text>
    </Pressable>

    
    ))}
        </ScrollView>
    </View>
  )
}

export default MovieSlide