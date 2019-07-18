import React, { Component, Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Image,
  Button,
  Linking,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";
import SlowRender from "./SlowRender.js";
export default class PlaceInfo extends Component {
  state = {
    person: ""
  };
  _Open = () => {
    const scheme = "geo:0,0?q=";
    const lat = this.props.info.latitude;
    const lng = this.props.info.longitude;
    const latLng = `${lat},${lng}`;
    const label = `${this.props.info.url}`;
    const url = `${scheme}${latLng}(${label})`;
    Linking.openURL(url);
  };
  addVisitor = placeholder => {
    this.setState({ person: placeholder });
  };
  render() {
    const names = this.props.info.visitorNames;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignContent: "space-around"
        }}
      >
        <SlowRender>
          <View>
            {this.props.info.url === "Piccadilly" && (
              <View>
                <Image
                  source={require("./piccadilly.jpg")}
                  resizeMode="contain"
                  style={{ width: 360, height: 250 }}
                />
                <Text style={{ fontSize: 30 }}>{this.props.info.title}</Text>

                <Text style={{ fontSize: 20 }}>
                  {"\n"}Quite a different affair when compared to the bustling
                  array of bus and tram stops today...{" "}
                </Text>
                <Text>24/2/1951</Text>
              </View>
            )}
            {this.props.info.url === "Strangeways" && (
              <View>
                <Image
                  source={require("./Assize1.jpg")}
                  resizeMode="contain"
                  style={{ width: 360, height: 150 }}
                />
                <Text style={{ fontSize: 30 }}>{this.props.info.title}</Text>

                <Text style={{ fontSize: 20 }}>
                  {"\n"}Assize Courts in the Strangeways district, once the
                  tallest building in Manchester. Destroyed in the Blitz in
                  1940, Strangeways Prison standing in its place.{" "}
                </Text>
                <Text>24/2/1952</Text>
              </View>
            )}
            {this.props.info.url === "hulme" && (
              <View>
                <Image
                  source={require("./hulmefire.jpg")}
                  resizeMode="contain"
                  style={{ width: 360, height: 150 }}
                />
                <Text style={{ fontSize: 30 }}>{this.props.info.title}</Text>

                <Text style={{ fontSize: 20 }}>
                  {"\n"}The scene of Paulden's fire on Cavendish Street in
                  Hulme, Manchester in 1957. Now Opal Halls, student
                  accomodation for MMU{" "}
                </Text>
                <Text>Date Taken: 20/8/1957</Text>
              </View>
            )}
            {this.props.info.url === "victoria" && (
              <View>
                <Image
                  source={require("./victoria.jpg")}
                  resizeMode="contain"
                  style={{ width: 360, height: 250 }}
                />
                <Text style={{ fontSize: 30 }}>{this.props.info.title}</Text>

                <Text style={{ fontSize: 20 }}>
                  {"\n"}Quarter to Nine, feeling fine. Victoria station.
                </Text>
                <Text>Date Taken: 24/2/1949</Text>
              </View>
            )}
            {this.props.info.url === "mancoats" && (
              <View>
                <Image
                  source={require("./mancoats.jpg")}
                  resizeMode="contain"
                  style={{ width: 360, height: 250 }}
                />
                <Text style={{ fontSize: 30 }}>{this.props.info.title}</Text>

                <Text style={{ fontSize: 20 }}>
                  {"\n"}A man, in Manc, wearing a coat, walking in Ancoats..
                  Mancoats! - Jersey Street
                </Text>
                <Text>Date Taken: 20/5/1952</Text>
              </View>
            )}

            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end",
                position: "absolute"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.addVisitor("Placeholder");
                }}
              >
                <Image
                  style={{ width: 70, height: 70 }}
                  source={require("./addVisitor.png")}
                />
              </TouchableOpacity>
              {/* 
                            <Text style={{ textDecorationLine: "underline" }} >
                                {"\n"}{"\n"}{"\n"}
                                Visitor List
                    </Text>
                            <Text>  {"\n"}
                                {names[0]}{"\n"}
                                {names[1]}</Text> */}
            </View>
          </View>
          <View style={styles.visits}>
            <Text
              style={{
                fontWeight: "bold",
                borderBottomWidth: 1,
                borderBottomColor: "black"
              }}
            >
              Visitors
            </Text>
            <Text>
              {names[0]} {"\n"} {names[1]} {"\n"} {this.state.person}{" "}
            </Text>
          </View>
          <View style={styles.navbar}>
            <TouchableNativeFeedback
              onPress={() => {
                this.props.ChangeMapState();
              }}
            >
              <Image
                style={{ width: 70, height: 70 }}
                source={require("./back.png")}
              />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => {
                this.props.ChangeMapState();
              }}
            >
              <Image
                style={{ width: 70, height: 70 }}
                source={require("./camera.png")}
              />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => {
                this._Open();
              }}
            >
              <Image
                style={{ width: 70, height: 70 }}
                source={require("./nav.png")}
              />
            </TouchableNativeFeedback>
          </View>
        </SlowRender>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100
  },
  visits: {
    fontSize: 15,
    marginTop: 400,
    alignItems: "center"
  }
});
