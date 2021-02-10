import React ,{Component} from 'react';
import { Text, View,SafeAreaView, TouchableOpacity,Button,ScrollView,StyleSheet } from 'react-native';
import {Picker} from 'native-base';

import {CustomHeader} from '../index'


export class CompareCI extends Component{
  constructor(props){
    super(props);
    this.state = {
      pickerSelection : "default"
    }
  }
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title="Compare Competitor Information"  navigation={this.props.navigation} />
              <View style={{flex:1,marginBottom:200,padding:250,justifyContent:'center',alignItems:'center'}} >
              

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
               
              </View>
            </SafeAreaView>
          );
    }
}
