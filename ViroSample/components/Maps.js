import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'
import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, Vibration, Image, Linking } from 'react-native';
import PlaceInfo from './PlaceInfo';


export default class Maps extends Component {
  state = {
    color: '#FF0000',
    placeInfo: '',
    err: '',
    isPopupTrue: true
  };

  handlePress = () => {
    // this.props.addNinja();
    this.setState({
      color: '#959595'
    });
  };

  onDoublePress = (place) => {
    if (this.state.placeInfo.title !== place.title) {
      this.setState({ placeInfo: place })
    }
    const time = new Date().getTime();
    const delta = time - this.lastPress;
    const DOUBLE_PRESS_DELAY = 1000
    if (delta < DOUBLE_PRESS_DELAY) {
      const scheme = 'geo:0,0?q='
      const lat = this.state.placeInfo.latitude;
      const lng = this.state.placeInfo.longitude;
      const latLng = `${lat},${lng}`;
      const label = `${this.state.placeInfo.url}`
      const url = `${scheme}${latLng}(${label})`
      Linking.openURL(url);
    }
    this.lastPress = time;
  }


  componentDidMount() {


    Vibration.vibrate();
    Geolocation.getCurrentPosition((info) => {
      this.setState({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,

      });
    });



    setTimeout(() => {

    }, 5 * 1000)

  }

  markerClick = (placeInfo) => {

    setTimeout(() => {
      this.setState({ placeInfo: placeInfo })
    }, 5 * 100)

    this.setState({ isPopupTrue: false })
  }

  ChangeMapState = () => {
    this.setState({ isPopupTrue: true })
  }



  render() {

    const piccadilly = {
      latitude: 53.4810, longitude: -2.2369, title: "Piccadilly Gardens, 1952", description: "Piccadilly Gardens", visitors: 12, url: 'Piccadilly', visitorNames: ['Sandy', 'Brandy', 'Mandy']
    }

    const hmp = {
      latitude: 53.49175, longitude: -2.24567, title: "Strangeways Prison", description: "Assize Courts", url: 'Strangeways', visitors: 5
    }
    const hulme = {
      latitude: 53.469053, longitude: -2.240609, title: "Pauldens Fire, Cavendish Street", description: "Paulden's Fire", url: 'hulme', visitors: 5
    }
    const victoria = {
      latitude: 53.487539, longitude: -2.242396, title: "Victoria Station", description: "quarter to nine - feeling fine", url: 'victoria', visitors: 5
    }

    const mancoats = {
      latitude: 53.484952, longitude: -2.225563, title: "Man in Ancoats", description: "Man/c + coat in Ancoats = Mancoats", url: 'mancoats', visitors: 7
    }
    return (

      <Fragment>

        {this.state.isPopupTrue &&

          <MapView

            provider={"google"}
            followsUserLocation={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            toolbarEnabled={true}
            zoomEnabled={true}
            rotateEnabled={true}
            style={{ flex: 0.7 }}
            region={{
              latitude: 53.480759,
              longitude: -2.242631,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          >
            <MapView.Marker coordinate={piccadilly} title={piccadilly.title} description={piccadilly.description} onPress={() => this.onDoublePress(piccadilly)}><Image resizeMode="contain" style={{ width: 50, height: 50, borderRadius: 70 }} source={require('./piccadilly.jpg')} />
              <MapView.Callout onPress={() => this.markerClick(piccadilly)} >
                <View>

                </View>
              </MapView.Callout >
            </MapView.Marker>
            <MapView.Marker onPress={() => this.onDoublePress(hmp)} coordinate={hmp} title={hmp.title} description={hmp.description}><Image resizeMode="contain" style={{ width: 50, height: 50, borderRadius: 70 }} source={require('./Assize1.jpg')} />
              <MapView.Callout onPress={() => this.markerClick(hmp)} >
                <View>

                </View>
              </MapView.Callout >
            </MapView.Marker>
            <MapView.Marker onPress={() => this.onDoublePress(hulme)} coordinate={hulme} title={hulme.title} description={hulme.description}><Image resizeMode="contain" style={{ width: 50, height: 50, borderRadius: 70 }} source={require('./hulmefire.jpg')} />
              <MapView.Callout onPress={() => this.markerClick(hulme)} >
                <View>

                </View>
              </MapView.Callout >
            </MapView.Marker>
            <MapView.Marker onPress={() => this.onDoublePress(victoria)} coordinate={victoria} title={victoria.title} description={victoria.description}><Image resizeMode="contain" style={{ width: 50, height: 50, borderRadius: 70 }} source={require('./victoria.jpg')} />
              <MapView.Callout onPress={() => this.markerClick(victoria)} >
                <View>

                </View>
              </MapView.Callout >
            </MapView.Marker>
            <MapView.Marker onPress={() => this.onDoublePress(mancoats)} coordinate={mancoats} title={mancoats.title} description={mancoats.description}><Image resizeMode="contain" style={{ width: 50, height: 50, borderRadius: 70 }} source={require('./mancoats.jpg')} />
              <MapView.Callout onPress={() => this.markerClick(mancoats)} >
                <View>

                </View>
              </MapView.Callout >
            </MapView.Marker>

          </MapView>


        }
        {this.state.isPopupTrue && <View>
          <Text>{this.state.latitude} {this.state.longitude}</Text>
        </View>
        }

        <Button
          // onPress={this.handlePress}
          onPress={this.props.getExperienceButtonOnPress}
          title="home"
          color={this.state.color}
          accessibilityLabel="Navigate back a page"
        />
        {!this.state.isPopupTrue &&
          <View>
            <PlaceInfo info={this.state.placeInfo} ChangeMapState={this.ChangeMapState} />

          </View>
        }




      </Fragment>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  map: {
    flex: 0.5,
    alignItems: 'center'
  },
  mapView: {
    ...StyleSheet.absoluteFillObject
  }
});



