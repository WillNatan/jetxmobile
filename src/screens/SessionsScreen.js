import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import SessionCard from '../components/SessionCard';
import { cssConstants } from '../constants/cssConstants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const SessionsScreen = ({ navigation }) => {
    return (
        <>
            <Header {...navigation} title="Vos sessions" />
            <ScrollView style={styles.container}>
                <TouchableOpacity  onPress={() => navigation.navigate('SingleSession')}>
                    <SessionCard title="Session 1" date="21-01-2015" time="14:55" />
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity style={styles.addSessionBtn} onPress={() => navigation.navigate('AddSession')} >
                <Icon  name="plus" color={cssConstants.THIRD_COLOR} size={40} />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cssConstants.PRIMARY_COLOR,
        paddingHorizontal: 10
    },
    addSessionBtn:{
        position:'absolute',
        bottom:15,
        right:15,
        width:54,
        height:54,
        backgroundColor:cssConstants.WHITE,
        borderRadius:54,
        alignItems:'center',
        justifyContent:'center',
        elevation: 3
    }
});

export default SessionsScreen;