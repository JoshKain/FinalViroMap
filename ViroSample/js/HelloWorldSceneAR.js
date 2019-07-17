'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Button, Text } from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroImage,
  ViroARPlaneSelector,
  ViroNode
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {
  // Set initial state here
  state = {
    text: 'Initial...',
    scale: [2.5, 2.5, 2.5],
    position: []
  };

  render() {
    return (
      <ViroARScene>
        <ViroText
          text={this.state.text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
        />
        <ViroARImageMarker target={'targetOne'}>
          <ViroNode>
            <ViroImage
              height={1}
              width={1}
              placeholderSource={require('../images/red-one.jpg')}
              source={require('../images/red-one.jpg')}
              rotation={[-90, 0, 0]} // ---> working!
              position={[0, 0, 0]} // ---> working!
              // rotation={[-70, 0, 0]}
              // position={[0, 0, 0]}
              ref={this._setARNodeRef.bind(this)}
              scale={[0.2, 0.2, 0.2]}
            />
          </ViroNode>
          <ViroNode
            dragType="FixedToWorld"
            onDrag={this._onDrag.bind(this)}
            onClick={this._onClick.bind(this)}
            onPinch={this._onPinch.bind(this)}
            scale={[0.6, 0.6, 0.6]}
          >
            <ViroImage
              height={1}
              width={1}
              placeholderSource={require('../images/victoria-station-1926.jpg')}
              source={require('../images/victoria-station-1926.jpg')}
              rotation={[-10, 0, 15]} // ---> working!
              position={[0, 2, 0]} // ---> working!
              // rotation={[-70, 0, 0]}
              // position={[0, 0, 0]}
              ref={this._setARNodeRef.bind(this)}
              scale={[1, 1, 1]}
            />
          </ViroNode>
        </ViroARImageMarker>
        {/* 
        <ViroARImageMarker target={'targetTwo'}>
          <ViroNode
            dragType="FixedToWorld"
            onPinch={this._onPinch.bind(this)}
            scale={[0.6, 0.6, 0.6]}
          >
            <ViroImage
              height={1}
              width={1}
              placeholderSource={require('../images/blue-two.jpg')}
              source={require('../images/blue-two.jpg')}
              rotation={[-10, 0, 0]} // ---> working!
              position={[0, 2, 0]} // ---> working!
              // rotation={[-70, 0, 0]}
              // position={[0, 0, 0]}
              ref={this._setARNodeRef.bind(this)}
              scale={[0.2, 0.2, 0.2]}
            />
          </ViroNode>
        </ViroARImageMarker> */}
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: 'Hello Mate!'
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  _setARNodeRef(component) {
    this.arNodeRef = component;
  }

  _onDrag(draggedToPosition, source) {
    this.setState({
      position: [
        draggedToPosition[0],
        draggedToPosition[1],
        draggedToPosition[2]
      ]
    });
  }

  _onClick() {
    console.warn(this.props, '<------ this.props down here!!');
    console.warn(this.state.position);
    console.warn('the position', this.state.position);
  }

  _onPinch(pinchState, scaleFactor, source) {
    let newScale = this.state.scale.map(vector => {
      return vector * scaleFactor;
    });

    if (pinchState == 3) {
      this.setState({
        scale: newScale
        // text: '!!!'
        // scale: [2.5, 2.5, 2.5]
      });
      // update scale of obj by multiplying by scaleFactor  when pinch ends.
      return;
    }

    this.arNodeRef.setNativeProps({ scale: newScale });
    //set scale using native props to reflect pinch.
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.warn('HelloWorldSceneAR.js UPDATING!');
    console.warn(prevProps, ' ***');
  }
}

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require('../images/rs1.png'),
    orientation: 'Up',
    physicalWidth: 0.148 // real world width in meters // A5 = 0.148, A6 = 0.105
  },
  targetTwo: {
    source: require('../images/rs2.png'),
    orientation: 'Up',
    physicalWidth: 0.148 // real world width in meters // A5 = 0.148, A6 = 0.105
  }
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});

module.exports = HelloWorldSceneAR;
