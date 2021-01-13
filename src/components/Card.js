import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import { cssConstants } from '../constants/cssConstants';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;


const Card = ({ title, type, number, statsData }) => {
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

    const styles = StyleSheet.create({
        card: {
            backgroundColor: cssConstants.SECONDARY_COLOR,
            padding: 20,
            borderRadius: 15
        },
        cardHeader: {
            alignItems: type=="sum" ? 'flex-start':"center",
            paddingVertical:type=="sum" ? 0:25,
        },
        cardHeaderTitle: {
            color: cssConstants.WHITE,
            fontSize: 18,
            fontWeight: '700',
        },
        cardBody: {

        },
        contentText: {
            color: cssConstants.THIRD_COLOR,
            fontSize: 48,
            fontWeight: 'bold'
        }
    })

    return (
        type == 'sum' ?
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardHeaderTitle}>{title}</Text>
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.contentText}>{number}</Text>
                </View>
            </View>
            : type == "stats" &&
            <View style={{
                backgroundColor:cssConstants.SECONDARY_COLOR,
                borderRadius:15
            }} >
                <View style={styles.cardHeader}>
                    <Text style={styles.cardHeaderTitle}>{title}</Text>
                </View>
                <BarChart
                    data={statsData}
                    width={screenWidth - 30}
                    height={256}
                    verticalLabelRotation={25}
                    chartConfig={chartConfig}
                    bezier
                    withInnerLines={false}
                    withVerticalLines={false}
                    withHorizontalLines={false}
                    withHorizontalLabels={false}
                    style={
                        {
                            paddingRight: 0,
                            borderRadius:15
                        }
                    }
                />
            </View>
    );

}

export default Card;