import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, FlatList, ImageBackground, Image,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import ActivityIndicator from '../../component/ActivityIndicator';
import { fakeBlog } from '../Api/FakeBlog';
import { fakeSearchCourse } from '../Api/FakeSearchCourse';
import CardBlog from '../Community/Notifications/CardBlog';

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
const DATA2 = [
    {
        id: 1,
        title: 'First Item2',
    },
    {
        id: 2,
        title: 'Second Item',
    },
];
const DATA3 = [
    {
        id: 1,
        title: 'First Item3',
    },
    {
        id: 2,
        title: 'Second Item',
    },
];

export default class Course extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectCourse: 1,
            data: [],
            keySearch:"",
            loading:false
        }
    }
    componentDidMount() {
        this.setState({ data: fakeSearchCourse.course })
    }


    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={{
                    alignItems: "center",
                    marginTop: windowHeight * 0.08
                }}>
                    {/* <View style={{
                        flexDirection:"row",
                        alignItems:"center"
                        // justifyContent:"center"
                    }}>
                        <TextInput
                        onChangeText={()=>{(text)=>this.setState({keySearch:text})}}
                        placeholder="Tim khoa hoc..." style={{
                            width: "90%",
                            height: windowHeight * 0.05,
                            borderRadius: windowHeight * 0.025,
                            borderWidth: 1,
                            borderColor: "#999",
                            padding: 10
                        }} />
                        <TouchableOpacity
                        onPress={()=>{
                            Actions.result({keySearch:this.state.keySearch})
                        }}
                        style={{
                            marginLeft:5
                        }}>
                            <Image source={require('../../assets/Course/search.png')} style={{ width: 25, height: 25 }} />
                        </TouchableOpacity>
                    </View> */}

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "90%",
                        marginTop:20
                    }}>
                        <Text style={{
                            fontWeight: "500",
                            fontSize: 18,
                            color: "#1f1f39"
                        }}>Bài Blog</Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({obj:fakeBlog.topic[0]})
                                // this.setState({loading:true})
                                setTimeout(() => {
                                    Actions.showAll({item:this.state.obj})
                                    this.setState({loading:false})
                                }, 200);

                            }
                            }>
                            <Text style={{
                                fontWeight: "500",
                                fontSize: 18,
                                color: "#3d5cff",
                                // textDecorationLine: "underline"
                            }}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={fakeBlog.topic[0].detail}
                            renderItem={({ item }) => (
                                <CardBlog title={item.title} uri={item.uri} time={item.time} content={item.content} url={item.url} />
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    </ScrollView>

                    <View style={{
                        marginTop: windowHeight * 0.03,
                        width: "90%",
                    }}>
                        <Text style={{
                            fontWeight: "500",
                            fontSize: 20,
                            color: "#1f1f39"
                        }}>Chọn khoá học của bạn</Text>
                    </View>

                    <View
                        style={{
                            marginTop: windowHeight * 0.02,
                            width: "90%",
                            flexDirection: "row"
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ selectCourse: 1 })
                                this.setState({ data: fakeSearchCourse.course })
                            }}
                            style={{
                                width: 75,
                                height: 30,
                                borderRadius: 37,
                                backgroundColor: this.state.selectCourse == 1 ? "#3d5cff" : "#999",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <Text style={{
                                color: "#FFF",
                                fontSize: 16,
                                fontWeight: "400"
                            }}>Tất cả</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                            onPress={() => {
                                this.setState({ selectCourse: 2 })
                                this.setState({ data: DATA2 })
                            }}
                            style={{
                                width: 75,
                                height: 30,
                                borderRadius: 37,
                                backgroundColor: this.state.selectCourse == 2 ? "#3d5cff" : "#999",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: 10
                            }}>
                            <Text style={{
                                color: "#FFF",
                                fontSize: 16,
                                fontWeight: "400"
                            }}>Phổ biến</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ selectCourse: 3 })
                                this.setState({ data: DATA3 })
                            }}
                            style={{
                                width: 75,
                                height: 30,
                                borderRadius: 37,
                                backgroundColor: this.state.selectCourse == 3 ? "#3d5cff" : "#999",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: 10
                            }}>
                            <Text style={{
                                color: "#FFF",
                                fontSize: 16,
                                fontWeight: "400"
                            }}>Mới</Text>
                        </TouchableOpacity> */}
                    </View>


                    <FlatList
                        style={{ width: "80%", }}
                        data={this.state.data}
                        renderItem={({item}) => (
                            <TouchableOpacity 
                            onPress={()=>Actions.detailCourse({item:item})}
                            style={{
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
                                    }}>{item.titleCourse}</Text>
                                    <Text style={{
                                        fontWeight: "600",
                                        fontSize: 18,
                                        color: "#3d5cff",
                                        marginTop: 10
                                    }}>{item.price}đ</Text>

                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
