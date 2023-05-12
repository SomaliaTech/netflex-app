import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'

const LoadingScren = ({navigation}) => {
useEffect(()=>{
setTimeout(()=>{
navigation.replace('Home')
},1000)
},[])
  return (
    <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator  size={'large'} color={'red'}/>
      <Text style={{color: 'white', fontSize: 20, fontWeight: '500' ,marginTop: 4}}>loading...</Text>
    </View>
  )
}

export default LoadingScren