import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlertOne from './src/components/AlertOne';
import AirtelThanks from "./src/screens/AirtelThanks";


const Tab = createBottomTabNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer initialRouteName="Home">
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="manage" component={AirtelThanks}
            options={{
              tabBarLabel: 'manage',
              tabBarIcon: () =>
                <Image
                  source={require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/icons/icons8-intel-isef-64.png')}
                  style={styles.home}
                  resizeMode='contain' />
            }} />
          <Tab.Screen name="pay" component={AlertOne}
            options={{
              tabBarLabel: 'pay',
              tabBarIcon: () =>
                <Image
                  source={require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/icons/icons8-card-payment-50.png')}
                  style={styles.home}
                  resizeMode='contain' />
            }} />
          <Tab.Screen name="shop" component={AlertOne}
            options={{
              tabBarLabel: 'shop',
              tabBarIcon: () =>
                <Image
                  source={require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/icons/icons8-shopping-bag-24.png')}
                  style={styles.home}
                  resizeMode='contain' />
            }} />
          <Tab.Screen name="discover" component={AlertOne}
            options={{
              tabBarLabel: 'discover',
              tabBarIcon: () =>
                <Image
                  source={require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/icons/icons8-compass-50.png')}
                  style={styles.home}
                  resizeMode='contain' />
            }} />
          <Tab.Screen name="help" component={AlertOne}
            options={{
              tabBarLabel: 'help',
              tabBarIcon: () =>
                <Image
                  source={require('/Users/ashishnegi/Desktop/BootcampAssesment/src/utils/assets/icons/icons8-intel-isef-64.png')}
                  style={styles.home}
                  resizeMode='contain' />
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    height: 21,
  },
});