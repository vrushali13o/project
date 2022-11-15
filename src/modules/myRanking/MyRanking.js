import React, {useState} from 'react';
import {SafeAreaView, Text, StatusBar, StyleSheet, View} from 'react-native';
import {withTheme} from 'react-native-elements';
import SwitchSelector from 'react-native-switch-selector';
import {appStyles} from '../utils/styles';
import Global from './components/Global';
import Reward from './components/Reward';

const options = [
  {label: 'Global', value: 'global'},
  {label: 'Friends', value: 'friends'},
];

const MyRanking = ({theme}) => {
  const {colors} = theme;

  const [selectedSwitch, setSelectedSwitch] = useState('global');

  return (
    <SafeAreaView
      style={[appStyles.container, {backgroundColor: colors.background}]}>
      <StatusBar backgroundColor={colors.background} />
      <View style={[appStyles.container, {backgroundColor: colors.background}]}>
        <Reward />
        <View style={styles.container}>
          <SwitchSelector
            initial={0}
            onPress={value => setSelectedSwitch(value)}
            options={options}
            textColor={colors.white}
            selectedColor={colors.background}
            buttonColor={colors.white}
            backgroundColor={colors.iconBackgroundColor}
            height={50}
            fontSize={18}
          />
        </View>
        {selectedSwitch === 'global' ? (
          <Global />
        ) : (
          <Text style={{color: colors.white}}>friends</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default withTheme(MyRanking);

const styles = StyleSheet.create({
  container: {padding: 10, marginTop: 30},
});
