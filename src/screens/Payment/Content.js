import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, FlatList, ImageBackground, Image } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Content extends Component {
    render() {
        const {money}=this.props
        return (
            <View style={{
                width:windowWidth,
                justifyContent:"center",
                alignItems:"center",
                marginTop:15
            }}>
                <View style={{
                    width: windowWidth * 0.9,

                }}>
                    <Text style={{
                        fontWeight: "500",
                        fontSize: 20,
                        color: "#1f1f39"
                    }}>Bạn vui lòng chuyển khoản qua: </Text>
                    <Text style={{
                        fontWeight: "500",
                        fontSize: 20,
                        color: "#1f1f39",
                        marginTop: 10
                    }}>Chủ tài khoản: TRAN TIEN DAT </Text>
                    <Text style={{
                        fontWeight: "500",
                        fontSize: 20,
                        color: "#1f1f39",
                        marginTop: 10
                    }}>Ngân hàng : MB Bank (Ngân hàng quân đội)</Text>
                    <Text style={{
                        fontWeight: "500",
                        fontSize: 20,
                        color: "#1f1f39",
                        marginTop: 10
                    }}>Số tiền: {money} đ</Text>
                    <Text style={{
                        fontWeight: "500",
                        fontSize: 20,
                        color: "#1f1f39",
                        marginTop: 10,
                        lineHeight:30
                    }}>Nội dung chuyển khoản: nhập gmail vào! </Text>
                    {/* <Text style={{
                        fontWeight: "500",
                        fontSize: 20,
                        color: "#1f1f39",
                        marginTop: 10,
                        lineHeight:30
                    }}>Sau khi thanh toán thành công hãy kiểm tra gmail và phần thông báo </Text> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
