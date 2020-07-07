import React, {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native'

const App = () => {

    const [inputText, setInputText] = useState('')
    const [nameStorage, setNameStorage] = useState('')


    useEffect(() => {
        getDataStorage();
    },[])


    const saveData = async() =>{
        try {
            await AsyncStorage.setItem('name', inputText)
            setNameStorage(inputText)
        } catch (error) {
            console.log(error)
        }
    }

    const getDataStorage = async () => {
        try {
            const name = await AsyncStorage.getItem('name');
            setNameStorage(name)
            console.log(nameStorage)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteData = async () => {
        try {
            await AsyncStorage.removeItem('name')
            setNameStorage('')
            setInputText('')
        } catch (error) {
            console.log(error)
        }
    }



  return (
   
    <View style={styles.container}>
        { nameStorage ? <Text>Hola {nameStorage}</Text> : null }
        
        <TextInput 
            style={styles.input}
            placeholder="Escribe tu nombre"
            onChangeText = {text => setInputText(text)}
            value={inputText}
        />
        <Button
            title="Guardar"
            color='#333'
            onPress={()=> saveData()}
        />
        {nameStorage ? (
            <TouchableHighlight
                style={styles.btnDelete}
                onPress={()=> deleteData()}
            >
                <Text style={styles.deleteText}>Eliminar Nombre &times;</Text>
            </TouchableHighlight>
        ) : null}
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
