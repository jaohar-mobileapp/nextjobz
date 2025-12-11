import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../styles/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


interface job{
  name: string;
  id: string;
  icon: string;
}

interface career{
  name: string;
  id: string;
  icon: string;
}

interface Abroad{
  name: string;
  id: string;
  icon: string;
}

interface campus{
  name: string;
  id: string;
  icon: string;
}

const jobs: job[] = [
  { name: 'Saved jobs', id: '1', icon: 'bookmark-outline' },
  { name: 'Applied jobs', id: '2', icon: 'briefcase-check' },
  { name: 'Settings', id: '3', icon: 'cog-outline' },
  { name: 'Artical', id: '5', icon: 'newspaper' },
  { name: 'Support', id: '6', icon: 'headset' },
]

const Development: career[] = [
  { name: 'Training', id: '1', icon: 'school' },
  { name: 'Mock Interview', id: '2', icon: 'account-tie' },
  { name: 'Career Gudience', id: '3', icon: 'lightbulb-on-outline' },
]

const CareerAbroad: Abroad[] = [
  { name: 'Job in Abroad', id: '1', icon: 'airplane' },
  { name: 'Study in Abroad', id: '2', icon: 'school' },
]

const campusConnect: campus [] = [
  { name: 'Universities', id: '1', icon: 'school' },
  { name: 'Colleges', id: '2', icon: 'office-building' },
]

export const MoreScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [SavedJob, setSavedJob] = useState<string | null>(null);

  const handlePress = (item: job) => {
    setSelectedJob(item.name);
    if (item.name === 'Settings') {
      navigation.navigate('Settings');
      return;
    }
    if (item.name === 'Saved jobs') {
      navigation.navigate('SavedJob');
      return;
    }
  };

  const renderCareerCard = (item: career) => (
    <TouchableOpacity
      key={item.id}
      style={styles.jobcontainer}
      activeOpacity={0.7}
      onPress={() => handlePress({ name: item.name, id: item.id, icon: item.icon })}
    >
      <View style={styles.iconLogo}>
        <MaterialCommunityIcons name={item.icon} size={30} color="#6A4AED" />
      </View>
      <Text style={styles.jobtext}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderjobCard = (item: job) => (
    <TouchableOpacity
      key={item.id}
      style={styles.jobcontainer}
      activeOpacity={0.7}
      onPress={() => handlePress(item)}
    >
      <View style={styles.iconLogo}>
        <MaterialCommunityIcons name={item.icon} size={30} color="#6A4AED" />
      </View>

      <Text style={styles.jobtext}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderAbroadCard = (item: Abroad) => (
    <TouchableOpacity
      key={item.id}
      style={styles.jobcontainer}
      activeOpacity={0.7}
      onPress={() => handlePress({ name: item.name, id: item.id, icon: item.icon })}
    >
      <View style={styles.iconLogo}>
        <MaterialCommunityIcons name={item.icon} size={30} color="#6A4AED" />
      </View>
      <Text style={styles.jobtext}>{item.name}</Text>
    </TouchableOpacity>
  );

  const rendercampusCard = (item: campus) => (
    <TouchableOpacity
      key={item.id}
      style={styles.jobcontainer}
      activeOpacity={0.7}
      onPress={() => handlePress({ name: item.name, id: item.id, icon: item.icon })}
    >
      <View style={styles.iconLogo}>
        <MaterialCommunityIcons name={item.icon} size={30} color="#6A4AED" />
      </View>
      <Text style={styles.jobtext}>{item.name}</Text>
    </TouchableOpacity>
  );

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
  );
};

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
    width: 55,
    height: 55,
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