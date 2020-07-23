
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Button } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

//TODO: get array of length 25
var itemArray = new Array(25).fill('empty');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: "",
    };
  }

  //when app loads up
  componentDidMount() {
    //TODO: call generate randome number method
  }

  generateRandomNumber = () => {
    //TODO: generate randome number
  };

  scratchItem = () => {
    //TODO: decide lucky or unlucky
  }

  scratchItemIcon = () => {
    //TODO: find right icon
  }

  scratchItemColo = () => {
    //TODO: find right color
  }

  showAllItem = () => {
    //TODO: Button - reveal all icons
  }

  resetGame = () => {
    //TODO: Button - reset game
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Scratch and Win Game!</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
