import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Image,
    ScrollView,
} from "react-native";


export default class ScrollPhoto extends Component {

    render() {
        return (
            <SafeAreaView style={styles.textBox}>
                <ScrollView horizontal={true}>

                    <View style={styles.screenshotsScrollView}>
                        <Image
                            resizeMode='cover'
                            source={require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/images/83949806.webp')}
                            style={styles.screenshotImage} />
                            <Image
                            resizeMode='cover'
                            source={require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/images/83949806.webp')}
                            style={styles.screenshotImage} />
                            <Image
                            resizeMode='cover'
                            source={require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/images/83949806.webp')}
                            style={styles.screenshotImage} />
                            <Image
                            resizeMode='cover'
                            source={require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/images/83949806.webp')}
                            style={styles.screenshotImage} />
                    </View>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    textBox: {
        flexDirection: 'row',
        marginHorizontal: 16,
    },
    screenshotsScrollView: {
        flexDirection: 'row',
    },
    screenshotImage: {
        width: 250,
        height: 150,
        borderWidth: 0.1,
        borderRadius: 10,
        borderColor: 'green',
        marginVertical: 10,
        marginLeft: 15,
        marginRight: 0,
    },
});