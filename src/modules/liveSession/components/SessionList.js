import React from 'react';
import {FlatList} from 'react-native';
import Session from './Session';

const list = [
  {
    id: 'hgvhgfhfhgfh',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: require('../../../assets/fit4.jpg'),

    label: 'Yoga for Stress relief',
  },
  {
    id: 'hgvnbnbnbnb',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: require('../../../assets/fit1.jpg'),
    label: 'Yoga for Stress relief',
  },
  {
    id: 'hdfgfjhbbn',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: require('../../../assets/fit2.jpg'),
    label: 'Yoga for Stress relief',
  },
  {
    id: 'hkjhgctfcg',
    video:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: require('../../../assets/fit3.jpg'),
    label: 'Yoga for Stress relief',
  },
];

const SessionList = () => {
  const renderItem = ({item}) => {
    return <Session item={item} />;
  };

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default SessionList;
