import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {withTheme} from 'react-native-elements';
import {appStyles} from '../utils/styles';

const Profile = ({theme}) => {
  const {colors} = theme;
  return (
    <SafeAreaView
      style={[appStyles.container, {backgroundColor: colors.background}]}>
      <StatusBar backgroundColor={colors.background} />
    </SafeAreaView>
  );
};

export default withTheme(Profile);
