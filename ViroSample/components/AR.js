import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroImage,
  ViroARPlaneSelector,
  ViroNode,
  ViroARSceneNavigator
} from 'react-viro';

import Slider from '@react-native-community/slider';

var InitialARScene = require('../js/HelloWorldSceneAR');

var sharedProps = {
  apiKey: '2DF60EAD-EC00-4D0A-83DA-96E20F6E3352'
};

export default class AR extends Component {
  state = {
    rotationX: 10,
    rotationY: 0,
    rotationZ: 0,
    sharedProps: sharedProps
  };

  render() {
    return (
      <>
        <View>
          <Button
            // onPress={this.handlePress}
            onPress={() => {
              console.warn(this.props, ' < BUTTON PRESSED!');
            }}
            title="Back"
            color={this.state.color}
            accessibilityLabel="Navigate back a page"
          />
          <Text>X</Text>
          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={0}
            maximumValue={360}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            step={1}
            onValueChange={value => {
              this.setState(
                {
                  rotationX: value
                },
                () => {
                  console.warn(this.state, '<--- this.state in AR.js');
                }
              );
            }}
          />
        </View>
        <ViroARSceneNavigator
          {...this.state.sharedProps}
          rotationX={this.state.rotationX}
          // rotation={this.state.rotation}
          initialScene={{ scene: InitialARScene }} // <--- i'm passing this.state.rotationX into ViroARSceneNavigator as props, but it needs to get into InitalARScene!!! Try logging props down in HelloWorldScene when you tap on?
        />
      </>
    );
  }
}
