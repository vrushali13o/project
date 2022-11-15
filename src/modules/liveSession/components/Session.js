import React, {useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, withTheme} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import VideoPlayer from 'react-native-video-player';

const image = require('../../../assets/userOne.jpg');

const Session = ({theme, item}) => {
  const {colors} = theme;

  const videoRef = useRef();

  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <View style={styles.cotainer}>
      <VideoPlayer
        ref={videoRef}
        video={{
          uri: item.video,
        }}
        videoWidth={400}
        videoHeight={300}
        thumbnail={item.thumbnail}
        showDuration={true}
        pauseOnPress={true}
        style={styles.video}
        customStyles={{
          playButton: {
            backgroundColor: colors.activeColor,
            height: 50,
            width: 50,
            opacity: 0,
          },
        }}
        paused={false}
      />
      {showOverlay && (
        <View style={[styles.overlay, {backgroundColor: colors.background}]}>
          <TouchableOpacity
            onPress={() => {
              videoRef.current.onStartPress();
              setShowOverlay(false);
            }}
            style={[styles.icon, {backgroundColor: colors.activeColor}]}>
            <Icon name="play" size={30} color={colors.background} />
          </TouchableOpacity>
          <Text style={[styles.label, {color: colors.white}]}>
            {item.label}
          </Text>
          <Text style={[styles.time, {color: colors.grey5}]}>
            Beginners 60 mins - 5:00 PM - yoga
          </Text>
          <FastImage source={image} style={styles.image} />
          <Text style={{color: colors.grey5}}>With Tinku Maharaj</Text>
          <Icon name="video" size={30} color={'white'} />
        </View>
      )}
      {showOverlay && (
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors.activeColor}]}>
          <Text>Practice Now</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default withTheme(Session);

const styles = StyleSheet.create({
  image: {height: 30, width: 30, borderRadius: 30, marginTop: 10},
  button: {
    paddingVertical: 8,
    width: '60%',
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  icon: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 10,
  },
  label: {fontSize: 22, fontWeight: 'bold', marginBottom: 4},
  time: {fontSize: 16},
  overlay: {
    width: 400,
    height: 300,
    zIndex: 5,
    opacity: 0.8,
    position: 'absolute',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  cotainer: {marginBottom: 20},
  video: {zIndex: -1},
});
