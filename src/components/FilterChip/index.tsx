import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import importedStyles from './styles';

type FilterChipProps = {
  title: string;
  count: number;
  onPress: (title: string) => void;
  selected: boolean;
  height: number;
  width: number;
};

const FilterChip: React.FC<FilterChipProps> = React.memo(
  ({title, count, selected, onPress, height, width}: FilterChipProps) => {
    const styles = importedStyles(height, width, selected);
    return (
      <TouchableOpacity
        style={styles.parent}
        onPress={() => {
          onPress(title);
        }}
      >
        <Text style={styles.buttonText}>
          {title}({count})
        </Text>
      </TouchableOpacity>
    );
  },
);

export default FilterChip;
