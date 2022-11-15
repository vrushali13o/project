import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, withTheme} from 'react-native-elements';
import {appStyles} from '../../utils/styles';
import Icon from 'react-native-vector-icons/AntDesign';

const image = require('../../../assets/image.png');

const Reward = ({theme}) => {
  const {colors} = theme;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.subContainer,
          {backgroundColor: colors.iconBackgroundColor},
        ]}>
        <Image style={styles.image} source={image} resizeMode="contain" />
        <View style={appStyles.container}>
          <Text style={[styles.label, {color: colors.white}]}>Get Fit</Text>
          <Text style={[styles.label, {color: colors.activeColor}]}>
            Get Rewarded{'  '}
            <Icon name="doubleright" size={18} />
          </Text>
          <View style={styles.iconContainer}>
            <View style={[appStyles.row, appStyles.centerAlignment]}>
              <Icon
                name="Trophy"
                color={colors.activeColor}
                size={14}
                style={[styles.icon, {borderColor: colors.activeColor}]}
              />
              <Text style={[styles.text, {color: colors.activeColor}]}>
                Monthly Winners
              </Text>
            </View>
            <View style={[appStyles.row, appStyles.centerAlignment]}>
              <Icon
                name="gift"
                color={colors.activeColor}
                size={14}
                style={[styles.icon, {borderColor: colors.activeColor}]}
              />
              <Text style={[styles.text, {color: colors.activeColor}]}>
                Amazing Rewards
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withTheme(Reward);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 110,
    justifyContent: 'space-between',
  },
  image: {height: 150, width: 100, zIndex: 5, marginTop: 10, marginBottom: 10},
  label: {fontSize: 18, fontWeight: '700'},
  icon: {
    paddingHorizontal: 7,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 5,
  },
  text: {fontSize: 12, marginRight: 10},
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});
