import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, FlatList, ImageBackground, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { fakeBlog } from '../../Api/FakeBlog';
import CardBlog from './CardBlog';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class Notice extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }


    componentDidMount() {
        this.setState({ data: fakeBlog.topic })
    }

    render() {
        return (
            // <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={{
            //     backgroundColor: "#FFF",
            //     // flex: 1,
            //     // marginBottom:windowHeight*0.2
            // }}>
            <View style={{
                paddingBottom:windowHeight*0.16
            }}>

                <FlatList
                    style={{
                        width: "100%",
                        
                    }}
                    // horizontal
                    // showsHorizontalScrollIndicator={true}
                    data={this.state.data}
                    renderItem={({ item }, index) => (
                        <View key={index}>
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 15
                                //   marginLeft:-windowWidth*0.05
                                // paddingBottom: windowHeight * 0.3,
                                // flexDirection:"row"
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    width: "90%"
                                }}>
                                    <Text style={{
                                        fontWeight: "500",
                                        fontSize: 16,
                                        color: "#1f1f39"
                                    }}>{item.topicAbout}</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            Linking.openURL(item.urlWeb)
                                        }
                                        }>
                                        <Text style={{
                                            fontWeight: "500",
                                            fontSize: 16,
                                            color: "#3d5cff",
                                            textDecorationLine: "underline"
                                        }}>Xem trên web</Text>
                                    </TouchableOpacity>
                                </View>

                                {item.detail.reverse().map((el, index) => {
                                    if (index < 5) {
                                        return (
                                            <CardBlog title={el.title} uri={el.uri} time={el.time} content={el.content} url={el.url} />
                                        )
                                    }
                                })}

                                <TouchableOpacity
                                onPress={()=>Actions.showAll({item:item})}
                                style={{
                                    // with: windowWidth*0.05,
                                    // height:windowHeight*0.05,
                                    backgroundColor: "#bbb",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 10,
                                    marginTop: 20,
                                    borderRadius: 10
                                }}>
                                    <Text style={{
                                        fontSize: 16,
                                        fontWeight: "500",
                                        color: "#fff"
                                    }}>
                                        Xem tất cả
                                    </Text>
                                </TouchableOpacity>

                                {/* <FlatList
                                    style={{
                                        width: "100%",
                                    }}
                                    horizontal
                                    showsHorizontalScrollIndicator={true}
                                    data={item.detail}
                                    renderItem={(el) => (
                                        <CardBlog title={el.title} uri={el.uri} time={el.time} content={el.content} />
                                    )}
                                    keyExtractor={item => item.id}
                                /> */}
                            </View>

                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
                {/* <View
                    style={{
                        height: "40%"
                    }}
                /> */}
            </View>
            // {/* </ScrollView> */}
        )
    }
}

const styles = StyleSheet.create({})
