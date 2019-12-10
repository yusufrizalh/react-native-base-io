/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

import { Form, Field } from "react-native-validate-form";

import InputFields from './InputFields';

const required = value => (value ? undefined : "Text Field Harus Diisi!");
const email = value => 
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value)
        ? "Tuliskan email yang valid!"
        : undefined;

class ValidateForm extends Component {
    constructor() {
        super();

        this.state = {
            errors: [], 
            email: ""
        };
    }

    // method untuk validasi saat tombol ditekan
    submitForm() {
        let submitResults = this.myForm.validate();
        let errors = [];

        submitResults.forEach(item => {
            errors.push({field: item.fieldname, error: item.error});
        });
        this.setState({errors: errors});
    }

    submitSuccess() {
        console.log("Submit Success!");
        Alert.alert("Submit Berhasil! \nSelamat Datang " + this.state.email);
    }

    submitFailed() {
        console.log("Submit Failed!");
        Alert.alert("Submit Gagal!");
    }

    render() {
    return (
      <View style={styles.form}>
        <Form
          ref={ref => (this.myForm = ref)}
          validate={true}
          submit={this.submitSuccess.bind(this)}
          failed={this.submitFailed.bind(this)}
          errors={this.state.errors}
        >
          <Field
            required
            component={InputFields}
            validations={[required, email]}
            name="email"
            value={this.state.email}
            onChangeText={val => this.setState({ email: val })}
            customStyle={styles.input}
            placeholder="Tuliskan email disini"
          />
        </Form>

        <TouchableOpacity
          style={styles.button}
          onPress={this.submitForm.bind(this)}
        >
          <Text style={{ color: "#fff" }}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ValidateForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 160,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20
  },
  input: {
    width: 360,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 16,
    margin: 20,
    marginBottom: 0,
  }
});