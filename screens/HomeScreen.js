import { View, Text ,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import Headerjs from '../Headerjs'
import MovieSlide from '../MovieSlide'
import MovieLoop from '../MovieLoop'


const HomeScreen = () => {

  return (
    <ScrollView style={{marginTop: 40, flex: 1, backgroundColor: '#000' }}>
    <Headerjs/>
    <MovieSlide/>
    <MovieLoop/>
    </ScrollView>
  )
}

export default HomeScreen