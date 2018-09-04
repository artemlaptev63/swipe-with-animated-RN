import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Deck from "./src/Deck";
import DATA from "./data";
import { Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

class App extends Component {
  renderCard(item) {
    return (
      <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>
          I can customize the Card further
        </Text>
        <Button
          icon={<Icon name="code" color="white" size={20} />}
          buttonStyle={{ backgroundColor: "#03A9F4" }}
          title="View Now!"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>There is no more content here!</Text>
        <Button
          buttonStyle={{ backgroundColor: "#03A9F4" }}
          title="Get more!"
          onPress={() => console.log("Add a function")}
        />
      </Card>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          // onSwipeRight={() => console.log("right")}
          // onSwipeLeft={() => console.log("left")}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
};

export default App;
