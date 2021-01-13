import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import { cssConstants } from '../constants/cssConstants';
import { Row, Column as Col } from 'react-native-flexbox-grid';

const HomeScreen = ({ navigation }) => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June","july"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43,150],
            color: (opacity = 1) => cssConstants.THIRD_COLOR, // optional
            strokeWidth: 2 // optional
          }
        ],
      };
    return ( 
        <>
        <Header {...navigation} title="Accueil"/>
        <View style={styles.container}>
            <Row size={12}>
                <Col sm={12} style={styles.withGutter} >
                <Card title="Nb. Sessions" type="sum" number={690}/>
                </Col>
                <Col sm={12} style={styles.withGutter}>
                <Card title="Nb. Sessions aujourd'hui" type="sum" number={24}/>
                </Col>
                <Col sm={12} style={styles.withGutter}>
                <Card title="Nb. Sessions par date" type="stats" statsData={data} number={24}/>
                </Col>
            </Row>
        </View>
        </>
     );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: cssConstants.PRIMARY_COLOR,
      paddingHorizontal:10
    },
    withGutter:{
        padding:5
    }
});

export default HomeScreen;