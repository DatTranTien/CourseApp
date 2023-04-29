import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, FlatList, ImageBackground, Image, TouchableOpacity, ScrollView,Linking } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { WebView } from 'react-native-webview';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class CardBlog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {title,content,uri,time,url} = this.props
        return (
            <View
            style={{
                width: windowWidth,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: -windowWidth*0.06
                // marginLeft:-windowWidth*0.05
            }}>
            <View style={{
                backgroundColor: "#eee",
                width: windowWidth * 0.85,
                borderRadius: 20,
                justifyContent: "center",
                padding: 20,
                marginTop: 20,
                alignItems: "center",
            }}>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%"
                    }}
                    onPress={() => {
                        Actions.myBlog({url:url})
                        // Actions.blog({uri:uri,time:time,content:content,title:title})
                        }}>
                    <View style={{
                        width:"20%"
                    }}>
                        <Image source={{ uri: uri }} style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }} />
                    </View>
                    <View style={{
                        justifyContent: "center",
                        marginLeft: "10%",
                        width: "70%",
                    }}>
                        <View style={{

                        }}>
                            <Text
                            numberOfLines={2}
                            style={{
                                fontWeight: "700",
                                fontSize: 18,
                                color: "#1f1f39",
                            }}>{title}</Text>
                        </View>
                        <View style={{
                            width: "100%",
                        }}>
                            <Text numberOfLines={2} style={{
                                fontSize: 16,
                                color: "#2f1f39",
                                marginTop: 5,
                            }}>
                                {content}
                            </Text>
                            <View style={{
                                backgroundColor: "#999",
                                padding: 5,
                                borderRadius: 10,
                                width: "50%",
                                justifyContent: "center",
                                alignItems: "center",
                                opacity: 0.7,
                                marginTop: 5
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#FFF",
                                    // marginTop: 15,
                                }}>
                                    {time}
                                </Text>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>
            </View>

        </View>
        )
    }
}

const styles = StyleSheet.create({})
