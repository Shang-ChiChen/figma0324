import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable } from "native-base"
import StarRating from "../starRating";

const Info = ({album, myh}) => {
  return(
      <HStack bg='#fff'>
        <VStack justifyContent="space-around">
          <StarRating value={album.stars}/>
          <Text style={{fontSize: 16, fontWeight: '700'}}>{album.title}</Text>
          <Text opacity={0.5} style={{fontSize: 12, fontWeight: '700'}}>{album.artist}</Text>
        </VStack>
      </HStack>
  )
};
const AlbumDetail = ({ album, navigation, myh}) => {
  return(
    <Box style={{flex: 1, flexDirection: "column", justifyContent: "space-between" }} bg="#fff" marginRight="16px" width="140px" height={myh}>

<Box bg="#fff" style={{shadowColor: "#414141",
shadowOffset: {
	width: 0,
	height: 16,
},
shadowOpacity: 0.1,
shadowRadius: 32,

elevation: 5,
borderTopRightRadius: 6,
borderBottomRightRadius: 6,
borderTopLeftRadius: 2,
borderBottomLeftRadius: 2,
width: 140,
height: 200
}}>
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
            <Image
              source={{ uri: album.image }}
              alt="album"
              size="xl"
              width="140px"
              height="200px"
            />            
        </Pressable>
        </Box>
        <Info album={album} myh={myh}/>
        </Box>
  )};

export default AlbumDetail;
