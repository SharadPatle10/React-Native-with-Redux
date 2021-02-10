import React ,{Component} from 'react';
import { Text, View,SafeAreaView, TouchableOpacity,Button,ScrollView } from 'react-native';
import {CustomHeader} from '../index'

export class RegisterScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title='Reset Password' navigation={this.props.navigation}  />
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
              <Text>Reset Password Screen!</Text>
              </View>
            </SafeAreaView>
          );
    }
}