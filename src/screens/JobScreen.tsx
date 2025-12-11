import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { borderRadius, colors, fontSize, shadows, spacing,fontWeight } from '../styles/theme';
import Icon from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-gesture-handler';
import { vectorIcons } from "../constants/vectorIcons";


interface countprops{
  icon: keyof typeof vectorIcons | string;
  count: string;
  title: string;
  id: string;
}

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salaryMin: string;
  salaryMax: string;
  period: string;
  exprience: string;
  matched: string;
  logo: any;
  isBookmarked: boolean;
}

interface jobcategory {
  id: string;
  icon: string;
  name: string;
  count: string;
}


const jobcounmts: countprops[] = [
  { icon: 'Organization' , count: '1200', title: 'Live Jobs', id: '1' },
  { icon: 'chair' , count: '80012', title: 'Vacancies', id: '2' },
  { icon: 'Organization' , count: '50+', title: 'Organizations', id: '3' },
]

const jobs: Job[] = [
    {
      id: '1',
      title: 'UI/UX Designer',
      company: 'Google LLC',
      location: 'Gulshan, Dhaka',
      salaryMin: '৳60K',
      salaryMax: '৳100K',
      period: '/month',
      exprience: '8-10 Years',
      matched: 'Onsite',
      logo: require('../assets/homescreen/companyLogo/googleLogo.png'),
      isBookmarked: false,
    },
    {
      id: '2',
      title: 'Sales & Marketing',
      company: 'Paypal',
      location: 'Gulshan, Dhaka',
      salaryMin: '৳60K',
      salaryMax: '৳100K',
      period: '/month',
      exprience: '8-10 Years',
      matched: '76% matched',
      logo: require('../assets/homescreen/companyLogo/paypalLogo.png'),
      isBookmarked: true,
    },
    {
      id: '3',
      title: 'Writing & Content',
      company: 'Pinterest',
      location: 'Gulshan, Dhaka',
      salaryMin: '৳60K',
      salaryMax: '৳100K',
      period: '/month',
      exprience: '8-10 Years',
      matched: '76% matched',
      logo: require('../assets/homescreen/companyLogo/shopify.png'),
      isBookmarked: true,
    },
    {
      id: '4',
      title: 'Business Analyst',
      company: 'Apple Inc.',
      location: 'Gulshan, Dhaka',
      salaryMin: '30K',
      salaryMax: '৳100K',
      period: '/month',
      exprience: '8-10 Years',
      matched: '76% matched',
      logo: require('../assets/homescreen/companyLogo/appleLogo.png'),
      isBookmarked: false,
    },
    {
      id: '5',
      title: 'Quality Assurance',
      company: 'Spotify',
      location: 'Gulshan, Dhaka',
      salaryMin: '25K',
      salaryMax: '35K',
      period: '/month',
      exprience: '8-10 Years',
      matched: '76% Matched',
      logo: require('../assets/homescreen/companyLogo/spotifyLogo.png'),
      isBookmarked: false,
    },
  ];

  const jobcategorys: jobcategory[] = [
  { id: '1', icon: 'laptop', name: 'Computer Science and Engineering (CSE)', count: '1200 Jobs' },
  { id: '2', icon: 'briefcase', name: 'Bachelor of Business Administration (BBA)', count: '80012 Jobs' },
  { id: '3', icon: 'flash', name: 'Electrical and Electronic Engineering (EEE)', count: '50+ Jobs' },
  { id: '4', icon: 'newspaper', name: 'Media Studies and Journalism (MSJ)', count: '30 Jobs' },
]

  const onJobPress = (id: string) => {
    console.log('Job pressed:', id);
  };
  
  const renderJobCard = (job: Job) => (
        <TouchableOpacity 
          key={job.id} 
          style={styles.jobCard}
          onPress={() => onJobPress?.(job.id)}>
          <View style={styles.jobHeader}>
            <View style={styles.companyLogoContainer}>
              <Image 
                source={job.logo}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </View>
            <View style={styles.jobInfo}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.companyName}>{job.company}</Text>
            </View>
            <TouchableOpacity style={styles.bookmarkButton}>
              <MaterialCommunityIcons name={job.isBookmarked ? 'bookmark-minus-outline' : 'bookmark-outline'} style={styles.bookmarkIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.jobLocationContainer}><Text style={styles.jobLocation}>{job.location}</Text></View>

          <View style={styles.salaryContainer}>
            <Text style={styles.salaryText}>
              <Text style={styles.salaryAmount}>{job.salaryMin} - {job.salaryMax}</Text>
              <Text style={styles.salaryPeriod}>{job.period}</Text>
            </Text>
          </View>
          
          <View style={styles.jobTagsContainer}>
            <View style={styles.jobTag}>
              <Text style={styles.jobTagText}>{job.exprience}</Text>
            </View>
            <View style={styles.jobTag}>
              <Text style={styles.jobTagText}>{job.matched}</Text>
            </View>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply now</Text>
            </TouchableOpacity>
          </View>

          <View>

          </View>
        </TouchableOpacity>
      );
  



