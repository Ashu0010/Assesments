import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";

const DATA = [
  {

    image: 'https://cdn-icons-png.flaticon.com/512/1157/1157803.png',
    title: 'recharge',
  },
  {
    
    image: 'https://cdn-icons-png.flaticon.com/128/1121/1121336.png',
    title: 'pay bills',
  },
  {
    
    image: 'https://cdn-icons-png.flaticon.com/512/1895/1895474.png',
    title: 'thank benefits',
  },
  {
    
    image: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png',
    title: 'add existing connection',
  },
  {
   
    image: 'https://cdn-icons-png.flaticon.com/512/4308/4308262.png',
    title: 'top up data',
  },
  {
    
    image: 'https://cdn-icons-png.flaticon.com/512/46/46019.png',
    title: 'international roaming',
  },
  {
    
    image: 'https://cdn-icons-png.flaticon.com/512/4058/4058824.png',
    title: 'upgrade to postpaid',
  }
]

export default class Shortcuts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <View>
            <Text style={styles.shortText}>SHORTCUTS</Text>
          </View>
          <FlatList
            horizontal={false}
            data={DATA}
            numColumns={4}
            keyExtractor={(index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View style={styles.flatListView}>

                  {item.image && (
                    <View style={styles.flatCircleIcon}>
                      <Image
                        source={{ uri: item.image }}
                        style={styles.flatImageIcons}
                      />
                    </View>
                  )}

                  {!!item.title && (
                    <View style={styles.flatTextView}>
                      <Text
                        style={styles.flatText}>
                        {item.title}
                      </Text>
                    </View>
                  )}

                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'rgb(248,248,253)',
    border: 0,
    borderRadius: 15,
    width: 355,
    height: 255,
  },
  shortText: {
    margin: 20,
    fontSize: 11,
    color: 'rgb(152,159,190)',
    fontWeight: 'bold',
  },
  flatListView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  flatCircleIcon: {
    border: 0,
    borderRadius: 100,
    padding: 12,
    backgroundColor: 'rgb(227,229,252)',
  },
  flatImageIcons: {
    height: 25,
    width: 25,
  },
  flatTextView: {
    width: 90,
    paddingTop: 5,
    paddingBottom: 20,
  },
  flatText: {
    textAlign: 'center',
    fontSize: 10,
    color: 'rgb(133,136,140)',

  }

})