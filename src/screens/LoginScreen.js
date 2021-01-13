import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { cssConstants } from '../constants/cssConstants';

const LoginScreen = ({navigation}) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.loginTitle}>
                Connexion
            </Text>
            <Text style={styles.inputLabel} >Adresse Email</Text>
            <TextInput style={styles.input} placeholder="Adresse Email" placeholderTextColor={cssConstants.WHITE}  />
            <Text style={styles.inputLabel} >Mot de passe</Text>
            <TextInput style={styles.input} placeholder="Mot de passe" placeholderTextColor={cssConstants.WHITE}  />
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('MainDrawer')}>
                <Text style={styles.loginBtnText} >Connexion</Text>
            </TouchableOpacity>
        </View>
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
    loginTitle:{
        color: cssConstants.WHITE,
        fontSize:32,
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom:50
    },
    input:{
        padding:16,
        borderRadius:50,
        backgroundColor:"#161616",
        width:"100%",
        color:cssConstants.WHITE,
        marginVertical:10
    },
    inputLabel:{
        marginVertical:10,
        color:cssConstants.THIRD_COLOR,
        alignSelf:'center',
        marginLeft:15,
        marginBottom:5,
        fontSize:16,
        fontWeight:'700'
    },
    loginBtn:{
        backgroundColor:cssConstants.THIRD_COLOR,
        width:"100%",
        marginTop:10,
        padding:24,
        borderRadius:50,
        alignItems:'center'
    },
    loginBtnText:{
        fontSize:16,
        color:cssConstants.WHITE,
        fontWeight:'bold'
    },
})
 
export default LoginScreen;