import React, { FC } from "react";
import { HStack, Pressable, Text } from "native-base";

interface TableHeaderProps {
  handleSort: (field: string) => void;
  sortOrder: string;
}

const TableHeader: FC<TableHeaderProps> = ({ handleSort, sortOrder }) => {
  return (
    <HStack justifyContent={"space-between"} bg={"#474955"}>
      <Pressable onPress={() => handleSort("id")} pl={1}>
        <Text color={"#ffffff"}>ID {sortOrder === "asc" ? "▲" : "▼"}</Text>
      </Pressable>
      <Pressable onPress={() => handleSort("title")} flex={1} pl={12}>
        <Text color={"#ffffff"}>
          Заголовок {sortOrder === "asc" ? "▲" : "▼"}
        </Text>
      </Pressable>
      <Pressable onPress={() => handleSort("body")} flex={1}>
        <Text color={"#ffffff"}>
          Описание {sortOrder === "asc" ? "▲" : "▼"}
        </Text>
      </Pressable>
    </HStack>
  );
};

export default TableHeader;
