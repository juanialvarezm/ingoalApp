import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const PartidoDetails = () => {
    const route = useRoute()
    const { param } = route.params;


    return (
    <View>
      <Text>PartidoDetails</Text>
      <Text>itemId: {param.equipoLocal?.nombre}</Text>
      <Text>itemId: {param.equipoVisitante?.nombre}</Text>

      </View>
  )
}

const styles = StyleSheet.create({})

export default PartidoDetails