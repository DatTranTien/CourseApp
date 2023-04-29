import React, { Component, useState,useEffect} from 'react'
import { SafeAreaView, Text, StyleSheet, View, Image, Dimensions, TouchableOpacity, TextInput, Alert, ScrollView,Button, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import auth from '@react-native-firebase/auth';
const CELL_COUNT = 6;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class OTPPass extends Component {
    render() {
        return (
            <View style={{
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{
                    width: "90%",
                    marginTop: windowHeight * 0.15
                }}>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "600",
                            color: "#1f1f39"
                        }}>Nhập mã gồm 6 chữ số</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: "500",
                            color: "#999"
                        }}>Để đặt mật khẩu, hãy nhập mã gồm 6 chữ số đã được gửi đến 0961223270</Text>
                    </View>
                </View>
                <Underline />
                {/* <GetOTP/> */}
            </View>
        )
    }
}

// const styles = StyleSheet.create({})



const Underline = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const [loading, setLoading] = useState(false)
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');

    useEffect(() => {
   signInWithPhoneNumber('+84 0961223270')
    }, [])
  
    async function signInWithPhoneNumber(phoneNumber) {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    }
    async function confirmCode() {
        try {
          await confirm.confirm(code);
          setTimeout(() => {
              setLoading(true)
              Actions.push("changePass")
          }, 1000);
        } catch (error) {
          Alert.alert('Sai mã code.');
        }
      }

    return (
        <SafeAreaView style={styles.root}>
            {loading?<ActivityIndicator size="small" color="#0000ff" />:null}
            <CodeField
                ref={ref}
                {...props}
                value={code}
                onChangeText={(text)=>setCode(text)}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <View
                        // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[styles.cellRoot, isFocused && styles.focusCell]}>
                        <Text style={styles.cellText}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )}
            />
            <TouchableOpacity
            onPress={()=>signInWithPhoneNumber()}
            style={{
                width:windowWidth,
                marginLeft:windowWidth*0.05,
                marginTop:20
            }}>
                <Text
                style={{
                    color: "#3d5cff",
                    fontSize: 18,
                    fontWeight: "600"
                }}
                >Gửi lại mã!</Text>
            </TouchableOpacity>
            <View style={{
                width:windowWidth,
                justifyContent:"center",
                alignItems:"center",
                marginTop:35
            }}>
                <TouchableOpacity style={{
                    backgroundColor: "#3d5cff",
                    width: 100,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10
                }}
                
                onPress={() => confirmCode()}
                >
                    <Text style={{
                        color: "#FFF",
                        fontSize: 18,
                        fontWeight: "600"
                    }}>Xác nhận</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: { padding: 20, minHeight: 300 },
    codeFieldRoot: {
        marginTop: 20,
        width: "100%",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cellRoot: {
        width: windowWidth * 0.9 / 6,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginLeft: 10
    },
    cellText: {
        color: '#000',
        fontSize: 36,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#007AFF',
        borderBottomWidth: 2,
    },
})


// function GetOTP() {
//   // If null, no SMS has been sent


 

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number n"
//         onPress={() => signInWithPhoneNumber('+84 0961223270')}
//       />
//     );
//   }

//   return (
//    <View style={{
//        justifyContent:"center",
//        alignItems:"center",
//        flex:1
//    }}>
       
//        <TextInput style={{
//            width:200,
//            height:230,
//            backgroundColor:"red"
//        }} value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//    </View>
//   );
// }
