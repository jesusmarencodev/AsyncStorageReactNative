import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native'

const App = () => {
  return (
   
    <View style={styles.container}>
        <TextInput 
            style={styles.input}
            placeholder="Escribe tu nombre"
        />
        <Button
            title="Guardar"
            color='#333'
        />
        <TouchableHighlight style={styles.btnDelete}>
            <Text style={styles.deleteText}>Eliminar Nombre &times;</Text>
        </TouchableHighlight>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#FFF',
        alignItems : 'center',
        justifyContent : 'center'
    },
    input : {
        borderColor : '#667',
        borderBottomWidth : 1,
        width : 300,
        height : 40,
        marginBottom : 10,
    },
    btnDelete : {
        backgroundColor : 'red',
        marginTop : 20,
        padding : 10,
    },
    deleteText : {
        color : '#fff',
        fontWeight : 'bold',
        textAlign : 'center',
        textTransform : 'uppercase',
        width : 300,
    }
})
