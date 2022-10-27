import React, {Component} from "react";
import { 
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet 
} from "react-native";

export default class IconContainer extends Component{
  render(){
    return(
      <SafeAreaView>
        <View style={styles.container}/>

      </SafeAreaView>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    borderRadius:26,
    borderWidth:3,
    padding:120,
    marginHorizontal:16,
    backgroundColor:'rgb(248,248,253)',
    borderColor:'rgb(255,255,255)',
    height:370,


  }
});