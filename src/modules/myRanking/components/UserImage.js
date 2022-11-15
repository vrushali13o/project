import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, withTheme} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserImage = ({theme, image, rank, points, name}) => {
  const {colors} = theme;

  const renderIconName = userRank => {
    switch (userRank) {
      case 1:
        return 'crown';
      case 2:
        return 'arrow-up-bold-outline';
      case 3:
        return 'arrow-down-bold-outline';
    }
  };

  const style = Object.assign({}, styles.container, {
    alignSelf: rank === 1 ? 'flex-start' : 'flex-end',
  });

  const rankStyle = Object.assign({}, styles.numberContainer, {
    height: rank === 1 ? 40 : 30,
    width: rank === 1 ? 40 : 30,
  });

  const nameLabel = Object.assign({}, {fontSize: rank === 1 ? 18 : 14});

  const text = Object.assign({}, styles.text, {fontSize: rank === 1 ? 25 : 18});

  return (
    <View style={style}>
      <Icon
        name={renderIconName(rank)}
        color={rank === 3 ? colors.error : colors.activeColor}
        size={rank === 1 ? 60 : 30}
      />
      <FastImage
        source={image}
        style={rank === 1 ? styles.topperImage : styles.image}
        resizeMode={'stretch'}
      />
      <View
        style={[
          rankStyle,
          {backgroundColor: rank === 1 ? colors.activeColor : colors.white},
        ]}>
        <Text style={text}>{rank}</Text>
      </View>
      <Text style={[nameLabel, {color: colors.white}]}>{name}</Text>
      <Text style={[nameLabel, {color: colors.activeColor}]}>{points}</Text>
    </View>
  );
};

export default withTheme(UserImage);

const styles = StyleSheet.create({
  topperImage: {
    height: 130,
    width: 130,
    borderRadius: 100,
  },
  image: {height: 100, width: 100, borderRadius: 100},
  numberContainer: {
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
    position: 'relative',
    bottom: 20,
  },
  text: {fontWeight: 'bold'},
  container: {alignItems: 'center'},
});
