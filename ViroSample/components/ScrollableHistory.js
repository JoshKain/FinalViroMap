import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Right,
  Icon,
  Title,
  Card,
  View,
  CardItem,
  List,
  Content
} from "native-base";

import MapPage from "./Map";

import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  TouchableHighlight
} from "react-native";
import { Text, AppState } from "react-native";

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
  }
});

export default class Homepage extends Component {
  state = {
    map: false,
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0
  };

  // componentDidMount() {
  //   const arrayOfObjects = [];
  //   db.collection("locations")
  //     .get()
  //     .then(snapshot => {
  //       snapshot.forEach(doc => {
  //         arrayOfObjects.push(doc.data());
  //       });
  //       this.setState({ locations: arrayOfObjects });
  //     });
  // }

  handleCard = event => {
    console.warn("hellop");
    this.setState({
      mapView: true,
      latitude: 53.481,
      longitude: -2.2369,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03
    });
  };

  render() {
    if (!this.state.mapView) {
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Button transparent>
            <Icon name="search" />
          </Button>
          <Button transparent style={styles.rightIcon}>
            <Icon name="menu" />
          </Button>

          <Card style={styles.card}>
            <ImageBackground
              source={require("../expo-sample/Assize.jpg")}
              style={{ width: 400, height: 200 }}
            >
              <Text onPress={this.handleCard} style={styles.title}>
                Manchester Assize Courts
              </Text>
              {/* <Text style={styles.text}>
              The Manchester Assize Courts were law courts on Great Ducie Street
              in the Strangeways district of Manchester, England. It was 279 ft
              (85 m) tall and from 1864 to 1877 the tallest building in
              Manchester. Widely admired,[1] it has been referred to as one of
              Britain's 'lost buildings'.{" "}
            </Text> */}
            </ImageBackground>
          </Card>

          <Card>
            <ImageBackground
              source={require("../expo-sample/victoria.jpg")}
              style={{ width: 400, height: 200 }}
            >
              <Text style={styles.title}>Victoria Station</Text>
              {/* <Text style={styles.text}>
            The Manchester and Le eds Railway (M&LR) was founded in 1836 and the
            company began building its line between Manchester and Leeds in
            1837. Originally its line terminated at Manchester Oldham Road which
            opened on 3 July 1839. The company realised it would be advantageous
            to join its line to the Liverpool and Manchester Railway (L&MR)
            creating a through route from Liverpool to Yorkshire with a joint
            station serving the centre of Manchester.{" "} */}
              {/* </Text> */}
            </ImageBackground>
          </Card>

          <Card>
            <ImageBackground
              source={require("../expo-sample/hulmefire.jpg")}
              style={{ width: 400, height: 200 }}
            >
              <Text style={styles.title}>Opal Halls MMU</Text>
              {/* <Text style={styles.text}>
            MMU halls are now build on the site after a serious fire took place
            causing the building to dramatically collapse.{" "}
          </Text> */}
            </ImageBackground>
          </Card>

          <Card>
            <ImageBackground
              source={require("../expo-sample/piccadilly.jpg")}
              style={{ width: 400, height: 200 }}
            >
              <Text style={styles.title}>Picadilly Gardens</Text>
              {/* <Text style={styles.text}>
            Before 1755: The area was occupied by water-filled clay pits called
            the Daub Holes. The Lord of the Manor donated the site and the pits
            were replaced by a fine ornamental pond. 1914: After several years
            in which the Manchester Corporation tried to decide how to develop
            the site, it was left and made into the largest open green space in
            the city centre. The Manchester Public Free Library Reference
            Department was housed on the site for a number of years before the
            move to Manchester Central Library. The sunken garden was a remnant
            of the hospital's basement.{" "}
          </Text> */}
            </ImageBackground>
          </Card>
        </ScrollView>
      );
    } else {
      return (
        <MapPage
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          longitudeDelta={this.state.longitudeDelta}
          latitudeDelta={this.state.latitudeDelta}
        />
      );
    }
  }
}
