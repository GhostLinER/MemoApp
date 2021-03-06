import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

const Textform = ({ children }) => <Text style={styles.text}>{children}</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: theme.colors.secondary,
    textAlign: 'left',
    marginBottom: 14,
  },
});

export default memo(Textform);
