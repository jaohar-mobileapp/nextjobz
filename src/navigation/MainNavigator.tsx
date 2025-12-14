import React, { useState } from 'react'; 
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { SplashScreen } from '../screens/SplashScreen'; 
import { OnboardingScreen } from '../screens/OnboardingScreen'; 
import { SignUpScreen } from '../screens/SignUpScreen'; 
import { SignInScreen } from '../screens/SignInScreen'; 
import { HomeScreen } from '../screens/HomeScreen'; 
import { OTPVerificationScreen } from '../screens/OTPVerificationScreen'; 
import { SuccessScreen } from '../screens/SuccessScreen'; 
import { ProfileScreen } from '../screens/ProfileScreen'; 
import JobScreen from '../screens/JobScreen'; 
import { DashboardScreen } from '../screens/DashboardScreen'; 
import { MoreScreen } from '../screens/MoreScreen'; 
import { CurvedBottomBar } from '../components/CurvedBottomBar';
import { View, Image } from 'react-native';
import settingsscreen from '../screens/more/settingsscreen';
import personalinfo  from '../screens/more/personalinfo';
import personalinfoedit  from '../screens/more/personalinfoedit';
import loginsecu  from '../screens/more/loginsecu';

export type RootStackParamList = { 
  Splash: undefined; 
  Onboarding: undefined; 
  SignUp: undefined; 
  SignIn: undefined; 
  OTPVerification: { phoneNumber: string }; 
  Success: undefined; 
  Home: undefined; 
  Profile: undefined; 
  JobDetails: { jobId: string }; 
  Dashboard: undefined; 
  More: undefined; 
  Settings: undefined;
  personalinfo: undefined;
  personalinfoedit: undefined;
  loginsecu: undefined;
}; 

const Stack = createStackNavigator<RootStackParamList>(); 

