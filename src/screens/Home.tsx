import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import UserItemRow from '../components/UserItemRow';
import UserModal from '../modals/UserModal';
import { getUsersData } from '../services/AppService';
import { UserDataTypes } from '../types/UserDataTypes';

export const Home: React.FC = () => {
  const [pageCount, setPageCount] = useState<number>(1);
  const [usersData, setUsersData] = useState<UserDataTypes[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<UserDataTypes | null>(null);

  const getUsers = useCallback(async () => {
    const result = await getUsersData(pageCount);
    setUsersData(
      pageCount === 1 ? result?.results : [...usersData, ...result?.results],
    );
  }, [pageCount]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const loadMoreData = () => {
    setPageCount(pageCount + 1);
    getUsers();
  };

  const onItemPress = (item: UserDataTypes) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }: { item: UserDataTypes }) => {
    return (
      <UserItemRow
        item={item}
        onItemPress={() => onItemPress(item)}
        onItemLongPress={() => onItemPress(item)}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={usersData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0}
        onEndReached={loadMoreData}
      />
      {modalVisible && (
        <UserModal
          modalVisible={modalVisible}
          item={selectedItem}
          closeModal={() => {
            setModalVisible(false);
          }}
        />
      )}
    </View>
  );
};
