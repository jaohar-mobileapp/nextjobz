// MainTabs.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CurvedBottomBar } from '../components/CurvedBottomBar';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { DashboardScreen } from '../screens/DashboardScreen';
import { MoreScreen } from '../screens/MoreScreen';
import { useNavigation } from '@react-navigation/native';

export function MainTabs() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1 }}>
      
      {/* Screens will render here */}
      <View style={{ flex: 1 }}>
        {/* When user changes tab, navigate correctly */}
      </View>

      <CurvedBottomBar
        tabs={[
          {
            name: 'Home',
            icon: require('../assets/bottomIcon/homeicon.png'),
            onPress: () => navigation.navigate('Home'),
            isActive: true,
          },
          {
            name: 'Profile',
            icon: require('../assets/bottomIcon/profileicon.png'),
            onPress: () => navigation.navigate('Profile'),
            isActive: false,
          },
          {
            name: 'Dashboard',
            icon: require('../assets/bottomIcon/dashboardicon.png'),
            onPress: () => navigation.navigate('Dashboard'),
            isActive: false,
          },
          {
            name: 'More',
            icon: require('../assets/bottomIcon/napbaricon.png'),
            onPress: () => navigation.navigate('More'),
            isActive: false,
          },
        ]}
        centerButton={{
          name: 'jobs',
          icon: require('../assets/bottomIcon/jobicon.png'),
          onPress: () => navigation.navigate('JobDetails', { jobId: '1' }),
        }}
        backgroundColor="#fff"
      />
    </View>
  );
}
