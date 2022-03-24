import React from "react";
import { Box, HStack, VStack, Center, ScrollView, Text } from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <ScrollView bg="#ffffff" showsVerticalScrollIndicator={false}>
<VStack>
    <Box marginLeft="20px">
        <Text style={{fontSize: 24, fontWeight: '700', paddingTop: 6, height: 28, marginTop: 8, marginBottom: 16}}>Popular Books</Text>
      <AlbumList 
      list={albumData.PBList}
    navigation={navigation}
    myh="256px"
    />
    <Text style={{fontSize: 24, fontWeight: '700', paddingTop: 6, height: 28, marginTop: 16, marginBottom: 16}}>Newest</Text>
    <AlbumList 
      list={albumData.NewestList}
    navigation={navigation}
    myh="278px"
    />
    </Box>
    </VStack>
  </ScrollView>
  );
};

export default AlbumScreen;
