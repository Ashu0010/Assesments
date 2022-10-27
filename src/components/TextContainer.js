import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Image,
} from "react-native";


const arr = [
    {
        image: require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/icons/icons8-forward-arrow-60.png'),
        textOne: 'SERVICES',
        textTwo: '5 services',
        textThree: '',
        button: 'VIEW DETAILS',
    },
    {
        image: require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/icons/icons8-forward-arrow-60.png'),
        textOne: 'MONEY',
        textTwo: 'Rs 1000',
        textThree: 'in your wallet',
        button: 'SHOW BALANCE',
    },
]


export default class TextContainer extends Component {

    render() {
        return (
            <SafeAreaView style={styles.textBox}>
                {arr.map(arr => {
                    return (
                        <View >
                            <View style={styles.textContainer}>
                                <TouchableOpacity>
                                    <Image style={styles.textLogo} source={arr.image} />
                                </TouchableOpacity>
                                <Text>
                                    {arr.textOne}
                                </Text>
                                <Text>
                                    {arr.textTwo}
                                </Text>
                                <Text>
                                    {arr.textThree}
                                </Text>
                                <View style={styles.textButtonStyle}>
                                    <TouchableOpacity style={styles.textButton}>
                                        <Text style={styles.textButtonText}>
                                            {arr.button}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    textBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    textContainer: {
        borderRadius: 22,
        borderWidth: 1.5,
        padding: 10,
        height: 200,
        width: 170,
        backgroundColor: 'rgb(255,255,255)',
        borderColor: 'rgb(247,247,252)'
    },
    textLogo: {
        height: 20,
        width: 20,
        position: 'absolute',
        right: 2,
        top: 5,
    },
    textButton: {
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 12,
        width: 120,
        height: 37,
        borderRadius: 5,
        marginBottom: 20,
    },
    textButtonText: {
        color: 'rgb(255,255,255)',
        fontSize: 10,
        fontWeight: 'bold',
    },
    textButtonStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});