import React, { memo } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';
import ItemRow from '../components/ItemRow';
import { useTheme } from '../hooks/ThemeContext';

const UserModal = props => {
  const { modalVisible, closeModal, item } = props;
  const { colors } = useTheme();

  const backgroundStyle = {
    backgroundColor: colors.background,
  };
  const textColorStyle = {
    color: colors.text,
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => closeModal(false)}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { ...backgroundStyle }]}>
            <TouchableOpacity
              style={styles.closeIconStyle}
              onPress={() => closeModal(false)}>
              <Text style={[styles.titleTextStyle, { ...textColorStyle }]}>
                X
              </Text>
            </TouchableOpacity>
            <View>
              <ItemRow
                title={'Name'}
                value={`${item?.name?.title} ${item?.name?.first} ${item?.name?.last}`}
              />
              <ItemRow title={'Email'} value={item?.email} />
              <ItemRow title={'City'} value={item?.location?.city} />
              <ItemRow title={'DOB'} value={item?.dob?.date} />
              <ItemRow title={'Gender'} value={item?.gender} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default memo(UserModal);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalView: {
    backgroundColor: '#F8F8FA',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  titleTextStyle: {
    fontSize: 18,
    fontWeight: '600',
  },
  closeIconStyle: {
    alignSelf: 'flex-end',
  },
});
