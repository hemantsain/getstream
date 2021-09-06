import React, { memo } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../hooks/ThemeContext';

const UserItemRow = props => {
  const { picture, name, phone } = props?.item;
  const { onItemPress, onItemLongPress } = props;

  const { colors } = useTheme();

  const backgroundStyle = {
    backgroundColor: colors.background,
  };
  const textColorStyle = {
    color: colors.text,
  };

  return (
    <TouchableOpacity
      style={[styles.outerContainer, { ...backgroundStyle }]}
      onPress={onItemPress}
      onLongPress={onItemLongPress}>
      <View style={styles.rowContainer}>
        <View>
          <Image style={styles.avatarStyle} source={{ uri: picture?.medium }} />
        </View>
        <View style={styles.rightContainer}>
          <Text style={[styles.nameTextStyle, { ...textColorStyle }]}>
            {name?.title} {name?.first} {name?.last}
          </Text>
          <Text style={[styles.phoneTextStyle, { ...textColorStyle }]}>
            {phone}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default memo(UserItemRow);

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  avatarStyle: {
    width: 80,
    height: 90,
    borderRadius: 40,
  },
  rightContainer: {
    marginHorizontal: 12,
  },
  nameTextStyle: {
    fontSize: 18,
    fontWeight: '600',
  },
  phoneTextStyle: {
    fontSize: 16,
    fontWeight: '400',
  },
});
