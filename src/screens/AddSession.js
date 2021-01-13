import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import { cssConstants } from '../constants/cssConstants';

const AddSession = ({navigation}) => {
    return ( 
        <>
        <Header {...navigation} title="Nouvelle session" />
        <View style={styles.container}>
            <Text style={styles.inputLabel} >Nom de la session</Text>
            <TextInput style={styles.input} placeholder="Nom de la session" placeholderTextColor={cssConstants.WHITE}  />
            <TouchableOpacity style={styles.addBtn} onPress={() => {}}>
                <Text style={styles.addBtnText} >Ajouter</Text>
            </TouchableOpacity>
        </View>
        </>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cssConstants.PRIMARY_COLOR,
        paddingHorizontal: 15,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        padding:16,
        borderRadius:50,
        backgroundColor:"#161616",
        width:"100%",
        color:cssConstants.WHITE
    },
    addBtn:{
        backgroundColor:cssConstants.THIRD_COLOR,
        width:"100%",
        marginTop:10,
        padding:24,
        borderRadius:50,
        alignItems:'center'
    },
    addBtnText:{
        fontSize:16,
        color:cssConstants.WHITE,
        fontWeight:'bold'
    },
    inputLabel:{
        color:cssConstants.THIRD_COLOR,
        alignSelf:'flex-start',
        marginLeft:15,
        marginBottom:5,
        fontSize:16,
        fontWeight:'700'
    }
})
 
export default AddSession;