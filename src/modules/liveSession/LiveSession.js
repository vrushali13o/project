import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Badge, withTheme} from 'react-native-elements';
import SwitchSelector from 'react-native-switch-selector';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {appStyles} from '../utils/styles';
import SessionList from './components/SessionList';

const options = [
  {label: 'Live Session', value: 'L'},
  {label: 'Upcoming Session', value: 'U'},
  {label: 'Previous Session', value: 'P'},
];

const LiveSession = ({theme, navigation}) => {
  const {colors} = theme;

  const [selectedSwitch, setSelectedSwitch] = useState('L');

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Icon name="menu" size={35} color={colors.white} />,
      headerTitle: '',
      headerRightContainerStyle: styles.headerRightContainerStyle,
      headerRight: () => (
        <>
          <TouchableOpacity>
            <Icon
              name="bell"
              color={colors.white}
              size={20}
              style={styles.bell}
            />
            <Badge
              value={5}
              containerStyle={styles.containerStyle}
              status={'error'}
            />
          </TouchableOpacity>

          <Icon name="cog-outline" size={25} color={colors.white} />
        </>
      ),
      headerStyle: {backgroundColor: colors.background, elevation: 0},
    });
  }, [selectedSwitch]);

  return (
    <SafeAreaView
      style={[appStyles.container, {backgroundColor: colors.background}]}>
      <StatusBar backgroundColor={colors.background} />
      <View style={[appStyles.container, {backgroundColor: colors.background}]}>
        <View style={styles.container}>
          <SwitchSelector
            initial={0}
            onPress={value => {
              setSelectedSwitch(value);
            }}
            options={options}
            textColor={colors.white}
            selectedColor={colors.background}
            buttonColor={colors.white}
            backgroundColor={colors.iconBackgroundColor}
            height={45}
            fontSize={12}
          />
          <Badge value={15} status="error" containerStyle={styles.badge} />
        </View>
        {selectedSwitch === 'L' ? <SessionList /> : null}
      </View>
    </SafeAreaView>
  );
};

export default withTheme(LiveSession);

const styles = StyleSheet.create({
  headerRightContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bell: {marginRight: 16},
  containerStyle: {
    position: 'absolute',
    top: -8,
    right: 8,
  },
  badge: {position: 'absolute', top: 2, right: 10},
  container: {padding: 10},
});
