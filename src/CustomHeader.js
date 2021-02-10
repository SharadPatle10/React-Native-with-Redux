import React ,{Component} from 'react';
import { Text, View,Image, TouchableOpacity } from 'react-native';
import {IMAGE} from './constants/image.js'

export class CustomHeader extends Component{
    render(){
      let {navigation,isHome,title } = this.props
        return(
            <View style={{ flexDirection:'row',height:50 }} >
                  <View style={{flex:1,justifyContent:'center',backgroundColor:'#FAEBD7'}}>
                    {
                      isHome ?
                      <TouchableOpacity onPress={() => navigation.openDrawer()} >
                        <Image style={{width:30,height:30,marginLeft:10}} 
                          source={IMAGE.ICON_MENU}
                          resizeMode='contain'            
                        />
        
                      </TouchableOpacity>
                      :
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} 
                    onPress={() => navigation.goBack()}
                    >
                      <Image
                        style={{width:25,height:25,marginLeft:5}}
                        source={IMAGE.ICON_BACK}
                        resizeMode='contain'
                      />
                      <Text>Back</Text>
                    </TouchableOpacity>       
                    }
                    
                  </View>
                <View style={{flex:3,justifyContent:'center',backgroundColor:'#FAEBD7'}}>
                  <Text style={{ textAlign:'left',fontSize:20,color:'red'}} >{title}</Text>
                </View>
                <View style={{flex:1.5,backgroundColor:'#FAEBD7',flexDirection:'row'}}>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
                            onPress={() => this.props.navigation.navigate('Productinfo')}
                    >
                      <Image
                            style={{width:60,height:60,marginLeft:10,marginTop:-6}}
                            source={require('./images/car.png')}
                            resizeMode='contain'
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
                            onPress={() => this.props.navigation.navigate('Chat')}                
                    >
                      <Image
                            style={{width:30,height:30,marginLeft:20,marginTop:3}}
                            source={require('./images/chat.png')}
                            resizeMode='contain'
                      />
                    </TouchableOpacity>

                </View>
            </View>
          )
    }
}