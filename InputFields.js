/* eslint-disable keyword-spacing */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */


import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

const InputFields = ({
    name, 
    customStyle, 
    onChangeText, 
    value, 
    disabled,
    placeholder, 
    errors,
}) => {
    return(
        <View>
            <TextInput 
                value={value && value} 
                onChangeText={onChangeText ? (val) => 
                    onChangeText(val) : null} 
                placeholder={placeholder ? placeholder : ""}
                disabled={disabled}
                style={customStyle ? customStyle : {}} />

            {
                errors && errors.length > 0 && 
                    errors.map((item, index) => 
                        item.field === name && item.error ? 
                        <Text key={`${index}`} 
                            style={{color: 'red', marginLeft: 25, 
                            marginTop: 5}}>
                            {item.error}
                        </Text> : null)
            }
        </View>
    );
}
export default InputFields;