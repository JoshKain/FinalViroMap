import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
// const { sillyFunction } = require('./sillyFunction.js');

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
import { throwStatement } from '@babel/types';

var InitialARScene = require('../js/HelloWorldSceneAR');

var sharedProps = {
  apiKey: '2DF60EAD-EC00-4D0A-83DA-96E20F6E3352'
};

let posHolder;

const sillyFunction = newPosition => {
  // return newPosition
  // console.warn(newPosition, '<--- outside compnent');
  // posHolder = newPosition;
};

export default class AR extends Component {
  state = {
    sharedProps: sharedProps,
    showMessages: true,
    showButtons: true,
    messageText: 'Locate the marker and scan to time-travel...',
    viewDisplay: styles.flex,
    position: [], // default empty array
    viroAppProps: {
      // default
      // rotationX: 0,
      // rotationY: 0,
      // rotationZ: 0,
      // opacity: 1,
      // size: 0.5

      // AKB
      rotationX: 0,
      rotationY: 86,
      rotationZ: 0,
      opacity: 1,
      size: 0.48

      // ONS
      // rotationX: 0,
      // rotationY: 0,
      // rotationZ: 6,
      // opacity: 1,
      // size: 0.27

      // getPosition: function(newPosition) {
      //   // this.sillyFunction(newPosition);
      //   console.warn('getPosition fires!');
      //   sillyFunction(newPosition);
      //   // console.warn(newPosition, ' <-- getPosition up in AR.js! Xssssss');
      // }
    },
    orientateStyle: styles.hidden
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
    // console.warn(this.state.viroAppProps, '< = = = = =');
    const { getExperienceButtonOnPress } = this.props;
    const { position } = this.state;
    const {
      rotationX,
      rotationY,
      rotationZ,
      opacity,
      size
    } = this.state.viroAppProps;

    const logImageState = () => {
      this.state.viroAppProps.getFunction();
    };

    const getPosition = newPosition => {
      if (newPosition !== this.state.position) {
        this.setState({
          position: newPosition
        });
      }
    };

    const getCoords3d = coords3d => {
      // set state
      console.warn('coords3d in AR.js -> ', coords3d);
    };

    return (
      <>
        <View style={this.state.orientateStyle}>
          <Text
            style={{ fontSize: 8, textAlign: 'center', fontWeight: 'bold' }}
          >
            SIZE
          </Text>
          <Slider
            style={{ width: '100%', height: 20 }}
            minimumValue={0}
            maximumValue={5}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            step={0.01}
            onValueChange={value => {
              this.setState(prevState => {
                return {
                  viroAppProps: {
                    ...prevState.viroAppProps,
                    size: value
                  }
                };
              });
            }}
          />
          <Text
            style={{ fontSize: 8, textAlign: 'center', fontWeight: 'bold' }}
          >
            X
          </Text>
          <Slider
            trackImage={require('../images/clockbutton.png')}
            style={{ width: '100%', height: 20 }}
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
          <Text
            style={{ fontSize: 8, textAlign: 'center', fontWeight: 'bold' }}
          >
            Y
          </Text>
          <Slider
            style={{ width: '100%', height: 20 }}
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
          <Text
            style={{ fontSize: 8, textAlign: 'center', fontWeight: 'bold' }}
          >
            Z
          </Text>
          <Slider
            style={{ width: '100%', height: 20 }}
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
          <Text
            style={{
              fontSize: 8,
              textAlign: 'center',
              fontWeight: 'bold',
              fontWeight: 'bold'
            }}
          >
            OPACITY
          </Text>
          <Slider
            style={{ width: '100%', height: 20 }}
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
        <View style={styles.flex}>
          <ViroARSceneNavigator
            style={styles.arView}
            {...this.state.sharedProps}
            initialScene={{ scene: InitialARScene }} // <--- i'm passing this.state.rotationX into ViroARSceneNavigator as props, but it needs to get into InitalARScene!!! Try logging props down in HelloWorldScene when you tap on?
            viroAppProps={[
              this.state.viroAppProps,
              getPosition,
              this._passDowner
            ]}
            // CANNOT pass down a function as a seperate prop here, underneath viroAppProps
          />

          {this._renderMessages()}
          {this._renderButtons()}
        </View>
      </>
    );
  }

  _passDowner = () => {
    this.setState({
      // showMessages: false
      messageText: 'Time traveller - look up...'
    });

    setTimeout(() => {
      this.setState({
        showMessages: false
      });
    }, 3000);
  };

  _renderButtons() {
    const { position } = this.state;
    const {
      rotationX,
      rotationY,
      rotationZ,
      opacity,
      size
    } = this.state.viroAppProps;

    if (this.state.showButtons == true) {
      var buttonsView = [];
      buttonsView.push(
        <View key="buttonsBar" style={styles.buttonsBar}>
          <TouchableOpacity
            onPress={() => {
              this.props.getExperienceButtonOnPress();
            }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require('../images/backwhite.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.toggleSliders();
            }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require('../images/3dalignbutton.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.warn({
                position: position,
                rotationX: rotationX,
                rotationY: rotationY,
                rotationZ: rotationZ,
                opacity: opacity,
                size: size
              });
            }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require('../images/logbutton.png')}
            />
          </TouchableOpacity>
        </View>
      );
      return buttonsView;
    }
    return null;
  }

  _renderMessages() {
    if (this.state.showMessages == true) {
      var messagesViews = [];
      messagesViews.push(
        <View key="topMessagesBar" style={styles.topMessagesBar}>
          <View
            style={{
              flex: 1,
              // backgroundColor: '#FFFFFF',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          />
          <Text style={styles.messagesText}>{this.state.messageText}</Text>
        </View>
      );
      return messagesViews;
    }
    return null;
  }

  componentDidUpdate() {
    // console.warn('componentDidUpdate in AR.js!!');
    // setState causes an infinite loop.
    // if (this.state.position !== posHolder) {
    //   this.setState(
    //     {
    //       position: posHolder
    //     },
    //     () => {
    //       console.warn('setting state!');
    //     }
    //   );
    // }
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  arView: {
    flex: 1
  },
  hidden: {
    display: 'none'
  },
  visible: {
    backgroundColor: 'transparent',
    opacity: 1
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 15
    // lineHeight: 18
  },
  buttons: {
    height: 50,
    width: 50,
    // paddingTop: 20,
    // paddingBottom: 20,
    // marginTop: 10,
    // marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 100 / 2,
    borderWidth: 1,
    borderColor: '#000000'
  },
  // messageView: {
  //   display: 'flex',
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  topMessagesBar: {
    backgroundColor: '#FFFFFFaa',
    height: '10%',
    width: '75%',
    position: 'absolute',
    margin: '12%',
    top: '75%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  buttonsBar: {
    height: '10%',
    width: '100%',
    position: 'absolute',
    top: '0%',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2.5%'
  },
  messagesText: {
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Helvetica Neue',
    fontSize: 18,
    backgroundColor: '#00000000',
    flex: 1,
    position: 'absolute'
  }
});
