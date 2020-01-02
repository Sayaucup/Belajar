import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  Image,
  TouchableOpacity
  
} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data : [],
      name:'',
      cekolah:'',
      telpon:'',
      email:''
     }
  }

  Kirimdata = () => {
    const {name} = this.state
    const {cekolah} = this.state
    const {telpon} = this.state
    const {email} = this.state
    
    return fetch('http://homekomputer.000webhostapp.com/api/TambahData.php',
    {
      method: 'POST',
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "student_name" : name,
        "student_class" : cekolah,
        "student_phone_number" : telpon,
        "student_email" : email,
        })
    })
    .then((respose) => respose.json())
    .catch((error) => console.log(error))

  }
 
  render() { 
    return ( 
      <View style = {{ flex:1 }}>
         
          <ScrollView>
          <View style={{marginTop:50,marginHorizontal:25}}>
            <TextInput  placeholder='Insert Your Name' placeholderTextColor='#cc7a16' 
              style={{paddingLeft:15,alignSelf:'stretch',color:'#cc7a16',borderRadius:5,borderWidth:1,borderColor:'#cc7a16'}} 
              onChangeText =  { text => this.setState({name:text})}/>
          </View>
          <View style={{marginTop:10,marginHorizontal:25}}>
            <TextInput  placeholder='Insert Your Class' placeholderTextColor='#cc7a16' 
              style={{paddingLeft:15,alignSelf:'stretch',color:'#cc7a16',borderRadius:5,borderWidth:1,borderColor:'#cc7a16'}} 
              onChangeText =  { text => this.setState({cekolah:text})}/>
          </View>
          <View style={{marginTop:10,marginHorizontal:25}}>
            <TextInput keyboardType='numeric'  placeholder='Insert Your Phone Number' placeholderTextColor='#cc7a16' 
              style={{paddingLeft:15,alignSelf:'stretch',color:'#cc7a16',borderRadius:5,borderWidth:1,borderColor:'#cc7a16'}}
              onChangeText =  { text => this.setState({telpon:text})}/>
          </View>
          <View style={{marginTop:10,marginBottom:40,marginHorizontal:25}}>
            <TextInput  keyboardType='email-address' placeholder='Insert Your Email' placeholderTextColor='#cc7a16' 
              style={{paddingLeft:15,alignSelf:'stretch',color:'#cc7a16',borderRadius:5,borderWidth:1,borderColor:'#cc7a16'}} 
              onChangeText =  { text => this.setState({email:text})}/>
          </View>
          <View style={{marginTop:35}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Screenhasil')} >
                        <View style={{height:50,backgroundColor:'#cc7a16',justifyContent:'center',alignItems:'center',marginHorizontal:100,borderRadius:10}}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>ADD</Text>
                        </View>
                    </TouchableOpacity>
                </View> 
          </ScrollView>
      </View>
     );
  }
}
 
export default App;