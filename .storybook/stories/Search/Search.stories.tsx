import React from 'react';
import {View} from 'react-native';
import Search from './Search';

const SearchMeta = {
  title: 'Search',
  component: Search,
  decorators: [
    Story => (
      <View style={{padding: 20}}>
        <Search textPlaceHolder={'Search an event'} />
      </View>
    ),
  ],
};

export default SearchMeta;
export const Basic = {};
