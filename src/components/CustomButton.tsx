/**
 * Custom Button Component
 * Reusable button following the app design system
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../styles/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
}

export function CustomButton({ 
  title, 
  onPress, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  style 
}: ButtonProps): React.JSX.Element {
  
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      ...styles.button,
      ...styles[`${size}Button`],
      ...styles[`${variant}Button`],
    };

    if (disabled) {
      return { ...baseStyle, ...styles.disabledButton };
    }

    return baseStyle;
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      ...styles.buttonText,
      ...styles[`${size}Text`],
      ...styles[`${variant}Text`],
    };

    if (disabled) {
      return { ...baseStyle, ...styles.disabledText };
    }

    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.lg,
    ...shadows.sm,
  },
  
  // Size variants
  smallButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  mediumButton: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  largeButton: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
  },

  // Style variants
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
  },

  // Disabled state
  disabledButton: {
    backgroundColor: colors.gray300,
    borderColor: colors.gray300,
  },

  // Text styles
  buttonText: {
    fontWeight: fontWeight.semibold,
    textAlign: 'center',
  },
  
  // Text size variants
  smallText: {
    fontSize: fontSize.sm,
  },
  mediumText: {
    fontSize: fontSize.md,
  },
  largeText: {
    fontSize: fontSize.lg,
  },

  // Text color variants
  primaryText: {
    color: colors.white,
  },
  secondaryText: {
    color: colors.white,
  },
  outlineText: {
    color: colors.primary,
  },

  // Disabled text
  disabledText: {
    color: colors.gray500,
  },
});
