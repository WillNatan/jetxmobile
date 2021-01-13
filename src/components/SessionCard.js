import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { cssConstants } from '../constants/cssConstants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SessionCard = ({ title, date, time }) => {
    return (
        <View style={styles.sessionCard} >
            <View style={{flexDirection:'row'}}>
                <Icon name="gamepad-square" color={cssConstants.THIRD_COLOR} size={24} />
                <Text style={styles.title} >{title}</Text>
            </View>
            <View>
                <Text style={styles.datetime} >{date}</Text>
                <Text style={styles.datetime} >{time}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sessionCard: {
        backgroundColor: cssConstants.SECONDARY_COLOR,
        paddingVertical: 20,
        paddingHorizontal:30,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:5
    },
    title: {
        color: cssConstants.THIRD_COLOR,
        fontSize: 18,
        marginLeft: 15
    },
    datetime:{
        color:cssConstants.THIRD_COLOR,
        fontWeight:'bold',
        fontSize:16
    }
})

export default SessionCard;