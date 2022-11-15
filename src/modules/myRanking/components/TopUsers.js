import React from 'react';
import {StyleSheet, View} from 'react-native';
import UserImage from './UserImage';

const list = [
  {
    image: require('../../../assets/userTwo.jpg'),
    rank: 2,
    name: 'Nadeem Shaikh',
    points: '400000',
  },
  {
    image: require('../../../assets/userOne.jpg'),
    rank: 1,
    name: 'Kartikey',
    points: '500000',
  },
  {
    image: require('../../../assets/userThree.jpg'),
    rank: 3,
    name: 'Atul Pandey',
    points: '300000',
  },
];

const TopUsers = () => {
  return (
    <View style={styles.container}>
      {list.map(one => (
        <UserImage
          image={one.image}
          rank={one.rank}
          name={one.name}
          points={one.points}
        />
      ))}
    </View>
  );
};

export default TopUsers;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 350,
    padding: 10,
    justifyContent: 'space-between',
  },
});
