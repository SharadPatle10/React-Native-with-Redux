import React ,{Component} from 'react';
import { Text, View,SafeAreaView, TouchableOpacity,Button,ScrollView,StyleSheet } from 'react-native';
import {Picker} from 'native-base';

import {CustomHeader} from '../index'


export class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      pickerSelection : "default"
    }
  }
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title="salZMate" isHome={true} navigation={this.props.navigation} />
              <View style={{flex:1,marginBottom:200,padding:200,justifyContent:'center',alignItems:'center'}} >
              <TouchableOpacity 
                style={{marginTop:20,borderWidth:1,width:250,height:30,justifyContent:'center',alignItems:'center'}}
                onPress={() => this.props.navigation.navigate('HomeDetails')}
              >
                <Text>Add Customer Contact Details</Text>
              </TouchableOpacity>
              
                <Picker
                  style={{width:250,height:25,}}
                  selectedValue={this.state.Vahicle}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({Vahicle: itemValue})
                  }>
                  <Picker.Item label="Follow-up" value="fu" />
                  <Picker.Item label="Car" value="Car" />
                  <Picker.Item label="Bike" value="Bike" />
                </Picker>         
                <Picker
                  style={{width:250,height:25,}}
                  selectedValue={this.state.Hardisk}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({Hardisk: itemValue})
                  }>
                  <Picker.Item label="Test Drive Schedules" value="fu" />
                  <Picker.Item label="Ram" value="Ram" />
                  <Picker.Item label="Rom" value="Rom" />
                </Picker>              
                <Picker
                  style={{width:250,height:25,}}
                  selectedValue={this.state.language}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                  }>
                  <Picker.Item label="Deliveries" value="fu" />
                  <Picker.Item label="Disk" value="Disk" />
                  <Picker.Item label="PC" value="PC" />
                </Picker>
               
              </View>
            </SafeAreaView>
          );
    }
}