const renderjobCountCard = (item: countprops) => {
  const vIcon = vectorIcons[item.icon as keyof typeof vectorIcons];
  type IconComponentProps = { name: string; size?: number; color?: string | number | undefined };
  const IconComponent: React.ComponentType<IconComponentProps> =
    typeof vIcon?.lib === 'function'
      ? (vIcon!.lib as React.ComponentType<IconComponentProps>)
      : (Icon as React.ComponentType<IconComponentProps>);
  const iconName = vIcon?.name ?? 'search';
  return (
    <View
      key={item.id}
      style={styles.countcontainer}
    >
      <View style={styles.iconWrapper}>
        <IconComponent name={iconName} size={20} color={colors.primary} />
      </View>
      <Text style={styles.jobcount}>{item.count}</Text>
      <Text style={styles.jobtitle}>{item.title}</Text>
    </View>
  )
}
const renderJobcategoryCard = (item: jobcategory) => {
  return (
    <View
      key={item.id}
      style={styles.jobcategorycontainer}>
      <View style={styles.logocontainer}>
        <MaterialCommunityIcons name={item.icon} size={36} color={colors.primaryLight} />
      </View>
      <Text style={styles.jobcategoryname}>{item.name}</Text>
      <Text style={styles.jobcategorycount}>{item.count}</Text>
    </View>
  );
};

