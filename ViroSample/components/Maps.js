import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import React, { Component, Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  Vibration,
  Image,
  Linking,
  TouchableOpacity
} from "react-native";
import PlaceInfo from "./PlaceInfo";
import Home from "./Home";

export default class Maps extends Component {
  state = {
    color: "#FF0000",
    placeInfo: "",
    err: "",
    isPopupTrue: true,
    isMapReady: false,
    longitude: "",
    latitude: "",
    latitudeDelta: "",
    longitudeDelta: "",
    home: false
  };

  handlePress = () => {
    // this.props.addNinja();
    this.setState({
      color: "#959595"
    });
  };
  backhome2 = event => {
    this.setState({ home: true });
  };
  resetState = event => {
    this.setState({ home: false });
  };

  onDoublePress = place => {
    if (this.state.placeInfo.title !== place.title) {
      this.setState({ placeInfo: place });
    }
    const time = new Date().getTime();
    const delta = time - this.lastPress;
    const DOUBLE_PRESS_DELAY = 1000;
    if (delta < DOUBLE_PRESS_DELAY) {
      const scheme = "geo:0,0?q=";
      const lat = this.state.placeInfo.latitude;
      const lng = this.state.placeInfo.longitude;
      const latLng = `${lat},${lng}`;
      const label = `${this.state.placeInfo.url}`;
      const url = `${scheme}${latLng}(${label})`;
      Linking.openURL(url);
    }
    this.lastPress = time;
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isMapReady: true });
    }, 5 * 250);

    Vibration.vibrate();
    if (this.props.place) {
      this.setState({
        latitude: this.props.place.latitude,
        longitude: this.props.place.longitude,
        longitudeDelta: this.props.place.longitudeDelta,
        latitudeDelta: this.props.place.latitudeDelta
      });
    }
    if (!this.props.place) {
      Geolocation.getCurrentPosition(info => {
        this.setState({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03
        });
      });
    }
  }

  markerClick = placeInfo => {
    setTimeout(() => {
      this.setState({ placeInfo: placeInfo });
    }, 5 * 100);

    this.setState({ isPopupTrue: false });
  };

  ChangeMapState = () => {
    this.setState({ isPopupTrue: true });
  };

  // onMapLayout = () => {
  //   this.setState({ isMapReady: true });
  // };

  render() {
    const piccadilly = {
      latitude: 53.481,
      longitude: -2.2369,
      title: "Piccadilly Gardens, 1952",
      description: "Piccadilly Gardens",
      visitors: 12,
      url: "Piccadilly",
      visitorNames: ["Keanu Reeves", "Barry Scott"]
    };

    const hmp = {
      latitude: 53.49175,
      longitude: -2.24567,
      title: "Strangeways Prison",
      description: "Assize Courts",
      url: "Strangeways",
      visitors: 5,
      visitorNames: ["Keanu Reeves", "Barry Scott"]
    };
    const hulme = {
      latitude: 53.469053,
      longitude: -2.240609,
      title: "Pauldens Fire, Cavendish Street",
      description: "Paulden's Fire",
      url: "hulme",
      visitors: 5,
      visitorNames: ["Keanu Reeves", "Barry Scott"]
    };
    const victoria = {
      latitude: 53.487539,
      longitude: -2.242396,
      title: "Victoria Station",
      description: "quarter to nine - feeling fine",
      url: "victoria",
      visitors: 5,
      visitorNames: ["Keanu Reeves", "Barry Scott"]
    };

    const mancoats = {
      latitude: 53.484952,
      longitude: -2.225563,
      title: "Man in Ancoats",
      description: "Man/c + coat in Ancoats = Mancoats",
      url: "mancoats",
      visitors: 7,
      visitorNames: ["Keanu Reeves", "Barry Scott"]
    };
    return (
      <Fragment>
        {this.state.home && (
          <View>
            <Home
              resetState={this.resetState}
              _getExperienceButtonOnPress={
                this.props._getExperienceButtonOnPress
              }
              _getMapWithCoords={this.props._getMapWithCoords}
            />
          </View>
        )}
        {this.state.isPopupTrue && (
          <MapView
            provider={"google"}
            followsUserLocation={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            toolbarEnabled={true}
            zoomEnabled={true}
            rotateEnabled={true}
            // onMapReady={() => { this.ChangeMapState() }}
            style={{ flex: 1 }}
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: this.state.latitudeDelta,
              longitudeDelta: this.state.longitudeDelta
            }}
          >
            {this.state.isMapReady && (
              <View>
                <MapView.Marker
                  coordinate={piccadilly}
                  title={piccadilly.title}
                  description={piccadilly.description}
                  onPress={() => this.onDoublePress(piccadilly)}
                >
                  <Image
                    resizeMode="contain"
                    style={{ width: 50, height: 50, borderRadius: 70 }}
                    source={require("./piccadilly.jpg")}
                  />
                  <MapView.Callout onPress={() => this.markerClick(piccadilly)}>
                    <View />
                  </MapView.Callout>
                </MapView.Marker>

                <MapView.Marker
                  onPress={() => this.onDoublePress(hmp)}
                  coordinate={hmp}
                  title={hmp.title}
                  description={hmp.description}
                >
                  <Image
                    resizeMode="contain"
                    style={{ width: 50, height: 50, borderRadius: 70 }}
                    source={require("./Assize1.jpg")}
                  />
                  <MapView.Callout onPress={() => this.markerClick(hmp)}>
                    <View />
                  </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                  onPress={() => this.onDoublePress(hulme)}
                  coordinate={hulme}
                  title={hulme.title}
                  description={hulme.description}
                >
                  <Image
                    resizeMode="contain"
                    style={{ width: 50, height: 50, borderRadius: 70 }}
                    source={require("./hulmefire.jpg")}
                  />
                  <MapView.Callout onPress={() => this.markerClick(hulme)}>
                    <View />
                  </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                  onPress={() => this.onDoublePress(victoria)}
                  coordinate={victoria}
                  title={victoria.title}
                  description={victoria.description}
                >
                  <Image
                    resizeMode="contain"
                    style={{ width: 50, height: 50, borderRadius: 70 }}
                    source={require("./victoria.jpg")}
                  />
                  <MapView.Callout onPress={() => this.markerClick(victoria)}>
                    <View />
                  </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                  onPress={() => this.onDoublePress(mancoats)}
                  coordinate={mancoats}
                  title={mancoats.title}
                  description={mancoats.description}
                >
                  <Image
                    resizeMode="contain"
                    style={{ width: 50, height: 50, borderRadius: 70 }}
                    source={require("./mancoats.jpg")}
                  />
                  <MapView.Callout onPress={() => this.markerClick(mancoats)}>
                    <View />
                  </MapView.Callout>
                </MapView.Marker>
              </View>
            )}
          </MapView>
        )}
        {this.state.isPopupTrue && (
          <TouchableOpacity
            style={styles.buttonstyle}
            // onPress={this.handlePress}
            onPress={this.backhome2}
            accessibilityLabel="Navigate back a page"
          >
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
        )}
        {!this.state.isPopupTrue && (
          <View>
            <PlaceInfo
              resetState={this.resetState}
              info={this.state.placeInfo}
              ChangeMapState={this.ChangeMapState}
              _getExperienceButtonOnPress={
                this.props._getExperienceButtonOnPress
              }
              _getMapWithCoords={this.props._getMapWithCoords}
            />
          </View>
        )}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white"
  },

  map: {
    flex: 0.5,
    alignItems: "center"
  },
  mapView: {
    ...StyleSheet.absoluteFillObject
  },
  buttonstyle: {
    paddingTop: 8,
    paddingBottom: 8,

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
