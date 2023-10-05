import React, { useState } from "react";
import { Input, Pressable } from "native-base";
import Lupa from "../../assets/icons/Lupa";

interface SearchInputProps {
  searchText: string;
  setSearchText: (text: string) => void;
  onSearch: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchText,
  setSearchText,
  onSearch,
}) => {
  const [localSearchText, setLocalSearchText] = useState(searchText);

  return (
    <Input
      pt={3}
      pb={3}
      borderRadius={"none"}
      borderWidth={"none"}
      backgroundColor={"#5B5C66"}
      placeholder="Поиск"
      onChangeText={(text) => {
        setLocalSearchText(text);
      }}
      value={localSearchText}
      mb={3}
      InputRightElement={
        <Pressable
          mr={3}
          onPress={() => {
            setSearchText(localSearchText);
            onSearch(localSearchText);
          }}
        >
          <Lupa />
        </Pressable>
      }
    />
  );
};

export default SearchInput;
