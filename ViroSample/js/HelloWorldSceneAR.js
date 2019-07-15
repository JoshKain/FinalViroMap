"use strict";

import React, { Component } from "react";

import { StyleSheet, View, Button, Text } from "react-native";

import { ViroARScene, ViroText, ViroConstants } from "react-viro";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene>
        <ViroARImageMarker target={"targetOne"}>
          {/* <ViroBox position={[0, 0.25, 0]} scale={[0.5, 0.5, 0.5]} /> */}
          <ViroImage
            height={1}
            width={1}
            placeholderSource={require("../images/platform.jpg")}
            source={require("../images/platform.jpg")}
            rotation={[-90, 0, 0]}
          />
        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello Mate!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require("../images/target.jpg"),
    orientation: "Up",
    physicalWidth: 0.25 // real world width in meters
  }
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

module.exports = HelloWorldSceneAR;
