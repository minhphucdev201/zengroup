import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import data from '../data';
import SlideItem from './SlideItem';
const Slider = () => {
  return (
    <>
      <FlatList
        data={data}
        
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
              pagingEnable
              showsHorizontalScrollIndicator={false}
      />
    </>
  );
}

export default Slider

const styles = StyleSheet.create({})