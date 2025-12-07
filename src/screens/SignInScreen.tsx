import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../styles/theme';

interface Props {
  onSignInSuccess: () => void;
  onNavigateToSignUp: () => void;
}

export function SignInScreen({ onSignInSuccess, onNavigateToSignUp }: Props): React.JSX.Element {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [mobileError, setMobileError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateMobileNumber = (number: string) => {
    const cleanNumber = number.replace(/\s/g, '');
    if (cleanNumber.length < 10) {
      return 'Please enter a valid mobile number';
    }
    return '';
  };

  const validatePassword = (pass: string) => {
    if (pass.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return '';
  };

  const formatMobileNumber = (text: string) => {
    // Remove all non-digits
    const cleaned = text.replace(/\D/g, '');
    
    // Format as XXX XXXX XXXX (Bangladesh format)
    const match = cleaned.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/);
    if (match) {
      const formatted = [match[1], match[2], match[3]].filter(Boolean).join(' ');
      return formatted;
    }
    return cleaned;
  };

  const handleMobileNumberChange = (text: string) => {
    const formatted = formatMobileNumber(text);
    setMobileNumber(formatted);
    
    if (mobileError) {
      const error = validateMobileNumber(text);
      setMobileError(error);
    }
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    
    if (passwordError) {
      const error = validatePassword(text);
      setPasswordError(error);
    }
  };

  const handleSignIn = () => {
    const mobileErr = validateMobileNumber(mobileNumber);
    const passErr = validatePassword(password);
    
    setMobileError(mobileErr);
    setPasswordError(passErr);
    
    if (!mobileErr && !passErr) {
      // Simulate sign in - in real app, call API
      // Accept any valid mobile number and password for demo purposes
      const cleanMobile = mobileNumber.replace(/\s/g, '');
      if (cleanMobile.length >= 10 && password.length >= 6) {
        onSignInSuccess();
      } else {
        setMobileError('The mobile number you entered is not registered, please check again');
        setPasswordError('The password you entered is incorrect, please check again');
      }
    }
  };

  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign In', 'Google sign in would be implemented here');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onNavigateToSignUp}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Image source={require('../assets/logo/logow.png')} style={styles.logoimg} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Sign In Card */}
        <View style={styles.signInCard}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Enter your sign in details below</Text>

          {/* Mobile Number Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
              Mobile Number <Text style={styles.required}>*</Text>
            </Text>
            <View style={[
              styles.inputWrapper,
              mobileError ? styles.inputError : {}
            ]}>
              <View style={styles.countryCode}>
                <Text style={styles.flagEmoji}>🇧🇩</Text>
                <Text style={styles.countryCodeText}>+88</Text>
              </View>
              <TextInput
                style={styles.textInput}
                value={mobileNumber}
                onChangeText={handleMobileNumberChange}
                placeholder="018 7451 7426"
                placeholderTextColor={colors.textLight}
                keyboardType="phone-pad"
                maxLength={13}
              />
            </View>
            {mobileError ? (
              <View style={styles.errorContainer}>
                <Text style={styles.errorIcon}>⚠</Text>
                <Text style={styles.errorText}>{mobileError}</Text>
              </View>
            ) : null}
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
              Password <Text style={styles.required}>*</Text>
            </Text>
            <View style={[
              styles.inputWrapper,
              passwordError ? styles.inputError : {}
            ]}>
              <TextInput
                style={[styles.textInput, styles.passwordInput]}
                value={password}
                onChangeText={handlePasswordChange}
                placeholder={showPassword ? "Input" : "••••••••••"}
                placeholderTextColor={colors.textLight}
                secureTextEntry={!showPassword}
              />
            <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                <Image source={require('../assets/signup/passeye.png')} style={{ width: 16, height: 16 }} />
            </TouchableOpacity>
            </View>
            {passwordError ? (
              <View style={styles.errorContainer}>
                <Text style={styles.errorIcon}>⚠</Text>
                <Text style={styles.errorText}>{passwordError}</Text>
              </View>
            ) : null}
          </View>

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          {/* Sign In Button */}
          <TouchableOpacity 
            style={styles.signInButton}
            onPress={handleSignIn}
          >
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Google Sign In */}
          <TouchableOpacity 
            style={styles.googleButton}
            onPress={handleGoogleSignIn}>
            <Image source={require('../assets/signin/googlelogo.png')} style={{ width: 20, height: 20, marginRight: spacing.sm }} />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: 140,
    paddingBottom: 60,
    paddingHorizontal: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: spacing.sm,
    padding: spacing.md,
  },
  backIcon: {
    fontSize: 24,
    color: colors.white,
    fontWeight: fontWeight.bold,
  },
  logo: {
    width: 160,
    height: 90,
    resizeMode: 'contain',
  },
  logoimg: {
    width: 160,
    height: 90,
    resizeMode: 'contain',
  },
  scrollView: {
    flex: 1,
  },
  signInCard: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 10,
    borderRadius: borderRadius.xxl,
    padding: spacing.lg,
    ...shadows.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: fontWeight.bold,
    color: colors.black,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  inputContainer: {
    marginBottom: spacing.lg,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: fontWeight.medium,
    color: colors.black,
    marginBottom: spacing.sm,
  },
  required: {
    color: colors.error,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: borderRadius.md,
    backgroundColor: colors.gray50,
    minHeight: 56,
  },
  inputError: {
    borderColor: colors.error,
    borderWidth: 2,
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    borderRightWidth: 1,
    borderRightColor: colors.gray300,
  },
  flagEmoji: {
    fontSize: 20,
    marginRight: spacing.xs,
  },
  countryCodeText: {
    fontSize: 16,
    color: colors.black,
    fontWeight: fontWeight.medium,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeButton: {
    position: 'absolute',
    right: spacing.md,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIcon: {
        paddingRight: spacing.md,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  errorIcon: {
    fontSize: 16,
    color: colors.error,
    marginRight: spacing.xs,
  },
  errorText: {
    fontSize: 12,
    color: colors.error,
    flex: 1,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: spacing.xl,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: fontWeight.medium,
  },
  signInButton: {
    backgroundColor: '#805CF6',
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.md,
    alignItems: 'center',
    marginBottom: spacing.lg,
    ...shadows.md,
  },
  signInButtonText: {
    fontSize: 18,
    fontWeight: fontWeight.bold,
    color: colors.white,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gray300,
  },
  dividerText: {
    fontSize: 16,
    color: colors.textLight,
    marginHorizontal: spacing.md,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.white,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: fontWeight.medium,
    color: colors.black,
  },
});
