import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  Image
} from "react-native";
import myData from "./database.json";
import Home from "./Home";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    renderMap: false,
    correctInput: true,
    hidden: true,
    home: false
  };
  handleSubmit = () => {
    this.props.changeStateBool(true);
  };
  handleLogin = value => {
    const user = myData["users"];
    const usernames = user.map(usernameObj => {
      return usernameObj.username;
    });
    const passwords = user.map(usernameObj => {
      return usernameObj.password;
    });
    if (
      usernames.includes(value.username) &&
      passwords.includes(value.password)
    ) {
      this.setState({ home: true });
    } else {
      this.setState({ correctInput: false });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.home && (
          <View>
            <Home
              _getExperienceButtonOnPress={
                this.props._getExperienceButtonOnPress
              }
              _getMapWithCoords={this.props._getMapWithCoords}
            />
          </View>
        )}
        {!this.state.home && (
          <ImageBackground
            source={require("./background.png")}
            style={styles.background}
          >
            <View style={styles.image}>
              <Image source={require("./YYL75.png")} style={styles.logo} />
            </View>
            <View>
              {!this.state.renderMap && (
                <View style={styles.container}>
                  <Image source={require("./safety.png")} style={styles.safe} />
                  <View style={styles.containerform}>
                    <Text style={styles.formtext}>Username</Text>
                    <TextInput
                      placeholder="UserName ..."
                      placeholderTextColor="white"
                      onChangeText={username =>
                        this.setState({ username, correctInput: true })
                      }
                      value={this.state.username}
                      style={styles.form}
                    />
                    <Text style={styles.formtext}>Password</Text>
                    <TextInput
                      placeholder="Password ..."
                      secureTextEntry={this.state.hidden}
                      placeholderTextColor="white"
                      onChangeText={password =>
                        this.setState({ password, correctInput: true })
                      }
                      style={styles.form}
                      value={this.state.password}
                    />
                    {!this.state.correctInput && (
                      <Text style={styles.error}>
                        Incorrect password or username
                      </Text>
                    )}
                  </View>
                  <View style={{ marginBottom: 2 }}>
                    <TouchableOpacity
                      style={styles.buttonstyle}
                      activeOpacity={0.5}
                      onPress={() => {
                        const value = {
                          username: this.state.username,
                          password: this.state.password
                        };
                        this.handleLogin(value, myData);
                      }}
                    >
                      <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.buttonstyle}
                      onPress={this.handleSubmit}
                    >
                      <Text style={styles.text}>Sign-up </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </ImageBackground>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderRadius: 50,
    opacity: 30
  },
  logo: {
    justifyContent: "center",
    alignSelf: "center",
    width: "62%",
    height: "62%"
  },
  image: {
    flexDirection: "column"
  },
  background: {
    width: "100%",
    height: "100%"
  },
  buttonstyle: {
    marginTop: 10,
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: 30,
    marginRight: 30,
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
  },
  form: {
    fontSize: 12,
    backgroundColor: "black",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    color: "white"
  },
  formtext: {
    fontSize: 18,
    color: "black",
    marginTop: 10,
    fontWeight: "900"
  },
  containerform: {
    borderRadius: 20,
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "black"
  },
  error: {
    color: "black"
  },
  textboxfield: {
    color: "white"
  },
  safe: {
    justifyContent: "flex-end",
    alignSelf: "center",
    width: 150,
    height: 40,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "black"
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10
  }
});
