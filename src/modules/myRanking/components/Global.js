import React from 'react';
import {ScrollView, View} from 'react-native';
import TopUsers from './TopUsers';
import UserList from './UserList';

const Global = () => {
  return (
    <ScrollView>
      <TopUsers />
      <UserList />
    </ScrollView>
  );
};

export default Global;