export function MainNavigator(): React.JSX.Element { 
  const [isLoading, setIsLoading] = useState(true); 
  const [showOnboarding, setShowOnboarding] = useState(true); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [currentScreen, setCurrentScreen] = useState<'signup' | 'signin' | 'otp' | 'success'>('signup'); 
  const [phoneNumber, setPhoneNumber] = useState('');

  // navigation ref to control navigation from outside navigator
  const navigationRef = createNavigationContainerRef<RootStackParamList>();
  const [currentRoute, setCurrentRoute] = React.useState<string>('Home');

  const handleStateChange = () => {
    const route = navigationRef.getCurrentRoute();
    if (route?.name) setCurrentRoute(route.name);
  };

  const handleSplashFinish = () => setIsLoading(false); 
  const handleOnboardingComplete = () => setShowOnboarding(false); 
  const handleSignUpSuccess = () => setIsAuthenticated(true); 
  const handleNavigateToSignIn = () => setCurrentScreen('signin'); 
  const handleNavigateToOTP = (phone: string) => { 
    setPhoneNumber(phone); 
    setCurrentScreen('otp'); 
  }; 
  const handleOTPVerificationSuccess = () => setCurrentScreen('success'); 
  const handleBackToSignUp = () => setCurrentScreen('signup'); 
  const handleSignInSuccess = () => setIsAuthenticated(true); 
  const handleNavigateToSignUp = () => setCurrentScreen('signup'); 

  // Splash Screen
  if (isLoading) { 
    return ( 
      <NavigationContainer> 
        <Stack.Navigator screenOptions={{ headerShown: false }}> 
          <Stack.Screen name="Splash"> 
            {() => <SplashScreen onFinish={handleSplashFinish} />} 
          </Stack.Screen> 
        </Stack.Navigator> 
      </NavigationContainer> 
    ); 
  } 

  // Onboarding Screen
  if (showOnboarding) { 
    return ( 
      <NavigationContainer> 
        <Stack.Navigator screenOptions={{ headerShown: false }}> 
          <Stack.Screen name="Onboarding"> 
            {() => <OnboardingScreen onComplete={handleOnboardingComplete} />} 
          </Stack.Screen> 
        </Stack.Navigator> 
      </NavigationContainer> 
    ); 
  } 

  // Auth Screens
  if (!isAuthenticated) { 
    return ( 
      <NavigationContainer> 
        <Stack.Navigator screenOptions={{ headerShown: false }}> 
          {currentScreen === 'signup' && ( 
            <Stack.Screen name="SignUp"> 
              {() => ( 
                <SignUpScreen 
                  onSignUpSuccess={handleSignUpSuccess} 
                  onNavigateToSignIn={handleNavigateToSignIn} 
                  onNavigateToOTP={handleNavigateToOTP} 
                /> 
              )} 
            </Stack.Screen> 
          )} 
          {currentScreen === 'signin' && ( 
            <Stack.Screen name="SignIn"> 
              {() => ( 
                <SignInScreen 
                  onSignInSuccess={handleSignInSuccess} 
                  onNavigateToSignUp={handleNavigateToSignUp} 
                /> 
              )} 
            </Stack.Screen> 
          )} 
          {currentScreen === 'otp' && ( 
            <Stack.Screen name="OTPVerification"> 
              {() => ( 
                <OTPVerificationScreen 
                  phoneNumber={phoneNumber} 
                  onVerificationSuccess={handleOTPVerificationSuccess} 
                  onNavigateBack={handleBackToSignUp} 
                /> 
              )} 
            </Stack.Screen> 
          )} 
          {currentScreen === 'success' && ( 
            <Stack.Screen name="Success"> 
              {() => <SuccessScreen onComplete={handleNavigateToSignIn} />} 
            </Stack.Screen> 
          )} 
        </Stack.Navigator> 
      </NavigationContainer> 
    ); 
  } 

  // Authenticated / Main App Flow
  return (
    <NavigationContainer ref={navigationRef} onStateChange={handleStateChange}>
      <View style={{ flex: 1 }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="JobDetails" component={JobScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="More" component={MoreScreen} />
          <Stack.Screen name="Settings" component={settingsscreen} />
          <Stack.Screen name="personalinfo" component={personalinfo} />
          <Stack.Screen name="personalinfoedit" component={personalinfoedit} />
          <Stack.Screen name="loginsecu" component={loginsecu} />
        </Stack.Navigator>

        {/* Persistent bottom bar shown across authenticated screens */}
        <CurvedBottomBar
          tabs={[
            { name: 'Home', icon: <Image source={require('../assets/bottomIcon/homeicon.png')} style={{ width: 20, height: 20 }} />, onPress: () => navigationRef.isReady() && navigationRef.navigate('Home'), isActive: currentRoute === 'Home' },
            { name: 'Profile', icon: <Image source={require('../assets/bottomIcon/profileicon.png')} style={{ width: 20, height: 20 }} />, onPress: () => navigationRef.isReady() && navigationRef.navigate('Profile'), isActive: currentRoute === 'Profile' },
            { name: 'Dashboard', icon: <Image source={require('../assets/bottomIcon/dashboardicon.png')} style={{ width: 20, height: 20 }} />, onPress: () => navigationRef.isReady() && navigationRef.navigate('Dashboard'), isActive: currentRoute === 'Dashboard' },
            { name: 'More', icon: <Image source={require('../assets/bottomIcon/napbaricon.png')} style={{ width: 20, height: 20 }} />, onPress: () => navigationRef.isReady() && navigationRef.navigate('More'), isActive: currentRoute === 'More' },
          ]}
          centerButton={{ name: 'jobs', icon: <Image source={require('../assets/bottomIcon/jobicon.png')} style={{ width: 25, height: 25 }} />, onPress: () => navigationRef.isReady() && navigationRef.navigate('JobDetails', { jobId: '1' }) }}
          backgroundColor={'#ffffff'}
          activeColor={'#4F46E5'}
          inactiveColor={'#9CA3AF'}
        />
      </View>
    </NavigationContainer>
  ); 
}
