import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ScrollView
} from "react-native";

import React, { Component } from "react";

export default class Hello extends Component {
  state = {
    count: 0
  };

  render() {
    let inputStyle = { color: "#FFF" };
    if (this.state.count === 1) {
      this.state.count;
    }
    const onPress = () => {
      this.setState(prevState => ({
        count: 1
      }));
    };

    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>The History of Manchester! </Text>
          </View>
          <View>
            <Text style={styles.text}>
              Before the Industrial Revolution took hold in Britain Manchester
              was nothing more than a market town, but has since has since
              become one the UK’s leading and most innovative cities. It all
              began with the importation of cotton which was brought to
              Manchester from Liverpool via the Mersey and Irwell Navigation.
              This transformed the textile industry as well as Manchester.
            </Text>
          </View>
          <Image
            source={require("../components/victoria.jpg")}
            style={{ width: 400, height: 200 }}
          />
          <Text style={styles.title}>Victoria Station</Text>
          <Text style={styles.text}>
            The Manchester and Leeds Railway (M&LR) was founded in 1836 and the
            company began building its line between Manchester and Leeds in
            1837. Originally its line terminated at Manchester Oldham Road which
            opened on 3 July 1839. The company realised it would be advantageous
            to join its line to the Liverpool and Manchester Railway (L&MR)
            creating a through route from Liverpool to Yorkshire with a joint
            station serving the centre of Manchester.{" "}
          </Text>
          <Button
            title="View on Map"
            color="gray"
            accessibilityLabel="see location on the map"
          />
          <Image
            source={require("../components/piccadilly.jpg")}
            style={{ width: 400, height: 200 }}
          />
          <Text style={styles.title}>Picadilly Gardens</Text>
          <Text style={styles.text}>
            Before 1755: The area was occupied by water-filled clay pits called
            the Daub Holes. The Lord of the Manor donated the site and the pits
            were replaced by a fine ornamental pond. 1914: After several years
            in which the Manchester Corporation tried to decide how to develop
            the site, it was left and made into the largest open green space in
            the city centre. The Manchester Public Free Library Reference
            Department was housed on the site for a number of years before the
            move to Manchester Central Library. The sunken garden was a remnant
            of the hospital's basement.{" "}
          </Text>
          <Button
            title="View on Map"
            color="gray"
            accessibilityLabel="see location on the map"
          />
          <Image
            source={require("../components/Assize.jpg")}
            style={{ width: 400, height: 200 }}
          />
          <Text style={styles.title}>Manchester Assize Courts</Text>
          <Text style={styles.text}>
            The Manchester Assize Courts were law courts on Great Ducie Street
            in the Strangeways district of Manchester, England. It was 279 ft
            (85 m) tall and from 1864 to 1877 the tallest building in
            Manchester. Widely admired,[1] it has been referred to as one of
            Britain's 'lost buildings'.{" "}
          </Text>
          <Button
            title="View on Map"
            color="gray"
            accessibilityLabel="see location on the map"
          />
          <Image
            source={require("../components/hulmefire.jpg")}
            style={{ width: 400, height: 200 }}
          />
          <Text style={styles.title}>Opal Halls MMU</Text>
          <Text style={styles.text}>
            MMU halls are now build on the site after a serious fire took place
            causing the building to dramatically collapse.{" "}
          </Text>
          <Button
            title="View on Map"
            color="gray"
            accessibilityLabel="see location on the map"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    borderTopWidth: 40,
    borderBottomWidth: 60,
    backgroundColor: "white",
    borderColor: "white"
  },
  title: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "white",
    margin: 10,
    padding: 5
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
    backgroundColor: "white",
    margin: 10,
    padding: 5
  }
});
