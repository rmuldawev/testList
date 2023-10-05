import React, { FC, useEffect, useState } from "react";
import { getPosts, setSortOrder } from "../store/ListSlice";
import { ScrollView, Center, Pressable, Text, HStack } from "native-base";
import { useAppDispatch, useAppSelector } from "../store";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchInput from "../components/SearchInput/SearchInput";
import TableHeader from "../components/TableHeader/TableHeader";
import TableRow from "../components/TableRow/TableRow";

const PostList: FC = () => {
  const { bottom, top } = useSafeAreaInsets();
  const paddingStyle = { paddingTop: top + 15, paddingBottom: bottom + 15 };
  const dispatch = useAppDispatch();
  const sortOrder = useAppSelector((state) => state.data.sortOrder);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [activePage, setActivePage] = useState(0);
  const itemsPerPage = 10;

  const onPageChange = (newPage: number) => {
    setActivePage(newPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await dispatch(getPosts());
        setData(res.payload);
        console.log("Полученные посты", res.payload);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  const from = activePage * itemsPerPage;
  const to = (activePage + 1) * itemsPerPage;

  const handleSort = (field: string) => {
    const sortedData = [...data];
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";

    if (field === "id") {
      sortedData.sort((a, b) => {
        if (newSortOrder === "asc") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
    } else if (field === "title") {
      sortedData.sort((a, b) => {
        if (newSortOrder === "asc") {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      });
    } else if (field === "body") {
      sortedData.sort((a, b) => {
        if (newSortOrder === "asc") {
          return a.body.localeCompare(b.body);
        } else {
          return b.body.localeCompare(a.body);
        }
      });
    }

    setData(sortedData);
    dispatch(setSortOrder(newSortOrder));
  };

  const filterData = () => {
    return data.slice(from, to).filter((item) => {
      return (
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.body.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 0; i < pageCount; i++) {
      pageNumbers.push(
        <Pressable p={"5px"} m={"2px"} key={i} onPress={() => onPageChange(i)}>
          <Text style={{ color: activePage === i ? "#35db53" : "#000" }}>
            {i + 1}
          </Text>
        </Pressable>
      );
    }

    return pageNumbers;
  };

  return (
    <ScrollView pr={5} pl={5} flex={1} bg={"#ffffff"} style={paddingStyle}>
      <SearchInput
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={filterData}
      />
      <Center overflow={"hidden"}>
        <TableHeader handleSort={handleSort} sortOrder={sortOrder} />
        {filterData().map((item) => (
          <TableRow key={item.id} item={item} />
        ))}
        <HStack>
          <Pressable
            onPress={() => onPageChange(activePage - 1)}
            disabled={activePage === 0}
            style={{ margin: 5 }}
          >
            <Text>Назад</Text>
          </Pressable>
          {renderPageNumbers()}
          <Pressable
            onPress={() => onPageChange(activePage + 1)}
            disabled={activePage === pageCount - 1}
            style={{ margin: 5 }}
          >
            <Text>Далее</Text>
          </Pressable>
        </HStack>
      </Center>
    </ScrollView>
  );
};

export default PostList;
