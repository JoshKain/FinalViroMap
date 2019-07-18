import React, { Component } from "react";
import Maps from "./Maps";
import UserPage from "./UserPage";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Button,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from "react-native";
import Login from "./Login";

const styles = StyleSheet.create({
  title: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "white"
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    color: "black",
    textAlign: "left",
    fontSize: 16,
    margin: 10,
    padding: 5
  },

  button: {
    width: "40%",
    height: "10%",
    alignSelf: "center"
  },

  rightIcon: {
    alignSelf: "flex-end"
  },
  contentContainer: {
    paddingBottom: 20
  },
  card: {
    marginVertical: 10
  },
  buttonstyle: {
    color: "red"
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    padding: 5
  },
  scroll: {
    paddingBottom: 5,
    padding: 10
  },
  border: {
    borderBottomWidth: 160,
    borderColor: "white"
  }
});

export default class Homepage extends Component {
  state = {
    UserPage: false,
    login: false
  };
  handleCardAssize = event => {
    let obj = {
      latitude: 53.492021,
      longitude: -2.246167,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    };
    const x = this.props._getMapWithCoords("MAPCOORDS", obj);
    if (!this.props.resetState) {
      console.warn(x);
      return (
        <TouchableOpacity onPress={x()}>
          <Image
            style={{ width: 70, height: 70 }}
            source={require("./back.png")}
          />
        </TouchableOpacity>
      );
    } else this.props.resetState();
    return (
      <TouchableOpacity onPress={x()}>
        <Image
          style={{ width: 70, height: 70 }}
          source={require("./back.png")}
        />
      </TouchableOpacity>
    );
  };

  handleCardVictoria = event => {
    let obj = {
      latitude: 53.487284,
      longitude: -2.242343,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    };
    const x = this.props._getMapWithCoords("MAPCOORDS", obj);
    if (!this.props.resetState) {
      console.warn(x);
      return (
        <TouchableOpacity onPress={x()}>
          <Image
            style={{ width: 70, height: 70 }}
            source={require("./back.png")}
          />
        </TouchableOpacity>
      );
    } else this.props.resetState();
    return (
      <TouchableOpacity onPress={x()}>
        <Image
          style={{ width: 70, height: 70 }}
          source={require("./back.png")}
        />
      </TouchableOpacity>
    );
  };
  handleCardHulme = event => {
    let obj = {
      latitude: 53.46918,
      longitude: -2.2403,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    };
    const x = this.props._getMapWithCoords("MAPCOORDS", obj);
    if (!this.props.resetState) {
      console.warn(x);
      return (
        <TouchableOpacity onPress={x()}>
          <Image
            style={{ width: 70, height: 70 }}
            source={require("./back.png")}
          />
        </TouchableOpacity>
      );
    } else this.props.resetState();
    return (
      <TouchableOpacity onPress={x()}>
        <Image
          style={{ width: 70, height: 70 }}
          source={require("./back.png")}
        />
      </TouchableOpacity>
    );
  };

  handleCardPicadilly = event => {
    let obj = {
      latitude: 53.46918,
      longitude: -2.2403,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    };

    const x = this.props._getMapWithCoords("MAPCOORDS", obj);
    if (!this.props.resetState) {
      console.warn(x);
      return (
        <TouchableOpacity onPress={x()}>
          <Image
            style={{ width: 70, height: 70 }}
            source={require("./back.png")}
          />
        </TouchableOpacity>
      );
    } else this.props.resetState();
    return (
      <TouchableOpacity onPress={x()}>
        <Image
          style={{ width: 70, height: 70 }}
          source={require("./back.png")}
        />
      </TouchableOpacity>
    );
  };

  userPage = event => {
    this.setState({ UserPage: true });
  };
  backhome = event => {
    this.setState({ UserPage: false });
  };

  backtoLogin = event => {
    this.setState({ login: true });
  };
  render() {
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

        <View>
          {this.state.UserPage && (
            <View>
              <UserPage
                home={this.props.getExperienceButtonOnPress}
                backhome={this.backhome}
                _getExperienceButtonOnPress={
                  this.props._getExperienceButtonOnPress
                }
                _getMapWithCoords={this.props._getMapWithCoords}
              />
            </View>
          )}
          {!this.state.UserPage && !this.state.login && (
            <View>
              <View style={styles.navbar}>
                <TouchableOpacity onPress={this.backtoLogin}>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require("./back.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.userPage}>
                  <Image
                    ref="USER_PAGE"
                    style={{ width: 50, height: 50 }}
                    source={require("./image.png")}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.props._getExperienceButtonOnPress("MAPs")}
                >
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={require("./nav.png")}
                  />
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.scroll}>
                <View style={styles.border}>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        this.handleCardAssize();
                      }}
                    >
                      <ImageBackground
                        source={require("./Assize.jpg")}
                        style={{ width: 400, height: 200 }}
                      >
                        <Text style={styles.title}>
                          Manchester Assize Courts
                        </Text>
                      </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.handleCardVictoria();
                      }}
                    >
                      <ImageBackground
                        source={require("./victoria.jpg")}
                        style={{ width: 400, height: 200 }}
                      >
                        <Text style={styles.title}>Victoria Station</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.handleCardHulme();
                      }}
                    >
                      <ImageBackground
                        source={require("./hulmefire.jpg")}
                        style={{ width: 400, height: 200 }}
                      >
                        <Text style={styles.title}>Opal Halls MMU</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.handleCardPicadilly();
                      }}
                    >
                      <ImageBackground
                        source={require("./piccadilly.jpg")}
                        style={{ width: 400, height: 200 }}
                      >
                        <Text style={styles.title}>Picadilly Gardens</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          )}
        </View>
      </View>
    );
  }
}
