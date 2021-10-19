import { Stack, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import { ItemRarities } from "./ItemRarities";
export const CategoryRarities = ({ category }) => {
   console.log(category);
   return (
      <Stack>
         <Stack>
            <Heading textAlign="center" as="h1" size="lg">
               {category.attribute}
            </Heading>
            <Grid templateColumns="repeat(5, 1fr)" gap={2}>
               {category.items.map((item) => {
                  return <ItemRarities item={item} />;
               })}
            </Grid>
         </Stack>
      </Stack>
   );
};
