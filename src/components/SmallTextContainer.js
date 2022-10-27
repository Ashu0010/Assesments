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
        image: require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/icons/icons8-gift-48.png'),
        textOne: 'missed',
        textTwo: 'call alerts'
    },
    {
        image: require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/icons/icons8-gift-48.png'),
        textOne: 'rewards &',
        textTwo: 'coupons'
    },
    {
        image: require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/icons/icons8-gift-48.png'),
        textOne: 'refer',
        textTwo: 'prepaid'
    },

]


export default class TextContainer extends Component {

    render() {
        return (
            <SafeAreaView style={styles.smallTextBox}>
                {arr.map(arr => {
                    return (
                        <View style={styles.smallTextContainer}>
                            <View >
                                <TouchableOpacity>
                                    <Image style={styles.textLogo} source={arr.image} />
                                </TouchableOpacity>
                                </View>
                                <Text>
                                    {arr.textOne}
                                </Text>
                                <Text>
                                    {arr.textTwo}
                                </Text>
                            
                        </View>
                    )
                })}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    smallTextBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 16,
    },

    smallTextContainer: {
        borderRadius: 22,
        borderWidth: 1.5,
        height: 100,
        width: 107,
        backgroundColor: 'rgb(255,255,255)',
        borderColor: 'rgb(247,247,252)',
        alignItems:'center',
        justifyContent:'center'
    },
    textLogo: {
        height: 20,
        width: 20,
        marginBottom:10
    },
});