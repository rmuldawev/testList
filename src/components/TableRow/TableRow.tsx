import React, { FC } from "react";
import { HStack, Box } from "native-base";

interface TableRowProps {
  item: {
    id: number;
    title: string;
    body: string;
  };
}

const TableRow: FC<TableRowProps> = ({ item }) => {
  return (
    <HStack key={item.body} maxHeight={"70px"}>
      <Box
        maxWidth={8}
        flex={1}
        alignItems={"center"}
        justifyContent={"center"}
        borderWidth={0.5}
      >
        {item.id}
      </Box>
      <Box w={150} borderWidth={0.5} overflow={"hidden"} p={1}>
        {item.title}
      </Box>
      <Box w={150} borderWidth={0.5} overflow={"hidden"} flex={1} p={1}>
        {item.body}
      </Box>
    </HStack>
  );
};

export default TableRow;
