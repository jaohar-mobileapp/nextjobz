import { Text, View, StyleSheet, ScrollView, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../styles/theme';

interface job{
  name: string;
  id: string;
  logo: ImageSourcePropType;
}

interface career{
  name: string;
  id: string;
  logo: ImageSourcePropType;
}

interface Abroad{
  name: string;
  id: string;
  logo: ImageSourcePropType;
}

interface campus{
  name: string;
  id: string;
  logo: ImageSourcePropType;
}

const jobs: job[] = [
  { name: 'Saved jobs', id: '1', logo: require('../assets/more/artical.png')},
  { name: 'Applied jobs', id: '2', logo: require('../assets/more/appliedjobs.png')}, 
  { name: 'Settings', id: '3', logo: require('../assets/more/settings.png')},
  { name: 'Artical', id: '5', logo: require('../assets/more/artical.png')},
  { name: 'Support', id: '6', logo: require('../assets/more/support.png')},
]

const Development: career[] = [
  { name: 'Training', id: '1', logo: require('../assets/more/training.png')},
  { name: 'Mock Interview', id: '2', logo: require('../assets/more/mock.png')},
  { name: 'Career Gudience', id: '3', logo: require('../assets/more/careergudience.png')},
]

const CareerAbroad: Abroad[] = [
  { name: 'Job in Abroad', id: '1', logo: require('../assets/more/careergudience.png')},
  { name: 'Study in Abroad', id: '2', logo: require('../assets/more/studyinabroad.png')},
]

const campusConnect: campus [] = [
  { name: 'Universities', id: '1', logo: require('../assets/more/mock.png')},
  { name: 'Colleges', id: '2', logo: require('../assets/more/careergudience.png')},
]

const renderCareerCard = (item: career) => {
  return (
    <TouchableOpacity
      key={item.id}
      style={styles.jobcontainer}
      activeOpacity={0.7}
      onPress={() => {}}
    >
      <View style={styles.iconLogo}>
        <Image
          source={item.logo}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.jobtext}>{item.name}</Text>
    </TouchableOpacity>
  )
}

const renderjobCard = (item: job) => {
  return (
    <TouchableOpacity
      key={item.id}
      style={styles.jobcontainer}
      activeOpacity={0.7}
      onPress={() => {}}
    >
      <View style={styles.iconLogo}>
        <Image
          source={item.logo}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.jobtext}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const renderAbroadCard = (item: Abroad) => {
  return (
    <TouchableOpacity
      key={item.id}
      style={styles.jobcontainer}
      activeOpacity={0.7}
      onPress={() => {}}
    >
      <View style={styles.iconLogo}>
        <Image
          source={item.logo}
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.jobtext}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const rendercampusCard = (item: campus) => {
  return (
    <TouchableOpacity
      key={item.id}
      style={styles.jobcontainer}
      activeOpacity={0.7}
      onPress={() => {}}
    >
      <View style={styles.iconLogo}>
        <Image
          source={item.logo}
          style={{ width: 30, height: 30}}
          resizeMode="contain"
          />
      </View>
      <Text style={styles.jobtext}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export class MoreScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>More</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Jobs</Text>
        </View>
        <View style={styles.gridContainer}>
        {jobs.map(renderjobCard)}
        </View>
        <View>
          <Text style={styles.subtitle}> Career Development</Text>
        </View>
        <View style={styles.gridContainer}>
          {Development.map(renderCareerCard)}
        </View>
        <View>
          <Text style={styles.subtitle}>Career in Abroad</Text>
        </View>
        <View style={styles.gridContainer}>
          {CareerAbroad.map(renderAbroadCard)}
        </View>
        <View>
          <Text style={styles.subtitle}>Campus Connect</Text>
        </View>
        <View style={styles.gridContainer}>
          {campusConnect.map(rendercampusCard)}
        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.white,
    position: 'relative',
    marginTop: 60,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    position: 'relative',
    marginTop: 20,
    marginLeft: 16,
  },
  iconcontainer: {
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
    alignItems: 'center',
    paddingBottom: spacing.xl,
  },
  jobcontainer: {
    width: 90, 
    height: 150,
    marginRight: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.md,
    padding: spacing.xs,
    marginBottom: -30,
  },
  iconLogo: {
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F0ECFD",
    borderRadius: 40,
  },
  jobtext: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: '400',
    textAlign: 'center',
  },
  gridContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  paddingHorizontal: spacing.xs,
  paddingBottom: spacing.xs,
},
});

export default MoreScreen