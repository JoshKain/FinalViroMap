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
    sharedProps: sharedProps,
    viroAppProps: { rotationX: 0, rotationY: 0, rotationZ: 0, opacity: 1 },
    orientateStyle: styles.visible
  };

  toggleSliders() {
    if (this.state.orientateStyle === styles.visible) {
      this.setState({
        orientateStyle: styles.hidden
      });
    } else {
      this.setState({
        orientateStyle: styles.visible
      });
    }
  }

  render() {
    const { getExperienceButtonOnPress } = this.props;
    const { rotationX } = this.state;
    return (
      <>
        <View>
          <Button
            onPress={() => {
              getExperienceButtonOnPress();
            }}
            title="Back"
            color={this.state.color}
            accessibilityLabel="Navigate back a page"
          />
          <Button
            onPress={() => {
              this.toggleSliders();
            }}
            title="Orientate"
            color={'goldenrod'}
            accessibilityLabel="Adjust the historical image orientation"
          />
          {/* <Button
            onPress={() => {
              this.toggleSliders();
            }}
            title="Log"
            color={'darkred'}
            accessibilityLabel="Adjust the historical image orientation"
          /> */}
          <View style={this.state.orientateStyle}>
            <Text>X</Text>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={0}
              maximumValue={360}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              step={1}
              onValueChange={value => {
                this.setState(prevState => {
                  return {
                    viroAppProps: {
                      ...prevState.viroAppProps,
                      rotationX: value
                    }
                  };
                });
              }}
            />
            <Text>Y</Text>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={0}
              maximumValue={360}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              step={1}
              onValueChange={value => {
                this.setState(prevState => {
                  return {
                    viroAppProps: {
                      ...prevState.viroAppProps,
                      rotationY: value
                    }
                  };
                });
              }}
            />
            <Text>Z</Text>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={0}
              maximumValue={360}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              step={1}
              onValueChange={value => {
                this.setState(prevState => {
                  return {
                    viroAppProps: {
                      ...prevState.viroAppProps,
                      rotationZ: value
                    }
                  };
                });
              }}
            />
            <Text>Opacity</Text>
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              step={0.01}
              onValueChange={value => {
                this.setState(prevState => {
                  return {
                    viroAppProps: {
                      ...prevState.viroAppProps,
                      opacity: value
                    }
                  };
                });
              }}
            />
          </View>
        </View>
        <ViroARSceneNavigator
          {...this.state.sharedProps}
          initialScene={{ scene: InitialARScene }} // <--- i'm passing this.state.rotationX into ViroARSceneNavigator as props, but it needs to get into InitalARScene!!! Try logging props down in HelloWorldScene when you tap on?
          viroAppProps={this.state.viroAppProps}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  hidden: {
    display: 'none'
  },
  visible: {
    backgroundColor: 'white'
  }
});
