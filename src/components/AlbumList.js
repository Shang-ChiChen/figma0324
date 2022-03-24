import React from "react";
import { FlatList } from "react-native";
import AlbumDetail from "./AlbumDetail";

const AlbumList = ({ list, navigation, myh}) => {
  const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} myh={myh}/>;
  return (
    <FlatList
    horizontal
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      showsHorizontalScrollIndicator={false}
    />   
  );  
}

export default AlbumList;

