
import React from "react";
import { Button } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";


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
    this.setState({
      randomNumber: this.generateRandomNumber()
    });
  }

  generateRandomNumber = () => {
    //TODO: generate randome number
    let randomNumber = Math.floor(Math.random() * 25)
    this.setState({
      randomNumber: randomNumber,
      isScratched: true
    });
    return randomNumber;
  };

  scratchItem = itemNumber => {
    //TODO: decide lucky or unlucky
    if (this.state.randomNumber === itemNumber) {
      itemArray[itemNumber] = "lucky"
    } else {
      itemArray[itemNumber] = "unlucky"
    }
    //update the state
    this.forceUpdate();
  };

  scratchItemIcon = () => {
    //TODO: find right icon
    if (itemArray[itemNumber] === "lucky") {
      return "dollar"
    } else if (itemArray[itemNumber] === "unlucky") {
      return "frown-o"
    }
    return "circle"
  };

  scratchItemColor = () => {
    //TODO: find right color
    if (itemArray[itemNumber] === "lucky") {
      return "green"
    } else if (itemArray[itemNumber] === "unlucky") {
      return "red"
    }
    return "black"
  };

  showAllItem = () => {
    //TODO: Button - reveal all icons
    itemArray.fill('unlucky');
    itemArray[this.state.randomNumber] = 'lucky'

    this.forceUpdate();
  }

  resetGame = () => {
    //TODO: Button - reset game
    this.setState({ randomNumber: this.generateRandomNumber() },
      () => {
        itemArray.fill('empty');
        this.forceUpdate;
      });
  };

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
