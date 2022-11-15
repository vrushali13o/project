import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, withTheme} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const image = require('../../../assets/thumbsUp.png');

const User = ({theme, item, index}) => {
  const {colors} = theme;

  const renderIcon = itemIndex => {
    if (itemIndex % 3 === 0) {
      return <Icon name="arrow-right-bold" size={20} color={colors.white} />;
    } else if (itemIndex % 3 === 1) {
      return <Icon name="arrow-up-bold" size={20} color={colors.activeColor} />;
    } else if (itemIndex % 3 === 2) {
      return <Icon name="arrow-down-bold" size={20} color={colors.error} />;
    }
  };

  return (
    <View
      style={[
        styles.cotainer,
        {
          backgroundColor:
            index % 2 ? colors.evenBackgroundColor : colors.oddBackgroundColor,
        },
      ]}>
      <Text style={[styles.rank, {color: colors.white}]}>{item.rank}</Text>
      <>{renderIcon(index)}</>
      <FastImage source={image} style={styles.image} resizeMode="contain" />
      <View>
        <Text style={[styles.points, {color: colors.white}]}>{item.user}</Text>
        <Text>
          <Icon name="crown" color={colors.icon} />{' '}
          <Icon name="dumbbell" color={colors.grey3} />{' '}
          <Icon name="run" color={colors.white} />
        </Text>
        <Text style={{color: colors.white}}>{item.lastActive}</Text>
      </View>
      <Text style={[styles.points, {color: colors.activeColor}]}>
        {item.points} Pt
      </Text>
    </View>
  );
};

export default withTheme(User);

const styles = StyleSheet.create({
  cotainer: {
    marginTop: 10,
    borderRadius: 50,
    padding: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rank: {fontSize: 24},
  image: {width: 40, height: 40, borderRadius: 60},
  points: {fontSize: 18},
});
