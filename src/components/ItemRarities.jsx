import { Box, Heading, Text, Stack } from "@chakra-ui/layout";
import React from "react";

export const ItemRarities = ({ item }) => {
   return (
      <Box style={{ textAlign: "center", backgroundColor: "#fff" }}>
         <Heading as="h2" style={{ fontWeight: 'bold' }} size="md">
            {item.name}
         </Heading>
         <Stack width="50%" margin="auto">
            <img src= {require(`../${item.path}`).default}  alt="foto" />
            <Text style={{ color: item.color, fontWeight: 'bold'}}>{item.rarity}</Text>
            <Text style={{ color: item.color }}>{item.percentage}%</Text>
            <Text style={{ color: 'black' }}>Stock:{item.stock}/{item.total}</Text>
         </Stack>
      </Box>
   );
};
