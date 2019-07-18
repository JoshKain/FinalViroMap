import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button
} from "react-native";
import Login from "./Login";

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
    borderWidth: 10,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    padding: 10
  }
});

class UserPage extends Component {
  state = {
    homepage: false,
    login: false
  };
  backtoLogin = event => {
    this.setState({ login: true });
  };

  render() {
    if (!this.props.resetState) {
      return (
        <View>
          {this.state.login && (
            <View>
              <Login
                _getExperienceButtonOnPress={
                  this.props._getExperienceButtonOnPress
                }
                _getMapWithCoords={this.props._getMapWithCoords}
              />
            </View>
          )}
          {!this.state.login && (
            <View>
              <View style={styles.navbar}>
                <TouchableOpacity onPress={this.props.backhome}>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require("./back.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.backtoLogin}>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require("./logout.png")}
                  />
                  <Text>Log Out</Text>
                </TouchableOpacity>
              </View>
              <Image
                style={styles.imageProfile}
                source={require("./Profile-ICon.png")}
              />
              <Text style={styles.textName}>William Wallace</Text>
              <Text style={styles.textEmail}>WilliamWallace@live.com</Text>
              <Text style={styles.textEmail}>Locations visted: 3</Text>
              <Image
                style={styles.ImageCog}
                source={require("./settings.png")}
              />
            </View>
          )}
        </View>
      );
    } else this.props.resetState();
    return (
      <View>
        {this.state.login && (
          <View>
            <Login
              _getExperienceButtonOnPress={
                this.props._getExperienceButtonOnPress
              }
              _getMapWithCoords={this.props._getMapWithCoords}
            />
          </View>
        )}
        {!this.state.login && (
          <View>
            <View style={styles.navbar}>
              <TouchableOpacity onPress={this.props.backhome}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("./back.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.backtoLogin}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("./logout.png")}
                />
                <Text>Log Out</Text>
              </TouchableOpacity>
            </View>
            <Image
              style={styles.imageProfile}
              source={require("./Profile-ICon.png")}
            />
            <Text style={styles.textName}>William Wallace</Text>
            <Text style={styles.textEmail}>WilliamWallace@live.com</Text>
            <Text style={styles.textEmail}>Locations visted: 3</Text>
            <Image style={styles.ImageCog} source={require("./settings.png")} />
          </View>
        )}
      </View>
    );
  }
}

export default UserPage;
