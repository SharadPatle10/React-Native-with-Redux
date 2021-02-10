import React ,{Component} from 'react';
import { Text, View,SafeAreaView, TouchableOpacity,Button,ScrollView,StyleSheet,TextInput,CheckBox } from 'react-native';
import {Picker} from 'native-base';
import { RadioButton } from 'react-native-paper';


import {CustomHeader} from '../index'


export class ModelRecommender extends Component{
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
              <CustomHeader title="Model Recommender"  navigation={this.props.navigation} />
              <View style={{flex:1,padding:20,justifyContent:'center',alignItems:'center',paddingBottom:390}} >
                
                <View style={{flex:1}}>
                  <Text style={{alignSelf:'center'}}>Budget in INR</Text>
                  <TextInput
                      style={{ height: 30,width:260,alignSelf:'center', borderColor: 'gray', borderWidth: 1 }} 
                      value='Enter Budget...'
                  />
                </View>
                
                <View style={{flex:1}}>
                    <Text style={{alignSelf:'center'}}>Select Driving Surface</Text>
                    <Picker
                      style={{width:250,height:25, }}
                      selectedValue={this.state.language}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                      }>
                      <Picker.Item label="--Select-Models--" value="fu" />
                      <Picker.Item label="java" value="java" />
                      <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                
                <Text style={{alignSelf:'center'}}>What features are you looking for ?</Text>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                  <View style={{flex:0.5}}>
                  <CheckBox
                      style={{alignSelf:'center'}}
                      checked={this.state.checked}
                    />
                  <Text style={{alignSelf:'center'}}>Mileage</Text>
                  </View>
                  <View style={{flex:0.5}}>
                  <CheckBox
                      style={{alignSelf:'center'}}
                      checked={this.state.checked}
                    />
                  <Text style={{alignSelf:'center'}}>Safety</Text>
                  </View>
                  <View style={{flex:0.5}}>
                  <CheckBox
                      style={{alignSelf:'center'}}
                      checked={this.state.checked}
                    />
                  <Text style={{alignSelf:'center'}}>Comfort</Text>
                  </View>
                  <View style={{flex:0.5}}>
                  <CheckBox
                      style={{alignSelf:'center'}}
                      checked={this.state.checked}
                    />
                  <Text style={{alignSelf:'center'}}>Performance</Text>
                  </View>
                  <View style={{flex:0.5}}>
                  <CheckBox
                      style={{alignSelf:'center'}}
                      checked={this.state.checked}
                    />
                  <Text style={{alignSelf:'center'}}>Styling</Text>
                  </View>
              </View> 
              <View style={{flex:1}}>
              <Text style={{alignSelf:'center'}}>Approx. Distance covered in a year</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between'}} >
                <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'first' }); }}
                  />
                <Text style={{alignSelf:'center'}}>More than 10,000 kms</Text>
                </View> 
                <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'second' }); }}
                  />
                <Text style={{alignSelf:'center'}}>Less than 10,000 kms</Text>
                </View>
                </View>
                <View style={{flex:1}}>         
                  <TouchableOpacity 
                      style={{marginTop:20,borderWidth:1,width:250,height:30,justifyContent:'center',alignItems:'center'}}
                  >
                      <Text>Proceed</Text>
                  </TouchableOpacity> 
                </View> 
              </View>
            </SafeAreaView>
          );
    }
}
