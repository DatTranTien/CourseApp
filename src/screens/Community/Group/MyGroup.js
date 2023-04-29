import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, FlatList, ImageBackground, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class MyGroup extends Component {
    render() {
        return (
            <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={{
                backgroundColor: "#FFF",
                // flex: 1,
                // paddingBottom:windowHeight*0.5
            }}>

                <View style={{
                    width: windowWidth,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                    paddingBottom:windowHeight*0.3
                }}>
                    <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                         onPress={() => {
                            Linking.openURL("https://www.google.com/")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/web.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >WebSite</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
                                    Tham gia cộng đồng để cùng trao đổi kiến thức, gặp gỡ giao lưu, và nhận những bài học miễn phí,...
                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/imgWebPage.png')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                        onPress={() => {
                            Linking.openURL("https://www.facebook.com/")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/GroupFace.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >Facebook</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
                                    Tham gia cộng đồng để cùng trao đổi kiến thức, gặp gỡ giao lưu, và nhận những bài học miễn phí,...
                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/imgFacePage.png')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                        onPress={() => {
                            Linking.openURL("https://www.youtube.com/")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/youtube.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >Youtube</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
                                    Tham gia cộng đồng để cùng trao đổi kiến thức, gặp gỡ giao lưu, và nhận những bài học miễn phí,...
                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/imgYoutubePage.png')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        backgroundColor: "#F2F2F2",
                        width: windowWidth * 0.9,
                        // height: windowHeight * 0.25,
                        borderRadius: 20,
                        // justifyContent:"center",
                        padding: 20,
                        marginTop: 20
                        // alignItems:"center"
                    }}>
                        <TouchableOpacity
                        onPress={() => {
                            Linking.openURL("https://www.tiktok.com/")
                         }}
                        >
                            <View style={{
                                flexDirection: "row"
                            }}>
                                <Image source={require('../../../assets/Community/tiktok.png')} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                                <View style={{
                                    justifyContent: "center",
                                    marginLeft: 20,
                                    height: windowHeight * 0.1
                                }}>
                                    <Text
                                        style={{
                                            fontWeight: "700",
                                            fontSize: 20,
                                            color: "#1f1f39",
                                        }}
                                    >TikTok</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#2f1f39",
                                    marginTop: 5,
                                }}>
                                    Tham gia cộng đồng để cùng trao đổi kiến thức, gặp gỡ giao lưu, và nhận những bài học miễn phí,...
                                </Text>
                            </View>
                                <Image source={require('../../../assets/Community/imgTiktokPage.png')} style={{ width: windowWidth*0.8, height: windowHeight * 0.25, marginTop:10,borderRadius:10 }} />
                        </TouchableOpacity>

                    </View>

                    
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
