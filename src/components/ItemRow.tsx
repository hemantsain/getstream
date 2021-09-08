import React, { memo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../hooks/ThemeContext';

type ItemRowProps = {
  title?: string,
  value?: string,
}
const ItemRow: React.FC<ItemRowProps> = (props: ItemRowProps) => {
  const { title, value } = props;

  const { colors } = useTheme();

  const textColorStyle = {
    color: colors.text,
  };

  return (
    <View style={styles.rowContainer}>
      <Text style={[styles.titleTextStyle, { ...textColorStyle }]}>
        {title}:{' '}
      </Text>
      <Text style={[styles.valueTextStyle, { ...textColorStyle }]}>
        {value}
      </Text>
    </View>
  );
};
export default memo(ItemRow);

const styles = StyleSheet.create({
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
  valueTextStyle: {
    fontSize: 16,
    fontWeight: '400',
  },
});
