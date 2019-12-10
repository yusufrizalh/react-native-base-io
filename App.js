/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image, Alert
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import component from native-base 
import {Container, 
  Header, 
  Button, 
  Content, 
  Text, Root, Icon, 
  ActionSheet, Thumbnail, 
  Card, CardItem, Body} from "native-base";

import InputFields from './InputFields';
import ValidateForm from './ValidateForm';

  // opsi-opsi dalam button action sheet 
  var OPSI = ["Opsi 1", "Opsi 2", "Opsi 3", "Hapus", "Cancel"];
  var HAPUS_INDEX = 3;
  var CANCEL_INDEX = 4;

class App extends Component {
  constructor(props) {
    super(props);
    // nilai awal belum ada opsi yg dipilih 
    this.state = {}; 
  }

  render() {
    return(
      // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      //   <Text style={{fontSize: 28}}>
      //     Learn Native Base
      //   </Text>
      // </View>
      <Root>
      <Container>
        <Header />
        <Content padder>
          <Button bordered iconRight primary 
            onPress={ () => 
            ActionSheet.show({
              options: OPSI, 
              cancelButtonIndex: CANCEL_INDEX, 
              destructiveButtonIndex: HAPUS_INDEX, 
              title: "PILIH OPSI"
            },
              buttonIndex => {
                this.setState({clicked: OPSI[buttonIndex]});
              })}>
            
            <Text>Action Sheet</Text>

            <Icon name='home' />
          </Button>

          {/* Card */}
          {/* <Card>
            <CardItem header>
              <Text>Card Header</Text>
            </CardItem>

            <CardItem button onPress={() => Alert.alert("Menekan Card Item")}>
              <Body>
                <Image source={require('./village.png')}
                  style={{flex: 1, width: 360, height: 160}} />
                <Text>
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit. 
                  Proin elementum finibus neque ut viverra. 
                  Curabitur sed efficitur est. 
                  Integer tincidunt quam nec nisi varius, sit.
                </Text>                
              </Body>
              
            </CardItem>

            <CardItem footer>
              <Text>Card Footer</Text>
            </CardItem>
          </Card> */}
          <ValidateForm />
        </Content>
        
      </Container>
      </Root>
    );
  }
}

export default App;