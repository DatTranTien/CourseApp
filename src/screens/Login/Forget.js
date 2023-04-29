import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, TextInput, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Forget extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:""
        }
    }

    forgotPassword = (Email) => {
        auth().sendPasswordResetEmail(Email)
          .then(function (user) {
            // alert('Please check your email...')
          }).catch(function (e) {
            console.log(e)
          })
      }
    
    checkValidate = ()=>{
       
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (reg.test(this.state.email) === false) {
              Alert.alert(  
                'Thông báo',  
                'Gửi không thành công! Hãy xem nhập đúng gmail chưa bạn nhé!',  
                [  
                    {text: 'OK'},  
                ],  
                // {cancelable: false}  
            )  
              return false;
            }
            else {
            //   this.setState({ email: text })
            
              Alert.alert(  
                'Thông báo',  
                'Gửi thành công! Hãy kiểm tra gmail của bạn nhé!',  
                [  
                    {text: 'OK',onPress: () => Actions.jump("login")},  
                ], 
                this.forgotPassword(this.state.email)
                // {cancelable: false}  
            )  
            }
    }
    render() {
        return (
            <View style={{
                // justifyContent:"center",
                alignItems: "center",
                paddingTop: windowHeight * 0.05,
            }}>
                <View style={{
                    marginBottom:windowHeight*0.02
                }}>
                    <Text style={{
                        fontSize:18,
                        color:"#858597",
                        fontWeight:"500"
                    }}>
                        Nhập tài khoản gmail của bạn!
                    </Text>
                </View>
                <View style={{
                    width: "90%"
                }}>
                    <View>
                        <Text style={{ color: "#858597" }}>Email</Text>
                        <TextInput
                        onChangeText={(text)=>{
                            this.setState({email:text})
                        }}
                        placeholder="trantiendatbk@gmail.com" style={{
                            borderRadius: 10,
                            borderColor: "gray",
                            borderWidth: 1,
                            height: 40,
                            padding: 5,
                            marginTop: 10,
                        }}
                            placeholderTextColor="gray"
                        />
                    </View>
                    <View style={{
                        marginTop: 20,
                    }}>
                        <TouchableOpacity
                        onPress={async()=>{
                            this.checkValidate()
                        }}
                        style={{
                            backgroundColor: "#3D5CFF",
                            borderRadius: 10,
                            // width:windowWidth*0.3,
                            paddingVertical: 15,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                            marginTop: 20
                        }}>
                            <Text style={{
                                color: "#FFF",
                                fontSize: 16
                            }}>Gửi mã</Text>
                        </TouchableOpacity>
                        <View style={{
                            marginTop: 20,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={{ color: "#858597", fontSize:15 }}>Sau khi gửi mã hãy kiểm tra lại Gmail của bạn!</Text>
                        </View>
                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({})
