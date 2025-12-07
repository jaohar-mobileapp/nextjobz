import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../styles/theme';

interface Props {
  phoneNumber: string;
  onVerificationSuccess: () => void;
  onNavigateBack: () => void;
}

export function OTPVerificationScreen({ phoneNumber, onVerificationSuccess, onNavigateBack }: Props): React.JSX.Element {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [resendTimer, setResendTimer] = useState(55);
  const [canResend, setCanResend] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleOtpChange = (value: string, index: number) => {
    if (value.length > 1) return; // Prevent multiple characters
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setHasError(false);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join('');
    if (otpString.length !== 4) {
      setHasError(true);
      return;
    }

    setIsVerifying(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      setIsVerifying(false);
      if (otpString === '1234') { // Demo: accept 1234 as valid OTP
        onVerificationSuccess();
      } else {
        setHasError(true);
        setOtp(['', '', '', '']);
        inputRefs.current[0]?.focus();
        Alert.alert('Invalid OTP', 'Please enter the correct verification code.');
      }
    }, 1500);
  };

  const handleResend = () => {
    if (canResend) {
      setResendTimer(55);
      setCanResend(false);
      // Here you would normally trigger a new OTP request
      Alert.alert('OTP Sent', 'A new verification code has been sent to your phone.');
    }
  };

  const handleNumberPadPress = (digit: string) => {
    const currentIndex = otp.findIndex(val => val === '');
    if (currentIndex !== -1) {
      handleOtpChange(digit, currentIndex);
    }
  };

  const handleBackspace = () => {
    const lastFilledIndex = otp.map((val, index) => val ? index : -1).filter(i => i !== -1).pop();
    if (lastFilledIndex !== undefined) {
      const newOtp = [...otp];
      newOtp[lastFilledIndex] = '';
      setOtp(newOtp);
      inputRefs.current[lastFilledIndex]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      
      {/* Purple Header */}
      <View style={styles.purpleHeader}>
        <TouchableOpacity style={styles.backButton} onPress={onNavigateBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Image source={require('../assets/logo/logow.png')} style={styles.logo} />
      </View>

      {/* White Card Container */}
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          {/* Phone Icon */}
          <View style={styles.phoneIconContainer}>
            <Image source={require('../assets/signup/otpmobileicon.png')} style={styles.phoneIcon} />
          </View>
          
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.subtitle}>
            We sent a code to {phoneNumber}
          </Text>
        </View>

        {/* OTP Input Fields */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              style={[
                styles.otpInput,
                hasError && styles.otpInputError,
                digit && styles.otpInputFilled
              ]}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
              keyboardType="numeric"
              maxLength={1}
              selectTextOnFocus
            />
          ))}
        </View>

        {hasError && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Invalid code</Text>
            <TouchableOpacity onPress={() => {
              setHasError(false);
              setOtp(['', '', '', '']);
              inputRefs.current[0]?.focus();
            }}>
              <Text style={styles.tryAgainText}>Try again</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Resend Timer */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Resend code in <Text style={styles.timerText}>{resendTimer} s</Text>
          </Text>
        </View>

        {/* Verify Button */}
        <TouchableOpacity 
          style={[styles.verifyButton, isVerifying && styles.verifyButtonDisabled]} 
          onPress={handleVerify}
          disabled={isVerifying}
        >
          <Text style={styles.verifyButtonText}>
            {isVerifying ? 'Verifying...' : 'Verify'}
          </Text>
        </TouchableOpacity>

        {/* Custom Number Pad */}
        <View style={styles.numberPad}>
          <View style={styles.numberRow}>
            {['1', '2', '3'].map((num) => (
              <TouchableOpacity
                key={num}
                style={styles.numberButton}
                onPress={() => handleNumberPadPress(num)}
              >
                <Text style={styles.numberText}>{num}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <View style={styles.numberRow}>
            {['4', '5', '6'].map((num) => (
              <TouchableOpacity
                key={num}
                style={styles.numberButton}
                onPress={() => handleNumberPadPress(num)}
              >
                <Text style={styles.numberText}>{num}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <View style={styles.numberRow}>
            {['7', '8', '9'].map((num) => (
              <TouchableOpacity
                key={num}
                style={styles.numberButton}
                onPress={() => handleNumberPadPress(num)}
              >
                <Text style={styles.numberText}>{num}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <View style={styles.numberRow}>
            <TouchableOpacity style={styles.numberButton}>
              <Text style={styles.numberText}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numberButton}
              onPress={() => handleNumberPadPress('0')}
            >
              <Text style={styles.numberText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numberButton}
              onPress={handleBackspace}
            >
              <Text style={styles.backspaceText}>⌫</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  purpleHeader: {
    backgroundColor: colors.primary,
    paddingTop: 90,
    paddingBottom: 60,
    paddingHorizontal: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: spacing.lg,
    padding: spacing.sm,
  },
  backButtonText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: fontWeight.bold,
  },
  logo: {
    height: 52,
    width: 160,
    resizeMode: 'center',
  },
  cardContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -10,
    borderRadius: borderRadius.xxl,
    padding: spacing.md,
    ...shadows.lg,
  },
  cardHeader: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  phoneIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  phoneIcon: {
    width: 32,
    height: 32,
    },
  title: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.black,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: borderRadius.md,
    textAlign: 'center',
    fontSize: fontSize.xl,
    fontWeight: fontWeight.semibold,
    color: colors.black,
    backgroundColor: colors.white,
  },
  otpInputFilled: {
    borderColor: colors.primary,
    backgroundColor: colors.primary + '10',
  },
  otpInputError: {
    borderColor: colors.error,
    backgroundColor: colors.error + '10',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  errorText: {
    color: colors.error,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
  },
  tryAgainText: {
    color: colors.primary,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  resendText: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
  timerText: {
    color: colors.primary,
    fontWeight: fontWeight.medium,
  },
  verifyButton: {
    backgroundColor: '#805CF6',
    paddingVertical: spacing.md + 2,
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    marginBottom: spacing.xxl,
    ...shadows.md,
  },
  verifyButtonDisabled: {
    backgroundColor: colors.gray400,
  },
  verifyButtonText: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    color: colors.white,
  },
  numberPad: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.lg,
  },
  numberButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  numberText: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.medium,
    color: colors.black,
  },
  backspaceText: {
    fontSize: fontSize.lg,
    color: colors.black,
  },
});
