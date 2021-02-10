import React ,{Component} from 'react';
import { Text, View,SafeAreaView, TouchableOpacity,Button,ScrollView,StyleSheet,TextInput } from 'react-native';
import {Picker} from 'native-base';

import {CustomHeader} from '../index'


export class Calc extends Component{
  constructor(props){
    super(props);
    this.state = {
      pickerSelection : "default"
    }
  }
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title="Maintenance Calculator"  navigation={this.props.navigation} />
              <View style={{flex:1,marginBottom:400,padding:20,justifyContent:'center',alignItems:'center'}} >
              

                <Picker
                  style={{width:250,height:25,}}
                  selectedValue={this.state.Vahicle}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({Vahicle: itemValue})
                  }>
                  <Picker.Item label="Select Model " value="fu" />
                  <Picker.Item label="Car" value="Car" />
                  <Picker.Item label="Bike" value="Bike" />
                </Picker>  
                <Picker
                  style={{width:250,height:25,}}
                  selectedValue={this.state.Vahicle}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({Vahicle: itemValue})
                  }>
                  <Picker.Item label="Select Variant " value="fu" />
                  <Picker.Item label="Car" value="Car" />
                  <Picker.Item label="Bike" value="Bike" />
                </Picker> 
                <View style={{flex:1}}>
                  <Text style={{alignSelf:'center'}}>Down Payment Amount</Text>
                  <TextInput
                      style={{ height: 30,width:260,alignSelf:'center', borderColor: 'gray', borderWidth: 1 }} 
                  />
                </View>
                <View style={{flex:1}}>
                  <Text style={{alignSelf:'center'}}>Rate Of Interest </Text>
                  <TextInput
                      style={{ height: 30,width:260,alignSelf:'center', borderColor: 'gray', borderWidth: 1 }} 
                  />
                </View>
                <View style={{flex:1}}>
                  <Text style={{alignSelf:'center'}}>Tenure</Text>
                  <TextInput
                      style={{ height: 30,width:260,alignSelf:'center', borderColor: 'gray', borderWidth: 1 }} 
                     
                  />
                </View>                  
               
              </View>
            </SafeAreaView>
          );
    }
}
