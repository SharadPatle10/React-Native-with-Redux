import React ,{Component} from 'react';
import { Text, View,SafeAreaView, TouchableOpacity,Button,ScrollView,StyleSheet,TextInput,CheckBox } from 'react-native';
import {Picker} from 'native-base';
import { RadioButton } from 'react-native-paper';


import {CustomHeader} from '../index'


export class QandA extends Component{
  constructor(props){
    super(props);
    this.state = {
      pickerSelection : "default"
    }
  }
  state = {
    checked: 'first',
  };
    render(){
      const { checked } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title="Question & Answers"  navigation={this.props.navigation} />
              <View style={{flex:1,padding:150,justifyContent:'center',alignItems:'center',paddingBottom:90}} >
                
                <View style={{flex:1}}>
                  <Text style={{alignSelf:'center'}}>Question & Answers</Text>
                  <TextInput
                      style={{ height: 30,width:260,alignSelf:'center', borderColor: 'gray', borderWidth: 1,textAlign:'center' }} 
                      value='Ask Questions......'
                  />
                </View>
                
                <View style={{flex:1}}>         
                  <TouchableOpacity 
                      style={{marginTop:20,borderWidth:1,width:250,height:30,justifyContent:'center',alignItems:'center'}}
                  >
                      <Text>Submit</Text>
                  </TouchableOpacity> 
                </View> 
              </View>
            </SafeAreaView>
          );
    }
}
