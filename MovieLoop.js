import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import data2 from './data2'
import MovieFilem from './MovieFilem'

const MovieLoop = () => {
    let movie = data2

  return (
    <View>
   {movie.map(movies => (
   <MovieFilem url={movies.url} name={movies.name} />
   ))}
    </View>
  )
}

export default MovieLoop