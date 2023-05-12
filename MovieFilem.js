import { View, Text, Pressable, Image,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const MovieFilem = ({url, name}) => {
    const [moviedata,setMovie] = useState([])
const   API_KEY= "b93a64480573ce5248c28b200d79d029"
useEffect(()=>{
    const request = async () =>{
        await fetch(url)
        .then((response)=>{response.json()})
        .then(data=> {
            setMovie(data.results)
        })
    }
    request()
},[])    
  return (
<View>
    {moviedata.map(movies => (
<ScrollView>
<Pressable style={{ margin: 10,borderRadius: 3}} key={id}>
<Image  source={{uri: `https://image.tmdb.org/t/p/original/${movies?.poster_path}` }} style={{width: 150, height: 150}}/>
<Text style={{color: 'white', fontSize:70,  fontWeight: '500',position: 'absolute'}}>{movies.name}</Text>
</Pressable>
</ScrollView>

))}
</View>
  )
}

export default MovieFilem