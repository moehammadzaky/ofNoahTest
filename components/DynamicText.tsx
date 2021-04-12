import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Text } from "@chakra-ui/react"
import { SimpleGrid } from "@chakra-ui/react"


const DynamicText = forwardRef((props, ref) =>  {
 
  const [value, setValue] = useState();
  useImperativeHandle(ref, () => ({

    changeValue (value)  {
      setValue(value);
    }

  }));
  return(
    <SimpleGrid columns={1} spacing={10}>
      <Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>{value}</Text>
    </SimpleGrid>
  ) 
})

export default DynamicText
