import React from "react";
import { Box, Image } from "native-base"

const StarRating = ({value}) => {
  let stars = [];
  for(let i=0; i<value;i++){
    stars.push(<Image style={{marginRight: 4}} key={i} alt="s" source={require('../images/icon_star_filled.png')}></Image>);
  }
  for(let j=0; j<5-value;j++){
    stars.push(<Image style={{marginRight: 4}} key={(j+1)*100} alt="u" source={require('../images/icon_star_empty.png')}></Image>);
  }
  return(<Box style={{ flexDirection: "row", marginBottom: 8}}>{stars}</Box>
  )

};
export default StarRating;