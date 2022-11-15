import React from 'react';
import {StyleSheet, View} from 'react-native';
import User from './User';

const list = [
  {
    id: 'tyrtgf',
    user: 'You',
    points: '500000',
    lastActive: 'Last 1 week',
    rank: 50,
  },
  {
    id: 'fdtfvh',
    user: 'User 8',
    points: '490000',
    lastActive: 'Last 1 week',
    rank: 49,
  },
  {
    id: 'nbvhg',
    user: 'User 6',
    points: '480000',
    lastActive: 'Last 1 week',
    rank: 48,
  },
  {
    id: 'nbngfgh',
    user: 'User 3',
    points: '470000',
    lastActive: 'Last 1 week',
    rank: 47,
  },
  {
    id: 'nvhhg',
    user: 'User 5',
    points: '460000',
    lastActive: 'Last 1 week',
    rank: 46,
  },
  {
    id: 'tjhbhgf',
    user: 'User 7',
    points: '450000',
    lastActive: 'Last 1 week',
    rank: 45,
  },
];

const UserList = () => {
  return (
    <View style={styles.contaier}>
      {list.map((one, index) => (
        <User key={one.id} item={one} index={index} />
      ))}
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  contaier: {padding: 10},
});
