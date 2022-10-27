import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import TextContainer from "../components/TextContainer";
import IconContainer from "../components/IconContainer";
import SmallTextContainer from '../components/SmallTextContainer';
import ScrollPhoto from "../components/ScrollPhoto";

export default class AirtelThanks extends Component {
  render() {
    return (
      <SafeAreaView style={styles.page}>
        <View style={styles.headerView}>
          <TouchableOpacity style={styles.flatCircleIcon}>
            <Image
              source={require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/icons/icons8-username-100.png')}
              style={styles.logo}
              resizeMode='contain' />
          </TouchableOpacity>

          <View style={styles.manageTextStyle}>
            <Text style={styles.manageText}> manage </Text>
          </View>

          <TouchableOpacity style={styles.flatCircleIcon}>
            <Image
              source={require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/icons/icons8-alarm-50.png')}
              style={styles.logo}
              resizeMode='contain' />
          </TouchableOpacity>

        </View>

        <ScrollView>

          <View><Text></Text></View>

          <TextContainer />

          <View><Text></Text></View>

          <View style={styles.shortContainer} >
            <View style={styles.shortIconContainer}>
              <View>
                <Image
                  source={{ uri: 'https://assets.airtel.in/bank/assets/images/easy-payments/airtel.png' }}
                  style={styles.airtelLogo}
                  resizeMode='contain'
                />
                <Text>5GPlus</Text>
              </View>
              <Text>Check if your phone is 5G enabled</Text>
              <TouchableOpacity>
                <Image
                  source={require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/icons/icons8-forward-arrow-60.png')}
                  style={styles.forwardLogo}
                  resizeMode='contain' />
              </TouchableOpacity>
            </View>
          </View>

          <View><Text> </Text></View>

          <ScrollPhoto/>

          <View><Text> </Text></View>

          <SmallTextContainer />

          <View><Text> </Text></View>

          <IconContainer />

          <View><Text> </Text></View>

          <IconContainer />

          <View><Text></Text></View>

          <TextContainer />

          <View><Text> </Text></View>

          <ScrollPhoto/>

        </ScrollView>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'rgb(239,241,253)',
  },
  headerView: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(232,234,249)',
  },
  logo: {
    height: 25,
    width: 25,
    marginHorizontal: 12,
  },
  manageText: {
    fontWeight: 'bold',
  },
  manageTextStyle: {
    justifyContent: 'center'
  },
  flatCircleIcon: {
    borderRadius: 100,
    paddingVertical: 10,
    backgroundColor: 'rgb(227,229,252)',
  },
  shortContainer: {
    flex: 1,
    alignItems: 'center',
  },
  shortIconContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(248,248,253)',
    borderRadius: 15,
    width: 355,
    height: 60,
    padding: 10,
    alignItems: 'center'
  },
  airtelLogo: {
    height: 30,
    width: 70,

  },
  forwardLogo: {
    height: 20,
    width: 20,
  },
});