import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, FlatList, ImageBackground, Image, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActivityIndicator from '../../component/ActivityIndicator';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA1 = [
    {
        id: 1,
        title: 'First Item1',
    },
    {
        id: 2,
        title: 'Second Item',
    },
];

export default class Result extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectCourse: 1,
            data: [],
            keySearch: "d",
            loading: false,
            // textValue:""
        }
    }
    componentDidMount() {
        
        this.setState({ data: DATA1,
        keySearch:this.props.keySearch
        })
       
        // this.setState({ loading: true })
        
        // setTimeout(() => {
            
        //     // Alert.alert("hello"+this.state.keySearch)
        // }, 1000);
        
    }
    // componentWillUnmount(){
    //     this.setState({ loading: false })
    // }


    render() {
        return (
            this.state.loading ? <ActivityIndicator /> :
                <View style={{ flex: 1, }}>
                    <View style={{
                        alignItems: "center",
                        marginTop: windowHeight * 0.08
                    }}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                            // justifyContent:"center"
                        }}>
                            <TextInput
                            value={this.state.keySearch}
                                onChangeText={() => { (text) => this.setState({ keySearch: text }) }}
                                placeholder="Tim khoa hoc..." style={{
                                    width: "90%",
                                    height: windowHeight * 0.05,
                                    borderRadius: windowHeight * 0.025,
                                    borderWidth: 1,
                                    borderColor: "#999",
                                    padding: 10
                                }} />
                            <TouchableOpacity
                                onPress={() => {
                                    // Actions.jump("result", { key: this.state.keySearch })
                                }}
                                style={{
                                    marginLeft: 5
                                }}>
                                <Image source={require('../../assets/Course/search.png')} style={{ width: 25, height: 25 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            marginTop: windowHeight * 0.03,
                            width: "90%",
                        }}>
                            <Text style={{
                                fontWeight: "500",
                                fontSize: 20,
                                color: "#1f1f39"
                            }}>Kết quả tìm kiếm</Text>
                        </View>

                        <FlatList
                            style={{ width: "80%", }}
                            data={this.state.data}
                            renderItem={({ item }) => (
                                <View style={{

                                    marginTop: windowWidth * 0.05,
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}>
                                    <Image source={require('../../assets/Course/imgCourse.png')} style={{ width: 70, height: 70 }} />
                                    <View style={{
                                        marginLeft: 15
                                    }}>
                                        <Text style={{
                                            fontWeight: "500",
                                            fontSize: 16,
                                            color: "#3d5cff"
                                        }}>{item.title}</Text>
                                        <Text style={{
                                            fontWeight: "600",
                                            fontSize: 18,
                                            color: "#3d5cff",
                                            marginTop: 10
                                        }}>190.000 đ</Text>

                                    </View>
                                </View>
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({})
