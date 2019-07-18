import React, { Component } from "react";
import { Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Container, Right, Button } from "native-base";
import App from "./App";

const styles = StyleSheet.create({
  imageProfile: {
    alignSelf: "center",
    width: 200,
    height: 200,
    borderRadius: 200 / 2
  },
  textName: {
    alignSelf: "center",
    fontSize: 32,
    paddingBottom: 10
  },
  textEmail: {
    alignSelf: "center",
    fontSize: 20,
    paddingBottom: 10
  },

  ImageCog: {
    alignSelf: "center",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    right: 1
  },

  ButtonView: {
    marginTop: 100,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: 300,
    height: 50
  }
});

returnHome = () => {
  this.setState({
    homepage: true
  });
  console.warn("going home");
};

class UserPage extends Component {
  state = {
    homepage: false
  };
  render() {
    if (!this.state.homepage)
      return (
        <Container>
          <TouchableOpacity onPress={this.returnHome}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require("./back.png")}
            />
          </TouchableOpacity>
          <Image
            style={styles.imageProfile}
            source={require("./Profile-ICon.png")}
          />
          <Text style={styles.textName}>Josh Kain</Text>
          <Text style={styles.textEmail}>joshkain@live.com</Text>
          <Image style={styles.ImageCog} source={require("./settings.png")} />
          <Button
            style={styles.ButtonView}
            onPress={() => {
              //this.logout
            }}
          >
            <Text
              style={{
                flex: 1,
                color: "white",
                textAlign: "center"
              }}
            >
              Log Out
            </Text>
          </Button>
        </Container>
      );
    else {
      return <App />;
    }
  }
}

export default UserPage;
