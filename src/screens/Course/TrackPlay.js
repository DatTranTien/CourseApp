
import Slider from '@react-native-community/slider';
import React,{useEffect} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';
import SoundPlayer from 'react-native-sound';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useAudioHelper } from './audio-helper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const listSpeedValues = [
    { value: 0.25, text: 'x0.25' },
    { value: 0.5, text: 'x0.5' },
    { value: 0.75, text: 'x0.75' },
    { value: 1.0, text: 'x1.0' },
    { value: 1.25, text: 'x1.25' },
    { value: 1.5, text: 'x1.5' },
    { value: 1.75, text: 'x1.75' },
];


function TrackPlay() {
    const player = useAudioHelper({
        listSounds: [
            // { type: 'app-bundle', path: 'blue_dream_cheel.mp3', name: 'Blue Dream - Cheel', basePath: SoundPlayer.MAIN_BUNDLE },
            // { type: 'app-bundle', path: 'know_myself_patrick_patrikios.mp3', name: 'Know Myself - Patrick Patrikios', basePath: SoundPlayer.MAIN_BUNDLE },
            // { type: 'directory', path: require('./sounds/Play-Doh-meets-Dora_Carmen-Maria-and-Edu-Espinal.mp3'), name: 'Play Doh meets Dora - Carmen Maria and Edu Espinal', },
            // { type: 'directory', path: 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3', name: 'los', },
            { type: 'network', path: 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3', name: 'Tropic - Anno Domini Bea1ts', },
        ],
        timeRate: 15,
        isLogStatus: true,
    });

    useEffect(() => {
    //    player.stop()
    //    player.loop
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Name: {player.currentAudioName}</Text>
            {/* <View style={styles.changeAudio}>
                <TouchableOpacity onPress={player.previous}>
                    <FontAwesomeIcon
                        name='step-backward'
                        size={50}
                        color={player.isDisabledButtonPrevious === false ? 'white' : 'gray'}
                    />
                </TouchableOpacity>
                <Image source={require('../../assets/Course/adsCourse.png')} style={styles.avatar}/>
                <TouchableOpacity
                    onPress={player.next}
                    style={styles.button}
                >
                    <FontAwesomeIcon
                        name='step-forward'
                        size={50}
                        color={player.isDisabledButtonNext === false ? 'white' : 'gray'}
                    />
                </TouchableOpacity>
            </View> */}
            <View style={styles.actionButtonsOther}>
                <TouchableOpacity
                    onPress={player.decreaseTime}
                    style={styles.button}
                >
                    <FontAwesomeIcon
                        name='rotate-left'
                        size={50}
                        color='white'
                    />
                    <Text style={{position:'absolute', alignSelf:'center', marginTop:1, color:'white', fontSize:12 }}>{player.timeRate}</Text>
                </TouchableOpacity>
                {
                    player.status === 'play' ?
                        <TouchableOpacity
                            onPress={player.pause}
                            style={{marginHorizontal:20}}
                        >
                            <FontAwesomeIcon
                                name='pause'
                                color='white'
                                size={50}
                            />
                        </TouchableOpacity> :
                        <TouchableOpacity
                            onPress={player.play}
                            style={{marginHorizontal:20}}
                        >
                            <FontAwesomeIcon
                                name='play'
                                color='white'
                                size={50}
                            />
                        </TouchableOpacity>
                }
                <TouchableOpacity
                    onPress={player.increaseTime}
                    style={styles.button}
                >
                    <FontAwesomeIcon
                        name='rotate-right'
                        size={50}
                        color='white'
                    />
                    <Text style={{position:'absolute', alignSelf:'center', marginTop:1, color:'white', fontSize:12}}>{player.timeRate}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.actionButtonsOther}>
                {/* <TouchableOpacity
                    onPress={player.shuffle}
                    style={styles.button}
                >
                    <EntypoIcon
                        name='shuffle'
                        color={player.isShuffle === true ? '#3399ff' : 'white'}
                        size={50}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={player.loop}
                    style={styles.button}
                >
                    <MaterialIcon
                        name='loop'
                        color={player.isLoop === true ? '#3399ff' : 'white'}
                        size={50}
                    />
                </TouchableOpacity> */}
                <TouchableOpacity
                    onPress={player.stop}
                    style={styles.button}
                    disabled={player.isDisabledButtonStop}
                >
                    <EntypoIcon
                        name='controller-stop'
                        color={player.status === 'stop' ? 'red' : 'white'}
                        size={50}
                    />
                </TouchableOpacity>
                {
                    player.isMuted === false ? (
                        <TouchableOpacity
                            onPress={player.mute}
                            style={styles.button}
                        >
                            <EntypoIcon
                                name='sound'
                                color={'white'}
                                size={50}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={player.unmute}
                            style={styles.button}
                        >
                            <EntypoIcon
                                name='sound-mute'
                                color={'red'}
                                size={50}
                            />
                        </TouchableOpacity>
                    )
                }
                <Slider
                    style={{width: '40%', height: 50}}
                    minimumValue={0}
                    maximumValue={100}
                    value={player.volume}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="gray"
                    thumbTintColor='#FFFFFF'
                    onSlidingComplete={(volume) => player.setVolume(volume)}
                />
            </View>
            <View style={styles.progressBar}>
                <Text style={styles.progressBarText}>{player.currentTimeString}</Text>
                <Slider
                    style={{width: '60%', height: 40}}
                    minimumValue={0}
                    maximumValue={player.duration}
                    value={player.currentTime}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="gray"
                    thumbTintColor='#FFFFFF'
                    onTouchStart={player.pause}
                    onTouchEnd={player.play}
                    onSlidingComplete={(seconds) => player.seekToTime(seconds)}
                />
                <Text style={styles.progressBarText}>{player.durationString}</Text>
            </View>
            <View style={styles.speed}>
                {
                    listSpeedValues.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.speedItem}
                            onPress={() => player.setSpeed(item.value)}>
                            <Text style={{
                                color: player.speed === item.value ? 'cyan' : 'white'
                            }}>{item.text}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex:1,
        justifyContent:'center',
        backgroundColor:"#111",
        
    },
    name: {
        color: '#fff',
        fontSize:16
    },
    progressBar: {
        flexDirection: 'row',
        marginVertical:5,
        marginHorizontal:windowWidth*0.01,
    },
    progressBarText: {
        color: 'white',
        alignSelf: 'center',
    },
    speed: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: windowHeight*0.04,
    },
    speedItem: {
        width: windowWidth*0.13,
    },
    actionButtonsOther: {
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:10,
    },
    button: {
        justifyContent: 'center',
    }
});

export default TrackPlay;