import React ,{Component} from 'react';
import { Text, View,SafeAreaView, TouchableOpacity,Button,ScrollView } from 'react-native';
import {CustomHeader} from '../index'

export class SettingsScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title='Update Customer Info' isHome={true} navigation={this.props.navigation} />
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
              <Text>Update Customer Info!</Text>
              <TouchableOpacity 
                style={{marginTop:20,}}
                onPress={() => this.props.navigation.navigate('SettingDetails')}
              >
                <Text>Go Details</Text>
              </TouchableOpacity>
              </View>
            </SafeAreaView>
          );
    }
}