import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { cssConstants } from '../constants/cssConstants';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from "@react-navigation/native";
const Header = (props) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerContainer}>
            {props.canGoBack() && props.title !== "Accueil" &&
                <TouchableOpacity onPress={()=>props.goBack()}>
                <Icon name="arrow-left" color={cssConstants.WHITE} size={32} />
            </TouchableOpacity>
                }
                <Text style={styles.title} >{props.title}</Text>
                <TouchableOpacity onPress={()=>props.openDrawer()}>
                    <Icon name="menu" color={cssConstants.WHITE} size={32} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: cssConstants.PRIMARY_COLOR,
        paddingTop: Constants.statusBarHeight,
    },
    headerContainer: {
        paddingVertical:30,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: cssConstants.WHITE,
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default Header;