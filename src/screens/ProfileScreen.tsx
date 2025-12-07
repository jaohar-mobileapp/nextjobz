import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';
import { borderRadius, colors, fontSize, spacing } from '../styles/theme';
import Octicons  from "react-native-vector-icons/Octicons";
import { ScrollView } from 'react-native-gesture-handler';

export class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Image
              source={require('../assets/homescreen/profile.jpg')}
              style={styles.avatar}
            />
          </View>
          <View>
            <Text style={styles.username}>Jaohar Raihan</Text>
            <Text style={styles.email}>jaoharraihan@gmail.com</Text>
          </View>
        </View>
        <ScrollView>

        <View style={styles.profilelist}>
        <View style={styles.logomap}>
          <Image
            source={require('../assets/more/appliedjobs.png')}
            style={styles.logo}
            resizeMode="cover"
          />
          </View>
          <View style={{ flex: 1, marginLeft: spacing.md }}>
            <Text style={[styles.name, { marginRight: 0 }]} numberOfLines={2} ellipsizeMode="tail">Saved Jobs</Text>
          </View>

          <View style={{ width: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Octicons name="chevron-right" style={styles.icons} />
          </View>
        </View>

        <View style={styles.profilelist}>
        <View style={styles.logomap}>
          <Image
            source={require('../assets/more/artical.png')}
            style={styles.logo}
            resizeMode="cover"
          />
          </View>
          <View style={{ flex: 1, marginLeft: spacing.md }}>
            <Text style={[styles.name, { marginRight: 0 }]} numberOfLines={2} ellipsizeMode="tail">Applied Jobs</Text>
          </View>

          <View style={{ width: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Octicons name="chevron-right" style={styles.icons} />
          </View>
        </View>

        <View style={styles.profilelist}>
        <View style={styles.logomap}>
          <Image
            source={require('../assets/more/settings.png')}
            style={styles.logo}
            resizeMode="cover"
          />
          </View>
          <View style={{ flex: 1, marginLeft: spacing.md }}>
            <Text style={[styles.name, { marginRight: 0 }]} numberOfLines={2} ellipsizeMode="tail">Settings</Text>
          </View>

          <View style={{ width: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Octicons name="chevron-right" style={styles.icons} />
          </View>
        </View>

        <View style={styles.profilelist}>
        <View style={styles.logomap}>
          <Image
            source={require('../assets/more/artical.png')}
            style={styles.logo}
            resizeMode="cover"
          />
          </View>
          <View style={{ flex: 1, marginLeft: spacing.md }}>
            <Text style={[styles.name, { marginRight: 0 }]} numberOfLines={2} ellipsizeMode="tail">Artical</Text>
          </View>

          <View style={{ width: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Octicons name="chevron-right" style={styles.icons} />
          </View>
        </View>

        <View style={styles.profilelist}>
        <View style={styles.logomap}>
          <Image
            source={require('../assets/more/support.png')}
            style={styles.logo}
            resizeMode="cover"
          />
          </View >
          <View style={{ flex: 1, marginLeft: spacing.md }}>
            <Text style={[styles.name, { marginRight: 0 }]} numberOfLines={2} ellipsizeMode="tail">Support</Text>
          </View>

          <View style={{ width: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Octicons name="chevron-right" style={styles.icons} />
          </View>
        </View>

        <View style={styles.profilelist}>
          <View style={styles.logomap}>
            <Image
              source={require('../assets/more/training.png')}
              style={styles.logo}
              resizeMode="cover"
            />
          </View>

          <View style={{ flex: 1, marginLeft: spacing.md }}>
            <Text style={[styles.name, { marginRight: 0 }]} numberOfLines={2} ellipsizeMode="tail">Training</Text>
          </View>

          <View style={{ width: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Octicons name="chevron-right" style={styles.icons} />
          </View>
        </View>
        </ScrollView>


      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header:{
    flexDirection: 'row',
    padding: 25,
    backgroundColor: colors.primary,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 50,
    marginLeft: spacing.sm,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    marginLeft: -5, 
    marginTop: 22,
  },
  email:{
    fontSize: 11,
    marginLeft: spacing.sm,
  },
  logomap:{
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F0ECFD",
    borderRadius: 30,
    marginLeft: -10,
  },
  logo:{
    width: 24,
    height: 24,
  },
  name:{
    fontSize: fontSize.md,
    marginRight: 160,
    fontWeight: '400',
    marginLeft: spacing.md,
    },
  profilelist:{
    width: '90%',
    height:'8%',
    marginLeft: 20,
    backgroundColor: colors.gray100,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginTop: spacing.xl,
    borderRadius: borderRadius.xxl,
  },
  icons:{
    fontSize: 24,
    marginLeft: 15,
  }
});
export default ProfileScreen