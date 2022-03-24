import React from 'react';
import { Linking } from 'react-native';
import { Center, ScrollView, Box, AspectRatio, Text, Heading, Image, Button } from "native-base";
import StarRating from "../starRating";

const DetailScreen = ({ route }) => {
  const { title, 
    artist,
    price,
    url,
    image,
    stars,
    description
  } = route.params;
  return (
    <Center bg="#fff">
      <ScrollView showsVerticalScrollIndicator={false}>

          <Center>
          <Box bg="#fff" style={{shadowColor: "#414141",
shadowOffset: {
	width: 0,
	height: 16,
},
shadowOpacity: 0.1,
shadowRadius: 32,

elevation: 5,
borderTopRightRadius: 12,
borderBottomRightRadius: 12,
borderTopLeftRadius: 2,
borderBottomLeftRadius: 2,
width: 210,
height: 300,
marginTop: 8, 
}}>
          <Image
            source={{uri: image }}
            alt='albumImage'
            style={{height: 300, width: 210,}}
          />
          </Box>
            <Text style={{fontSize: 24, fontWeight: "700", color:"#000" ,marginTop: 28, paddingTop: 1}}>{title}</Text>
            <Text style={{fontSize: 14, fontWeight: "400", color:"#666666"}}>{artist}</Text>
            <Text style={{fontSize: 14, fontWeight: "400"}}><StarRating value={stars}/>{stars}.0<Text color="#666666">/ 5.0</Text ></Text>
            <Text style={{fontSize: 14, fontWeight: "400", textAlign: 'center', height: 72, width: 320, marginTop: 16}}>A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.</Text>
          </Center>
          <Center>
          <Button bg="#6200EE"
            style={{marginTop: 28, marginBottom: 62, height: 36, width: 190}}
            onPress={() => Linking.openURL(url)}
          >
            <Text color="#fff" style={{fontSize: 14, fontWeight: "400"}}>BUY NOW FOR ${price}</Text>
          </Button>
          </Center>   
      </ScrollView>      
    </Center>

  );
}

export default DetailScreen;
