import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../../styles/theme';
import CircularProgress from 'react-native-circular-progress-indicator';


interface AccountItem {
  id: string;
  icon: string;
  name: string;
  arrowicon: string;
}

interface GeneralItem {
  id: string;
  icon: string;
  name: string;
  arrowicon: string;
}

interface AboutItem {
  id: string;
  icon: string;
  name: string;
  arrowicon: string;
}

interface logoutItem {
  id: string;
  icon: string;
  name: string;
}

const accounts: AccountItem[] = [
  { id: '1', name: 'Personal Information', icon: 'account-outline', arrowicon: 'chevron-right' },
  { id: '2', name: 'Log In & Security', icon: 'lock-reset', arrowicon: 'chevron-right' },
];

const generals: GeneralItem[]= [
  { id: '1', name: 'Help & Support', icon: 'information-outline', arrowicon: 'chevron-right'},
];
 const abouts: AboutItem[] = [
  { id: '1', name: 'Privacy & Policy', icon: 'check-underline-circle-outline', arrowicon: 'chevron-right'},
  { id: '2', name: 'Terms of Services', icon: 'alert-octagon-outline', arrowicon: 'chevron-right'},
  { id: '3', name: 'About Us', icon: 'account-group-outline', arrowicon: 'chevron-right'},
 ]

const logouts: logoutItem[]=[
  { id: '1', name: 'Log Out', icon: 'logout'},
]


const SettingsScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const handlePress = (item: AccountItem) => {
    if (item.name === 'Personal Information') {
      navigation.navigate('personalinfo');
      return;
    }
    if (item.name === 'Log In & Security') {
      navigation.navigate('loginsecu');
      return;
    }
  };
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.headertext}>Settings</Text>
      </View>

      <View style={styles.frame}>
        <Image source={require('../../assets/homescreen/bghero.png')} style={styles.heroBGImage} />
        <View style={{ marginTop: -18, marginLeft: -10 }}>
          <CircularProgress
            value={95}
            inActiveStrokeColor='#E0E0E0'
            inActiveStrokeOpacity={0.2}
            progressValueColor={'#fff'}
            valueSuffix={'%'}
            activeStrokeColor={colors.white}
          />
        </View>
        <Text style={styles.frametext}>Profile Completion!</Text>
        <Text style={styles.framedescription}>A complete profile increases the chances of a recruiter being more interested in recruiting you.</Text>

      </View>

      <View style={styles.line}/>
      <Text style={styles.subtitle}>Account</Text>

      <View style={{ paddingHorizontal: spacing.md }}>
        {accounts.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.accountcontainer}
            activeOpacity={0.7}
            onPress={() => handlePress(item)}
          >
            <View style={styles.iconLogo}>
              <MaterialCommunityIcons name={item.icon} size={24} color="#090909ff" />
            </View>
            <Text style={styles.jobtext}>{item.name}</Text>
            <View style={styles.arrowiconlogo}>
              <MaterialCommunityIcons name={item.arrowicon} size={24} color="#040404ff" />
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.line}/>
      <Text style={styles.subtitle}>General</Text>

      <View style={{ paddingHorizontal: spacing.md }}>
        {generals.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.accountcontainer}
            activeOpacity={0.7}
            onPress={() => { }}
          >
            <View style={styles.iconLogo}>
              <MaterialCommunityIcons name={item.icon} size={24} color="#090909ff" />
            </View>
            <Text style={styles.jobtext}>{item.name}</Text>
            <View style={styles.arrowiconlogo}>
              <MaterialCommunityIcons name={item.arrowicon} size={24} color="#040404ff" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.line}/>
      <Text style={styles.subtitle}>About</Text>
      <View style={{ paddingHorizontal: spacing.md }}>
        {abouts.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.accountcontainer}
            activeOpacity={0.7}
            onPress={() => { }}
          >
            <View style={styles.iconLogo}>
              <MaterialCommunityIcons name={item.icon} size={24} color="#090909ff" />
            </View>
            <Text style={styles.jobtext}>{item.name}</Text>
            <View style={styles.arrowiconlogo}>
              <MaterialCommunityIcons name={item.arrowicon} size={24} color="#040404ff" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.line}/>
      <View style={{ paddingHorizontal: spacing.md }}>
        {logouts.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.accountcontainer}
            activeOpacity={0.7}
            onPress={() => { }}
          >
            <View style={styles.iconLogo}>
              <MaterialCommunityIcons name={item.icon} size={24} color="#f20c0cff" />
            </View>
            <Text style={{fontSize: fontSize.md, color: '#f20c0cff'}}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xxxl,
        backgroundColor: '#fff',
        elevation: 4,
    },
    headertext: {
        fontSize: fontSize.xl,
        fontWeight: fontWeight.bold,
        marginLeft: spacing.md,
        color: colors.black,
    },
    frame: {
      width: '90%',
      height: '14%',
      backgroundColor: colors.primary,
      borderRadius: borderRadius.xxl,
      padding: spacing.lg,
      ...shadows.md,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: -35,
      marginLeft: 20,
    },
    frametext: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.bold,
      marginTop: -105,
      color: colors.white,
      marginLeft: 140,
    },
    framedescription: {
      fontSize: fontSize.sm,
      marginTop: -80,
      color: colors.white,
      marginLeft: 140,
    },
    heroBGImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      resizeMode: 'cover',
      opacity: 0.5,
    },
   line: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray200,
    marginVertical: spacing.lg,
   },
   subtitle: {
    fontSize: fontSize.md,
    color: colors.gray500,
    marginLeft: spacing.md,
    marginBottom: spacing.sm,
    fontWeight: fontWeight.semibold,
   },
   accountcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: spacing.xs,
    borderRadius: borderRadius.md,
    marginBottom: spacing.xs,
   },
   iconLogo: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
   },
   jobtext: {
    fontSize: fontSize.md,
    color: colors.black,
   },
   arrowiconlogo: {
     width: 24,
     height: 24,
     alignItems: 'center',
     justifyContent: 'center',
     marginLeft: 'auto',
   }
})

export default SettingsScreen