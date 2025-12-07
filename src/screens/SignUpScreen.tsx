import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../styles/theme';

interface Props {
  onSignUpSuccess: () => void;
  onNavigateToSignIn: () => void;
  onNavigateToOTP: (phoneNumber: string) => void;
}

export function SignUpScreen({ onSignUpSuccess, onNavigateToSignIn, onNavigateToOTP }: Props): React.JSX.Element {
  const [resume, setResume] = useState<DocumentPickerResponse | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [formData, setFormData] = useState<{
  fullName: string;
  mobileNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  experienceType: string;
  resume: DocumentPickerResponse | null;
}>({
  fullName: '',
  mobileNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
  experienceType: 'experienced',
  resume: null,
});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreeToTerms, setAgreeToTerms] = useState(false);

   // -------- Resume picker function ----------
 const pickResume = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx],
      });

      setResume(res[0]); 
      setFormData(prev => ({ ...prev, resume: res[0] }));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) return;
      console.log(err);
    }
  };

  const removeResume = () => {
    setResume(null);
    setFormData(prev => ({ ...prev, resume: null }));
  };

  // Password strength validation
  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    
    if (password.length >= 4) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    return strength;
  };

  const getPasswordStrengthText = (strength: number): string => {
    const strengthTexts = ["Weak", "Okay", "Good", "Strong"];
    return strengthTexts[strength] || "Strong";
  };

  const getPasswordStrengthColor = (strength: number): string => {
    const colors = ["#ffcccc", "#ffe066", "#9bf6ff", "#2a9d8f"];
    return colors[strength] || "#2a9d8f";
  };

  const handlePasswordChange = (password: string) => {
    console.log("Current password:", password);
    updateFormData('password', password);
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);
    
    // Handle strength change
    if (strength === 3) {
      console.log("Password is strong!");
    }
  };

  const handleConfirmPasswordChange = (confirmPassword: string) => {
    updateFormData('confirmPassword', confirmPassword);
    
    // Check if passwords are equal
    const isEqual = formData.password === confirmPassword;
    if (isEqual && formData.password.length > 0) {
      console.log("Both passwords match!");
    }
  };
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\+88\d{11}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid Bangladeshi mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters with a combination of letters, numbers, and special characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!agreeToTerms) {
      newErrors.terms = 'Please agree to the Terms and Conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      // In a real app, you would make an API call here
      console.log('Sign up data:', formData);
      // Navigate to OTP verification screen
      onNavigateToOTP(formData.mobileNumber);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      
      {/* Purple Header */}
      <View style={styles.purpleHeader}>
        <TouchableOpacity style={styles.backButton} onPress={onNavigateToSignIn}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Image source={require('../assets/logo/logow.png')} style={styles.logo} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* White Card Container */}
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Text style={styles.title}>Set up your profile</Text>
            <Text style={styles.subtitle}>Showcase your skills and land your dream job.</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Full Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Full Name <Text style={styles.required}>*</Text>
              </Text>
              <View style={styles.inputContainer}>
                <Image
                  source={require('../assets/signup/iconname.png')}
                  style={{ width: 16, height: 20, marginLeft: spacing.md }}
                />
                <TextInput
                  style={[styles.inputWithIcon, errors.fullName && styles.inputError]}
                  placeholder="Enter full name"
                  placeholderTextColor={colors.textLight}
                  value={formData.fullName}
                  onChangeText={(value) => updateFormData('fullName', value)}
                />
              </View>
              {errors.fullName ? <Text style={styles.errorText}>{errors.fullName}</Text> : null}
            </View>

            {/* Mobile Number */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Mobile Number <Text style={styles.required}>*</Text>
              </Text>
              <View style={styles.phoneInputContainer}>
                <View style={styles.countryCode}>
                  <Text style={styles.flagEmoji}>🇧🇩</Text>
                  <Text style={styles.countryCodeText}> +88</Text>
                </View>
                <TextInput
                  style={[styles.phoneInput, errors.mobileNumber && styles.inputError]}
                  placeholder="018 7451 7426"
                  placeholderTextColor={colors.textLight}
                  value={formData.mobileNumber.replace('+88', '')}
                  onChangeText={(value) => updateFormData('mobileNumber', '+88' + value)}
                  keyboardType="phone-pad"
                />
              </View>
              {errors.mobileNumber ? <Text style={styles.errorText}>{errors.mobileNumber}</Text> : null}
            </View>

            {/* Email Address */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <View style={styles.inputContainer}>
                <Image source={require('../assets/signup/iconmail.png')} style={{ width: 16, height: 16, marginLeft: spacing.md }} />
                <TextInput
                  style={[styles.inputWithIcon, errors.email && styles.inputError]}
                  placeholder="nextjobz@gmail.com"
                  placeholderTextColor={colors.textLight}
                  value={formData.email}
                  onChangeText={(value) => updateFormData('email', value)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Password <Text style={styles.required}>*</Text>
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.inputWithIcon, errors.password && styles.inputError]}
                  placeholder="••••••••••"
                  placeholderTextColor={colors.textLight}
                  value={formData.password}
                  onChangeText={handlePasswordChange}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                  <Image source={require('../assets/signup/passeye.png')} style={{ width: 16, height: 16 }} />
                </TouchableOpacity>
              </View>
              
              {/* Password Strength Indicator */}
              {formData.password.length > 0 && (
                <View style={styles.passwordStrengthContainer}>
                  <View style={styles.passwordStrengthBar}>
                    <View 
                      style={[
                        styles.passwordStrengthFill, 
                        { 
                          width: `${(passwordStrength / 4) * 100}%`,
                          backgroundColor: getPasswordStrengthColor(passwordStrength)
                        }
                      ]} 
                    />
                  </View>
                  <Text style={[styles.passwordStrengthText, { color: getPasswordStrengthColor(passwordStrength) }]}>
                    {getPasswordStrengthText(passwordStrength)}
                  </Text>
                </View>
              )}
              
              <View style={styles.passwordHintContainer}>
                <Text style={styles.passwordHint}>
                  Password must be at least 8 characters with a combination of letters, numbers, and special characters
                </Text>
              </View>
              {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
            </View>

            {/* Confirm Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Confirm Password <Text style={styles.required}>*</Text>
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.inputWithIcon, errors.confirmPassword && styles.inputError]}
                  placeholder="••••••••••"
                  placeholderTextColor={colors.textLight}
                  value={formData.confirmPassword}
                  onChangeText={handleConfirmPasswordChange}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Image source={require('../assets/signup/passeye.png')} style={{ width: 16, height: 16 }} />
                </TouchableOpacity>
              </View>
              
              {/* Password Match Indicator */}
              {formData.confirmPassword.length > 0 && (
                <View style={styles.passwordMatchContainer}>
                  <Text style={[
                    styles.passwordMatchText,
                    { color: formData.password === formData.confirmPassword ? '#2a9d8f' : '#e76f51' }
                  ]}>
                    {formData.password === formData.confirmPassword ? '✓ Passwords match' : '✗ Passwords do not match'}
                  </Text>
                </View>
              )}
              
              {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}
            </View>

            {/* Experience Type */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Experience Type <Text style={styles.required}>*</Text>
              </Text>
              
              <TouchableOpacity
                style={[
                  styles.experienceOption,
                  formData.experienceType === 'experienced' && styles.experienceOptionActive
                ]}
                onPress={() => updateFormData('experienceType', 'experienced')}
              >
                <View style={styles.experienceOptionLeft}>
                  <Text style={[
                    styles.experienceTitle,
                    formData.experienceType === 'experienced' && styles.experienceTextActive
                  ]}>
                    I'm experienced
                  </Text>
                  <Text style={styles.experienceDescription}>
                    Includes work experience and internships.
                  </Text>
                </View>
                <Image source={require('../assets/signup/exprience.png')} style={styles.experienceImage} />
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.experienceOption,
                  formData.experienceType === 'fresher' && styles.experienceOptionActive
                ]}
                onPress={() => updateFormData('experienceType', 'fresher')}
              >
                <View style={styles.experienceOptionLeft}>
                  <Text style={[
                    styles.experienceTitle,
                    formData.experienceType === 'fresher' && styles.experienceTextActive
                  ]}>
                    I'm a fresher
                  </Text>
                  <Text style={styles.experienceDescription}>
                    I'm a student & new to the professional world.
                  </Text>
                </View>
                <Image source={require('../assets/signup/fresher.png')} style={styles.experienceImage} />
              </TouchableOpacity>
            </View>

            {/* Resume Upload */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Resume</Text>
              {!resume ? (
                <>
                  <TouchableOpacity style={styles.uploadButton} onPress={pickResume}>
                    <Text style={styles.uploadButtonText}>Upload Resume</Text>
                  </TouchableOpacity>
                  <Text style={styles.uploadHint}>DOC, DOCX, PDF | Max: 2 MB</Text>
                </>
              ) : (
                <View style={styles.resumeContainer}>
                  <TouchableOpacity style={styles.resumeInfo} onPress={pickResume}>
                    <Image source={require('../assets/signup/resume.png')} style={styles.resumeIcon} />
                    <Text style={styles.resumeName}>{resume.name}</Text>
                  </TouchableOpacity>
                  <View style={styles.resumeActions}>
                    <TouchableOpacity style={styles.resumeActionButton} onPress={pickResume}>
                      <Image source= {require('../assets/signup/penciledit.png')} style={styles.resumeActionIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.resumeActionButton} onPress={removeResume}>
                      <Image source={require('../assets/signup/delete.png')} style={styles.resumeActionIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>

            {/* Terms and Conditions */}
            <View style={styles.termsContainer}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setAgreeToTerms(!agreeToTerms)}
              >
                <View style={[styles.checkbox, agreeToTerms && styles.checkboxActive]}>
                  {agreeToTerms && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.termsText}>
                  By clicking Register, you agree to the{' '}
                  <Text style={styles.termsLink}>Terms and Conditions</Text> &{' '}
                  <Text style={styles.termsLink}>Privacy Policy</Text> of Nextjobz.
                </Text>
              </TouchableOpacity>
              {errors.terms ? <Text style={styles.errorText}>{errors.terms}</Text> : null}
            </View>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Register Now</Text>
          </TouchableOpacity>
          </View>
      </ScrollView>
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
    paddingTop: 120,
    paddingBottom: 40,
    paddingHorizontal: 60,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: spacing.md,
    padding: spacing.md,
  },
  backButtonText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: fontWeight.bold,

  },
  logo: {
    height: 42,
    width: 150,
    resizeMode: 'center',
  },
  scrollView: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 10,
    borderRadius: borderRadius.xxl,
    padding: spacing.lg,
    ...shadows.lg,
  },
  cardHeader: {
    marginBottom: spacing.lg,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.black,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    lineHeight: fontSize.sm * 1.4,
  },
  form: {
    marginBottom: spacing.lg,
  },
  inputGroup: {
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: colors.black,
    marginBottom: spacing.sm,
  },
  required: {
    color: colors.error,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.white,
  },
  inputIcon: {
    paddingLeft: spacing.md,
    fontSize: 16,
  },
  inputWithIcon: {
    flex: 1,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.md,
    fontSize: fontSize.md,
    color: colors.black,
  },
  eyeIcon: {
    paddingRight: spacing.md,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: fontSize.md,
    color: colors.black,
    backgroundColor: colors.white,
  },
  inputError: {
    borderColor: colors.error,
  },
  passwordHint: {
    fontSize: fontSize.xs,
    color: colors.textLight,
    marginTop: spacing.xs,
    lineHeight: fontSize.xs * 1.3,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray300,
    borderTopLeftRadius: borderRadius.lg,
    borderBottomLeftRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.gray50,
    borderRightWidth: 0,
  },
  flagEmoji: {
    fontSize: 16,
  },
  countryCodeText: {
    fontSize: fontSize.md,
    color: colors.black,
    fontWeight: fontWeight.medium,
  },
  phoneInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.gray300,
    borderTopRightRadius: borderRadius.lg,
    borderBottomRightRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontSize: fontSize.md,
    color: colors.black,
    backgroundColor: colors.white,
    borderLeftWidth: 0,
  },
  experienceOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
    backgroundColor: colors.white,
  },
  experienceOptionActive: {
    borderColor: colors.gray300,
    backgroundColor: colors.gray600 + '10',
  },
  experienceOptionLeft: {
    flex: 1,
  },
  experienceTitle: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    color: colors.black,
    marginBottom: spacing.xs,
  },
  experienceTextActive: {
    color: colors.black,
  },
  experienceDescription: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
  experienceImage: {
    width: 80,
    height: 50,
    resizeMode: 'contain',
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  uploadButtonText: {
    color: colors.primary,
    fontSize: fontSize.md,
    fontWeight: fontWeight.medium,
  },
  uploadHint: {
    fontSize: fontSize.xs,
    color: colors.textLight,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  termsContainer: {
    marginTop: spacing.md,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: 3,
    marginRight: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  checkboxActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkmark: {
    color: colors.white,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.bold,
  },
  termsText: {
    flex: 1,
    fontSize: fontSize.xs,
    color: colors.textSecondary,
    lineHeight: fontSize.xs * 1.4,
  },
  termsLink: {
    color: colors.primary,
    fontWeight: fontWeight.medium,
  },
  errorText: {
    fontSize: fontSize.xs,
    color: colors.error,
    marginTop: spacing.xs,
  },
  signUpButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md + 2,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    marginTop: spacing.md,
    ...shadows.md,
  },
  signUpButtonText: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    color: colors.white,
  },
  passwordHintContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: spacing.xs,
  },
  noneText: {
    fontSize: fontSize.xs,
    color: colors.textLight,
  },
  resumeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    backgroundColor: colors.white,
  },
  resumeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  resumeIcon: {
    width: 16,
    height: 18,
    marginRight: spacing.sm,
  },
  resumeName: {
    fontSize: fontSize.sm,
    color: colors.black,
    flex: 1,
  },
  resumeActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resumeActionButton: {
    padding: spacing.xs,
    marginLeft: spacing.xs,
    backgroundColor: '#F0ECFD',
  },
  resumeActionIcon: {
    width: 16,
    height: 18,
    marginRight: spacing.xs,
    alignItems: 'center',
  },
  passwordStrengthContainer: {
    marginTop: spacing.xs,
    marginBottom: spacing.xs,
  },
  passwordStrengthBar: {
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: spacing.xs,
  },
  passwordStrengthFill: {
    height: '100%',
    borderRadius: 2,
  },
  passwordStrengthText: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    textAlign: 'right',
  },
  passwordMatchContainer: {
    marginTop: spacing.xs,
  },
  passwordMatchText: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
  },
});

