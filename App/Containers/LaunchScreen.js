import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.utn} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <Text style={styles.titleText}>
              Inteligencia Artificial
            </Text>
            <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 50 }}>
              Trabajo Práctico Integrador
            </Text>
            <Text style={[styles.sectionText, { fontWeight: 'bold', marginBottom: 50 }]}>
              Tema: Búsqueda Heurística
            </Text>
            
            <Text style={{ fontWeight: 'bold' }}>INTEGRANTES:</Text>
            <Text>57287 - Auquer, Marcelo</Text>
            <Text>57646 - Dellarossa, Enzo</Text>
            <Text>53950 - Elmoni, Emmanuel</Text>
            <Text>54493 - Soaje, Juan</Text>
            <Text>58447 - Villalón, Darío</Text>
          </View>

          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}
