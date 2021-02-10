import React ,{Component} from 'react';
import { Text, View,SafeAreaView,TouchableOpacity,Button,ScrollView,Image} from 'react-native';
import axios from 'axios';
import {CustomHeader} from '../index'
// import { Item } from 'native-base';


export class CarDetails extends Component{
    constructor(){
      super()
      this.state = {
        data :[]
      }
    }
    componentDidMount(){
      this.getapidata()
    }
    async getapidata(){
      // const variant_code = navigation.getParam('variant_code');

      let res =  await axios.get('http://142.93.212.248:8080/newcar/variant/list/MD0054')
      // console.warn(res.data.model_variant_list);
      this.setState({data : res.data.model_variant_list}) 

    } 
    

    
    render(){
      
        return (
            <SafeAreaView style={{flex:1}}>
              <CustomHeader title="Car Details" navigation={this.props.navigation}  />
              <ScrollView>
                {
                  this.state.data.length>0 ?
                  <View style={{justifyContent:'center',alignItems:'center',paddingTop:5,paddingBottom:10}} >
                    {
                      this.state.data.map((item,index) => {
                        return(
                          <View  style={{padding:15,borderWidth:1,left:20,borderRadius:20,backgroundColor:'white',width:315 }}>
                              <TouchableOpacity
                                  onPress={() => this.props.navigation.navigate('Modelinfo')}
                              >   
                                  <Text> {item.model_name} {"\n"}{"\n"}  {item.variant_name}   </Text> 
                                  {/* <Text> {item.model_name} {"\n"}{"\n"}  {item.variant_name}   </Text>  */}
                              </TouchableOpacity>   
                          </View>
                        )
                      }
                      )
                    }
                  </View>:<View style={{justifyContent:'center',alignItems:'center'}} ><Text style={{justifyContent:'center',alignItems:'center',paddingTop:500}} >Loading......</Text></View> 
                }
            </ScrollView>
            </SafeAreaView>
          );
    }
}