const JobScreen: React.FC = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/homescreen/profile.jpg')}
          style={styles.avatar}
          accessibilityLabel="Profile picture"
        />
        <View style={{ marginLeft: 12, justifyContent: 'center' }}>
          <Text style={styles.username} numberOfLines={1}>
            Jaohar Raihan
          </Text>
          <Text style={styles.email} numberOfLines={1}>
            jaoharraihan@gmail.com
          </Text>
          </View>
          <View style={styles.iconcontainer}>
            <Icon name="bell" style={styles.icons} />
          </View>
        </View>
        <ScrollView>
        <View style={styles.subheader}>
          <Text style={styles.subheadertext}>With the best Ai powered platform</Text>
        </View>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>
            <Text style={{ color: '#000' }}>Find your </Text>
            <Text style={{ color: '#1897FE' }}>N</Text>
            <Text style={{ color: '#A44CFF' }}>e</Text>
            <Text style={{ color: colors.primary }}>x</Text>
            <Text style={{ color: '#C038FF' }}>t </Text>
            <Text style={{ color: '#1897FE' }}>J</Text>
            <Text style={{ color: '#C038FF' }}>o</Text>
            <Text style={{ color: '#A44CFF' }}>b</Text>
          </Text>
        </View>
        <View style={styles.Aicontainer}>
          <View>
          <TextInput
            placeholder="Job title or Keywords"
            style={styles.AiInput}
          />
          </View>
          <View>
            <Octicons name="search" style={styles.searchicons} />
          </View>
        </View>
        <View style={styles.gridContainer}>
           {jobcounmts.map(renderjobCountCard)}
        </View>
        <View style={styles.introduction}>
          <View>
          <Text style={styles.introductiontitle}>Smarter Career Building Starts Here</Text>
          </View>
          <View>
            <Image
              source={require('../assets/jobscreen/un.png')}
              style={styles.introductionimage}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.introductiontext}>Nextjobz helps you explore careers and connect with global opportunities.</Text>
          </View>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Picks for </Text>
          <Text style={{fontWeight:'800', marginRight: 180, marginTop: -10, fontSize: 20}}>You</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.jobsList}
          >
          {jobs.slice(2, 5).map(renderJobCard)}
        </ScrollView>
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Jobs by</Text>
            <Text style={{fontWeight: '800', marginLeft: -155, fontSize: 20, marginTop: -5 }}>Category</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categorylist}
            >
            {jobcategorys.map(renderJobcategoryCard)}
          </ScrollView>
        </View>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    padding: 22,
    backgroundColor: colors.primary,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    marginLeft: -10, 
    marginTop: 43,
  },
  username:{
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginRight: 100,
    marginTop: 35,
  },
  email:{
    fontSize: 11,
    marginRight: 100,
  },
  icons:{
    fontSize: 24,
    marginLeft: 35,
    marginTop: 10,
    color: colors.white,

  },
  iconcontainer:{
    marginTop: 45,
    marginRight: 55,
  },
  subheader:{
    padding: 12,
    backgroundColor: '#BEBAE940',
    borderRadius: borderRadius.xxl,
    margin: 70,
    marginTop: 24, 
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.lg,
  },
  subheadertext:{
    textAlign: 'center',
    color: colors.primary,
    fontSize: 12,
  },
  titlecontainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  title:{
    fontSize: 40,
    fontWeight: '600',
    marginTop: -50,
    color: '#0a0a0bff',
    includeFontPadding: false,   
  },
  Aicontainer:{
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: borderRadius.xxxl,
    margin: 15,
    marginTop: 20,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: '#BAA9F2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  AiInput:{
    fontSize: fontSize.xs,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  searchicons:{
    fontSize: 20,
    marginLeft: 130,
    color: colors.primary,
    backgroundColor: '#F0ECFD',
    padding: 6,
    borderRadius: borderRadius.xxl,
  },
  gridContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xs,
    marginLeft: 5,
    justifyContent: 'space-between',
  },
  countcontainer:{
    borderRadius: borderRadius.xxl,
    marginTop: 8,
    marginLeft: -5,
    justifyContent: 'space-between'
  },
  iconWrapper: {
    marginLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 20,
    height: 20,
  },
  jobcount:{
    fontSize: 12,
    fontWeight: '700',
    color: '#2E2E2F',
    marginLeft: 35,
    marginTop: -27,
  },
  jobtitle:{
    fontSize: 12,
    marginLeft: 35,
    color: '#7C7C7E',
  },
  introduction:{
    width: '90%',
    height: 120,
    backgroundColor: '#673FED1A',
    marginTop: spacing.xl,
    marginLeft: 20,
    borderRadius: borderRadius.xl,
    flexDirection: 'row',
    flexWrap: 'wrap',
    },
  introductiontitle:{
    fontSize: 15,
    fontWeight: fontWeight.semibold,
    color: '#000000ff',
    marginTop: 30,
    marginLeft: 10,
    flexWrap: 'wrap',
    width: 200,
  },
  introductiontext:{
    fontSize: 10,
    fontWeight: '300',
    color: '#2E2E2F',
    marginTop: -75,
    marginLeft: 10,
    flexWrap: 'wrap',
    width: 200,
  },
  introductionimage:{
    width: 140,
    height: 120,
    marginLeft: 220,
    marginTop: -40,
  },
  jobCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xxl,
    padding: 30,
    marginLeft: spacing.xs,
    marginRight: spacing.md,
    marginBottom: spacing.md,
    ...shadows.sm,
    borderWidth: 1,
    borderColor: colors.gray100,
  },
  jobHeader: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  companyLogoContainer: {
    width: 60,
    height: 55,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -20,
    marginRight: spacing.md,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: fontWeight.bold,
    color: colors.black,
    marginBottom: 4,
    marginRight: 55,
  },
  companyName: {
    fontSize: 14,
    color: colors.textLight,
  },
  bookmarkButton: {
    padding: spacing.xs,
    marginHorizontal: -10,
  },
  bookmarkIcon: {
    fontSize: 24,
    color: colors.primary,
  },
  jobLocationContainer: {
    marginLeft: -20,
    backgroundColor: colors.gray100,
    width:110,
    height: 20,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',  
  },
  jobLocation: {
    fontSize: 12,
    color: colors.black,
    marginBottom: spacing.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  salaryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    marginLeft: 125,
    marginTop: -20,
    backgroundColor: colors.gray100,
    width:140,
    height: 20,
    borderRadius: borderRadius.sm,
    paddingHorizontal: spacing.sm,
  },
  salaryText: {
    fontSize: 12,
  },
  salaryAmount: {
    fontWeight: '400',
    color: colors.gray800,
  },
  salaryPeriod: {
    color: colors.gray800,
  },
  jobTagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -20,
  },
  jobTag: {
    backgroundColor: '#F0ECFD',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    marginRight: spacing.sm,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  jobTagText: {
    fontSize: 12,
    color: colors.primary,
  },
  applyButton: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    marginLeft: 'auto',
  },
  applyButtonText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: fontWeight.medium,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
    padding: 20,
  },
   sectionTitle: {
    fontSize: 20,
    color: colors.black,
    marginBottom: spacing.sm,
  },
  seeAllButton: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: fontWeight.normal,
    marginLeft: -40,
  },
  jobsList: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
    marginTop: -25,
  },
  jobcategorycontainer: {
    width: 280,
    height: 180,
    borderRadius: borderRadius.xl,
    padding: 20,
    marginLeft: spacing.xs,
    marginRight: spacing.md,
    marginBottom: spacing.md,
    ...shadows.sm,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  logocontainer:{
    width: 65,
    height: 65,
    borderRadius: borderRadius.xl,
    backgroundColor: '#F0ECFD',  
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 90,
    marginRight: spacing.md,
  },
  jobcategorylogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',  
  },
  jobcategoryname: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  jobcategorycount: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '300',
    color: colors.gray800,
    textAlign: 'center',
  },
  categorylist: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
    marginTop: -25,
  },
})

export default JobScreen