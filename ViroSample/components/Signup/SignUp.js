import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";
import t from "tcomb-form-native";

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String
});
export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    username: ""
  };
  handleSubmit = () => {
    const value = this.input.getValue();
    console.log(value);
  };
  render() {
    return (
      <View style={styles.container}>
        <Form type={User} ref={type => (this.input = type)} />
        <Button
          title="Already have an account? Login!"
          onPress={this.handleSubmit}
        />

        <Button
          title="Sign Up!"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});
