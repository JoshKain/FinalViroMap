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
    position: [0, 0, -1],
    scanMsgVisible: true,
    // scanMsgStyle: styles.scanMsgVisible, // becomes scanMsgHidden
    frameVisible: styles.visible,
    lookUpMsgVisible: styles.visible, // .hidden at start
    welcomeMsgVisible: styles.visible, // .hidden at start
    flashBorderVisible: styles.visible // .hidden at start
  };

  // _anchorFound = () => {
  //   console.warn('* ANCHOR FOUND! *');
  //   this.setState({
  //     scanMsgStyle: styles.scanMsgHidden
  //   });
  // };

  render() {
    const {
      position,
      rotationX,
      rotationY,
      rotationZ,
      opacity,
      size,
      getPosition
    } = this.props.arSceneNavigator.viroAppProps[0];

    const _passDowner = this.props.arSceneNavigator.viroAppProps[2];

    const anchorFound = () => {
      console.warn('* ANCHOR FOUND! *');
      this.setState({
        scanMsgStyle: styles.scanMsgHidden
      });
      _passDowner();
    };

    const onDrag = (draggedToPosition, source) => {
      // console.warn('reaching onDrag in render');

      this.setState(
        {
          position: [
            draggedToPosition[0],
            draggedToPosition[1],
            draggedToPosition[2]
          ]
        },
        () => {
          // console.warn(this.state.position, '< -- this.state.position');
        }
      );
    };

    return (
      <ViroARScene>
        <ViroARImageMarker target={'targetOne'} onAnchorFound={anchorFound}>
          <ViroNode dragType="FixedToWorld">
            <ViroImage
              height={1}
              width={1}
              placeholderSource={require('../images/markerTick.png')}
              source={require('../images/markerTick.png')}
              rotation={[-90, 0, 0]} // ---> working!
              position={[0, 0, 0]} // ---> working!
              ref={this._setARNodeRef.bind(this)}
              scale={[0.2, 0.2, 0.2]}
            />
          </ViroNode>
          <ViroNode dragType="FixedToWorld">
            <ViroImage
              height={1}
              width={1}
              placeholderSource={require('../images/victoria-station-1926.jpg')}
              source={require('../images/victoria-station-1926.jpg')}
              rotation={[rotationX, rotationY, rotationZ]}
              // position ---> default [0,1,0]
              position={[-1, 1, 0]} // ABOVE KEYBOARD
              // position={[-0.049, 1.145, -0.177]} // ON SHELF
              scale={[size, size, size]}
              // rotation={[348, 0, 0]}
              // position={[1.881, 0.276, -1.766]}
              // scale={[0.48, 0.48, 0.48]}
              ref={this._setARNodeRef.bind(this)}
              opacity={opacity}
              onDrag={onDrag}
            />
          </ViroNode>
        </ViroARImageMarker>

        {/* <ViroARImageMarker target={'targetTwo'} onAnchorFound={this._send2}>
          <ViroNode>
            <ViroImage
              height={1}
              width={1}
              placeholderSource={require('../images/blue-two.jpg')}
              source={require('../images/blue-two.jpg')}
              rotation={[-90, 0, 0]} // ---> working!
              position={[0, 0, 0]} // ---> working!
              ref={this._setARNodeRef.bind(this)}
              scale={[0.2, 0.2, 0.2]}
            />
          </ViroNode>
        </ViroARImageMarker> */}
      </ViroARScene>
    );
  }

  _sendUpCorrectPositioning(coords3d) {}

  _setARNodeRef(component) {
    this.arNodeRef = component;
  }

  componentDidUpdate() {
    const sendPositionUp = this.props.arSceneNavigator.viroAppProps[1];
    sendPositionUp(this.state.position);
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
  // hidden: {
  //   display: 'none'
  // },
  // visible: {
  //   backgroundColor: 'transparent',
  //   opacity: 1
  // },

  // scanMsgVisible: {
  //   // position: 'absolute',
  //   color: '#FFFFFF',
  //   flex: 1,
  //   textAlignVertical: 'center',
  //   textAlign: 'center',
  //   fontWeight: 'bold'
  // }
  // scanMsgHidden: {
  //   position: 'absolute',
  //   color: '#FFFFFF',
  //   flex: 1,
  //   textAlignVertical: 'center',
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   display: 'none'
  // }
});

module.exports = HelloWorldSceneAR;
