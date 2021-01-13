import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import { cssConstants } from '../constants/cssConstants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const SessionScreen = ({ navigation }) => {

    const chartConfig = {
        backgroundGradientFrom: cssConstants.SECONDARY_COLOR,
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: cssConstants.SECONDARY_COLOR,
        backgroundGradientToOpacity: 1,
        color: (opacity = 1) => cssConstants.THIRD_COLOR,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional,
    };

    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "july"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43, 150],
                color: (opacity = 1) => cssConstants.THIRD_COLOR, // optional
                strokeWidth: 2 // optional
            }
        ],
    };
    return (
        <>
            <Header {...navigation} title="Session 1" />
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.title}>Valeurs de la session</Text>
                    <Text style={styles.tableHeaderTitle} >Valeur </Text>
                </View>
                <ScrollView style={{height:200}} >
                    <View style={styles.valueCard}>
                        <Text style={styles.value}>21.55</Text>
                        <TouchableOpacity>
                            <Icon name="delete" color={cssConstants.THIRD_COLOR} size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.valueCard}>
                        <Text style={styles.value}>21.55</Text>
                        <TouchableOpacity>
                            <Icon name="delete" color={cssConstants.THIRD_COLOR} size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.valueCard}>
                        <Text style={styles.value}>21.55</Text>
                        <TouchableOpacity>
                            <Icon name="delete" color={cssConstants.THIRD_COLOR} size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.valueCard}>
                        <Text style={styles.value}>21.55</Text>
                        <TouchableOpacity>
                            <Icon name="delete" color={cssConstants.THIRD_COLOR} size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.valueCard}>
                        <Text style={styles.value}>21.55</Text>
                        <TouchableOpacity>
                            <Icon name="delete" color={cssConstants.THIRD_COLOR} size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.valueCard}>
                        <Text style={styles.value}>21.55</Text>
                        <TouchableOpacity>
                            <Icon name="delete" color={cssConstants.THIRD_COLOR} size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.valueCard}>
                        <Text style={styles.value}>21.55</Text>
                        <TouchableOpacity>
                            <Icon name="delete" color={cssConstants.THIRD_COLOR} size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.valueCard}>
                        <Text style={styles.value}>21.55</Text>
                        <TouchableOpacity>
                            <Icon name="delete" color={cssConstants.THIRD_COLOR} size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.valueCard}>
                        <Text style={styles.value}>21.55</Text>
                        <TouchableOpacity>
                            <Icon name="delete" color={cssConstants.THIRD_COLOR} size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.valueCard}>
                        <Text style={styles.value}>21.55</Text>
                        <TouchableOpacity>
                            <Icon name="delete" color={cssConstants.THIRD_COLOR} size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.valueCard}>
                        <Text style={styles.value}>21.55</Text>
                        <TouchableOpacity>
                            <Icon name="delete" color={cssConstants.THIRD_COLOR} size={24} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{
                    marginTop: 15,
                    backgroundColor: cssConstants.SECONDARY_COLOR,
                    borderRadius: 15
                }} >
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardHeaderTitle}>Palmarès valeurs</Text>
                    </View>
                    <BarChart
                        data={data}
                        width={screenWidth - 30}
                        height={256}
                        verticalLabelRotation={25}
                        chartConfig={chartConfig}
                        bezier
                        withInnerLines={false}
                        withVerticalLines={false}
                        withHorizontalLines={false}
                        withHorizontalLabels={true}
                        style={
                            {
                                
                                borderRadius: 15
                            }
                        }
                    />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.addValueBtn} onPress={() => navigation.navigate('AddValue')} >
                <Icon  name="plus" color={cssConstants.THIRD_COLOR} size={40} />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: cssConstants.PRIMARY_COLOR,
        paddingHorizontal: 15
    },
    title: {
        color: cssConstants.WHITE,
        fontSize: 24,
        fontWeight: 'bold'
    },
    tableHeaderTitle: {
        color: cssConstants.THIRD_COLOR,
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 24
    },
    valueCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "#707070",
        paddingVertical: 10
    },
    value: {
        color: cssConstants.THIRD_COLOR,
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardHeader: {
        alignItems: "center",
        paddingVertical:25,
    },
    cardHeaderTitle: {
        color: cssConstants.WHITE,
        fontSize: 18,
        fontWeight: '700',
    },
    addValueBtn:{
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

export default SessionScreen;