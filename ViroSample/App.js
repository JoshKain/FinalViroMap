import React, { Component, Fragment } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  Button,
  ImageBackground
} from "react-native";

import Login from "./components/Login";
import SignUp from "./components/Signup";
import HomePage from "./components/Home";

import { ViroARSceneNavigator } from "react-viro";
import Maps from "./components/Maps";

var sharedProps = {
  apiKey: "2DF60EAD-EC00-4D0A-83DA-96E20F6E3352"
};

// Sets the default scene you want for AR and VR
var InitialARScene = require("./js/HelloWorldSceneAR");

var UNSET = "UNSET";
var HOME_NAVIGATOR_TYPE = "HOME";
var AR_NAVIGATOR_TYPE = "AR";
var MAPS_NAVIGATOR_TYPE = "MAPs";
var HOMEPAGE_NAVIGATOR_TYPE = "HOMEPAGE";
var MAPS_WITH_COORDS = "MAPCOORDS";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps,
      activeExample: -1,
      loginBool: false,
      place: false,
      homeBool: false
    };

    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);

    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
    this._exitViro = this._exitViro.bind(this);
    this._getMapWithCoords = this._getMapWithCoords.bind(this);
    // this.onBack = this.onBack.bind(this);
  }

  addNinja = ninja => {};

  changeStateBool = bool => {
    this.setState({ loginBool: bool });
  };

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    console.warn("hello");
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == MAPS_NAVIGATOR_TYPE) {
      return this._getMapsNavigator(this.state.place);
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    } else if (this.state.navigatorType == HOME_NAVIGATOR_TYPE) {
      return this._getHomeNavigator();
    } else if (this.state.navigatorType == HOMEPAGE_NAVIGATOR_TYPE) {
      return this._getHomePageNavigator();
    } else if (this.state.navigatorType == MAPS_WITH_COORDS) {
      return this._getMapsCoordsNavigator();
    }
  }

  // Presents the user with a choice of an AR or VR experience
  _getExperienceSelector() {
    return (
      <Fragment>
        <View style={{ display: "none" }}>
          <View style={localStyles.outer}>
            <View style={localStyles.inner}>
              <Text style={localStyles.titleText}>
                Choose your desired experience:
              </Text>

              <TouchableHighlight
                style={localStyles.buttons}
                onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
                underlayColor={"#68a0ff"}
              >
                <Text style={localStyles.buttonText}>THIS USED TO BE AR</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={localStyles.buttons}
                onPress={this._getExperienceButtonOnPress(MAPS_NAVIGATOR_TYPE)}
                underlayColor={"#FF0000"}
              >
                <Text style={localStyles.buttonText}>THIS USED TO BE MAP</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View>
          {this.state.loginBool === false && (
            <Login
              changeStateBool={this.changeStateBool}
              _getExperienceButtonOnPress={this._getExperienceButtonOnPress}
              _getMapWithCoords={this._getMapWithCoords}
            />
          )}
          {this.state.loginBool && (
            <SignUp changeStateBool={this.changeStateBool} />
          )}
        </View>
      </Fragment>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <>
        <View>
          <Button
            // onPress={this.handlePress}
            onPress={this._getExperienceButtonOnPress(UNSET)}
            title="Back"
            color={this.state.color}
            accessibilityLabel="Navigate back a page"
          />
        </View>
        <ViroARSceneNavigator
          {...this.state.sharedProps}
          getExperienceButtonOnPress={this._getExperienceButtonOnPress(UNSET)}
          initialScene={{ scene: InitialARScene }}
        />
      </>
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType
      });
    };
  }

  _getMapWithCoords(a, place) {
    console.warn(a, "mappcords");
    console.warn(place, "insidegetmapwithcoords");

    return () => {
      console.warn("return check");
      console.warn(a, "mapcords inside return");
      console.log(place, "should be card inside return");

      setTimeout(() => {
        this.setState(
          {
            navigatorType: a,
            place: place
          },
          () => {
            console.warn(this.state.navigatorType, this.state.place, "ghghhgh");
          }
        );
      }, 4 * 300);
    };
  }

  _getMapsNavigator() {
    return (
      <Maps
        getExperienceButtonOnPress={this._getExperienceButtonOnPress(
          HOME_NAVIGATOR_TYPE
        )}
        _getExperienceButtonOnPress={this._getExperienceButtonOnPress}
        _getMapWithCoords={this._getMapWithCoords}
      />
    );
  }

  _getMapsCoordsNavigator() {
    return (
      <Maps
        getExperienceButtonOnPress={this._getExperienceButtonOnPress(
          HOME_NAVIGATOR_TYPE
        )}
        _getExperienceButtonOnPress={this._getExperienceButtonOnPress}
        _getMapWithCoords={this._getMapWithCoords}
        place={this.state.place}
      />
    );
  }

  // _getHomeNavigatorcurrentlynotinuse() {
  //   return (
  //     <View>
  //       <ImageBackground source={require("./components/background.png")} style={{ width: '100%', height: '100%' }}>
  //         <TouchableHighlight
  //           style={localStyles.buttonstyle}
  //           onPress={this._getExperienceButtonOnPress(MAPS_NAVIGATOR_TYPE, "COORDS")}
  //           underlayColor={'#FF0000'} >
  //           <Text style={localStyles.text}>MAPS</Text>
  //         </TouchableHighlight>
  //       </ImageBackground>

  //     </View>
  //   )
  // }
  _getHomeNavigator() {
    return (
      <View>
        <ImageBackground
          source={require("./components/background.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <TouchableHighlight
            style={localStyles.buttonstyle}
            onPress={this._getExperienceButtonOnPress(HOMEPAGE_NAVIGATOR_TYPE)}
            underlayColor={"#FF0000"}
          >
            <Text style={localStyles.text}>HOME PAGE</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={localStyles.buttonstyle}
            onPress={this._getExperienceButtonOnPress(MAPS_NAVIGATOR_TYPE)}
            underlayColor={"#FF0000"}
          >
            <Text style={localStyles.text}>MAPS</Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
  _getHomePageNavigator() {
    return (
      <View>
        <HomePage
          getExperienceButtonOnPress={this._getExperienceButtonOnPress(
            HOME_NAVIGATOR_TYPE
          )}
          getMapWithCoords={this._getMapWithCoords}
        />
      </View>
    );
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType: UNSET
    });
  }
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white"
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black"
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 25
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  buttonstyle: {
    marginTop: 10,
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1
  },
  text: {
    alignSelf: "center",
    color: "black",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#ffffff"
  }
});

module.exports = ViroSample;
