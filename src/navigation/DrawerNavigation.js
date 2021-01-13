import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import StackNavigation from './StackNavigation';
import { Avatar, Caption, Drawer, Title } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { cssConstants } from '../constants/cssConstants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const MainDrawer = createDrawerNavigator()

const CustomLabel = ({ text }) => {
    return (
        <Text style={{ color: cssConstants.WHITE, fontSize: 16 }} >{text}</Text>
    )
}

const CustomDrawerContent = (props) => {
    return (
        <View  style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userSection}>
                        <View style={{flexDirection:'row'}} >
                            <Avatar.Image 
                                source={{
                                    uri:'test'
                                }}
                                size={54}
                            />
                            <View style={{marginLeft:15}} >
                                <Title style={styles.title}>Willy NATAN</Title>
                                <Caption style={styles.caption}>Utilisateur</Caption>
                            </View>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection} >
                <Drawer.Item
                        label={<CustomLabel text="Accueil" />}
                        icon={() => (
                            <Icon name="home" color={cssConstants.THIRD_COLOR} size={24} />
                        )}
                        onPress={() => props.navigation.navigate('Home')}
                    />
                    <Drawer.Item
                        label={<CustomLabel text="Sessions" />}
                        icon={() => (
                            <Icon name="view-list" color={cssConstants.THIRD_COLOR} size={24} />
                        )}
                        onPress={() => props.navigation.navigate('AllSessions')}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section>
                    <Drawer.Item
                        label={<CustomLabel text="Déconnexion" />}
                        icon={() => (
                            <Icon name="logout" color={cssConstants.THIRD_COLOR} size={24} />
                        )}
                        onPress={() => {}}

                    />
                </Drawer.Section>
        </View>
    );
}


const DrawerNavigation = () => {
    return (
        <MainDrawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} drawerStyle={{
            backgroundColor: cssConstants.SECONDARY_COLOR,
            width: 240,
        }}>
            <MainDrawer.Screen component={StackNavigation} name="HomeStack" />
        </MainDrawer.Navigator>
    );
}

const styles = StyleSheet.create({
    drawerContent:{
        marginTop:15
    },
    drawerSection:{
        marginTop: 15
    },
    userSection:{
        paddingLeft:20
    },
    title:{
        color:cssConstants.WHITE
    },
    caption:{
        color:cssConstants.WHITE
    }
})

export default DrawerNavigation;