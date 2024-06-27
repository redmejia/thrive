import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import { colors, spacing, fontSize } from "../../theme";

interface Props {
  onPress?: () => void;
  btnText: string;
  btnStyle?: StyleProp<ViewStyle>;
  btnTextStyle?: StyleProp<TextStyle>;
}

export const CustomButton = (props: Props) => {
  const { onPress, btnText = "text", btnStyle, btnTextStyle } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.btnContainer, btnStyle]}
    >
      <Text style={[styles.fontStyle, btnTextStyle]}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.light_blue,
    padding: spacing.sm,
    borderRadius: 10,
    alignItems: "center",
  },
  fontStyle: {
    fontSize: fontSize.xxxl,
  },
});
