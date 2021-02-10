import React ,{Component} from 'react';
import { Text, View,SafeAreaView, TouchableOpacity,Button,ScrollView } from 'react-native';
import {CustomHeader} from '../index'
import axios from 'axios';


export class Modelinfo extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title='Modelinfo' navigation={this.props.navigation}  />
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
              <Text>All Model Info</Text>
              </View>
            </SafeAreaView>
          );
    }
}


