import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../styles/theme';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


interface Props {
  onJobPress?: (jobId: string) => void;
  onProfilePress?: () => void;
  onNotificationPress?: () => void;
}

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salaryMin: string;
  salaryMax: string;
  period: string;
  type: string;
  duration: string;
  logo: any;
  isBookmarked: boolean;
}

interface Company {
  id: string;
  name: string;
  logo: any;
  jobsOpen: number;
}

interface articals {
  id: string;
  title: string;
  description: string;
  image: any;
  profileImage?: any;
  name?: string;
  time?: string;
  icon?: string;
  count?: string;
  icons?: string;
  countlike?: string;
}

interface trainings {
  id: string;
  title: string;
  description: string;
  image: any;
  profileImage?: any;
  name?: string;
  time?: string;
  icon?: string;
  count?: string;
  icons?: string;
  countlike?: string;
}

export function HomeScreen({ onJobPress, onProfilePress, onNotificationPress }: Props): React.JSX.Element {
  const navigation = useNavigation<any>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

const jobs: Job[] = [
    {
      id: '1',
      title: 'UI/UX Designer',
      company: 'Google LLC',
      location: 'Gulshan, Dhaka',
      salaryMin: '40K',
      salaryMax: '50K',
      period: '/month',
      type: 'Full Time',
      duration: 'Onsite',
      logo: require('../assets/homescreen/companyLogo/googleLogo.png'),
      isBookmarked: false,
    },
    {
      id: '2',
      title: 'Sales & Marketing',
      company: 'Paypal',
      location: 'Gulshan, Dhaka',
      salaryMin: '40K',
      salaryMax: '50K',
      period: '/month',
      type: 'Full Time',
      duration: 'Remote',
      logo: require('../assets/homescreen/companyLogo/paypalLogo.png'),
      isBookmarked: true,
    },
    {
      id: '3',
      title: 'Writing & Content',
      company: 'Pinterest',
      location: 'Gulshan, Dhaka',
      salaryMin: '40K',
      salaryMax: '50K',
      period: '/month',
      type: 'Part Time',
      duration: 'Remote',
      logo: require('../assets/homescreen/companyLogo/pinterestLogo.png'),
      isBookmarked: true,
    },
    {
      id: '4',
      title: 'Business Analyst',
      company: 'Apple Inc.',
      location: 'Gulshan, Dhaka',
      salaryMin: '30K',
      salaryMax: '50K',
      period: '/month',
      type: 'Freelance',
      duration: 'Remote',
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
      type: 'Part Time',
      duration: 'Remote',
      logo: require('../assets/homescreen/companyLogo/spotifyLogo.png'),
      isBookmarked: false,
    },
  ];

  const companies: Company[] = [
    {
      id: '1',
      name: 'Google LLC',
      logo: require('../assets/homescreen/companyLogo/googleLogo.png'),
      jobsOpen: 120,
    },
    {
      id: '2',
      name: 'Paypal',
      logo: require('../assets/homescreen/companyLogo/paypalLogo.png'),
      jobsOpen: 40,
    },
    {
      id: '3',
      name: 'Pinterest',
      logo: require('../assets/homescreen/companyLogo/pinterestLogo.png'),
      jobsOpen: 75,
    },
    {
      id: '4',
      name: 'Apple Inc.',
      logo: require('../assets/homescreen/companyLogo/appleLogo.png'),
      jobsOpen: 20,
    },
    {
      id: '5',
      name: 'Spotify',
      logo: require('../assets/homescreen/companyLogo/spotifyLogo.png'),
      jobsOpen: 15,
    },
  ];

  const articals: articals[] = [
    {
      id: '1',
      image: require('../assets/homescreen/articals/groups.png'),
      profileImage: require('../assets/homescreen/articals/profile.png'),
      name: 'Jaohar Raihan',
      time: '35min',
      title: 'The Power of Art & Illustration',
      description: 'Old school console is making a slow comeback in our household. Most of us have been staying in confinement during the holidays.',
      icon: 'eye-outline',
      count: '1.2k',
      icons: 'thumbs-o-up',
      countlike: '30',
    },
    {
      id: '2',
      image: require('../assets/homescreen/articals/groups.png'),
      profileImage: require('../assets/homescreen/articals/profile.png'),
      name: 'Jaohar Raihan',
      time: '35min',
      title: 'The Power of Art & Illustration',
      description: 'Old school console is making a slow comeback in our household. Most of us have been staying in confinement during the holidays.',
      icon: 'eye-outline',
      count: '1.2k',
      icons: 'thumbs-o-up',
      countlike: '30',
    },
    {
      id: '3',
      image: require('../assets/homescreen/articals/groups.png'),
      profileImage: require('../assets/homescreen/articals/profile.png'),
      name: 'Jaohar Raihan',
      time: '35min',
      title: 'The Power of Art & Illustration',
      description: 'Old school console is making a slow comeback in our household. Most of us have been staying in confinement during the holidays.',
      icon: 'eye-outline',
      count: '1.2k',
      icons: 'thumbs-o-up',
      countlike: '30',
    },
  ];

  const trainings: trainings[] = [
    {id: '1',
     image: require('../assets/homescreen/articals/groups.png'),
     profileImage: require('../assets/homescreen/articals/profile.png'),
     name: 'Jaohar Raihan',
     time: '35min',
     title: 'The Power of Bangladesh people',
     description: 'Äll of us have been staying in marathon whole years. We works hard to make our country pride also for our old genarations. Our main focus is to make bangladesh a great country also everyones eats 3 times a day.',
     icon: 'eye-outline',
     count: '1234',
     icons: 'thumbs-o-up',
     countlike: '2433',
    },
    {id: '2',
     image: require('../assets/homescreen/articals/groups.png'),
     profileImage: require('../assets/homescreen/articals/profile.png'),
     name: 'Jaohar Raihan',
     time: '35min',
     title: 'The Power of Bangladesh people',
     description: 'Äll of us have been staying in marathon whole years. We works hard to make our country pride also for our old genarations. Our main focus is to make bangladesh a great country also everyones eats 3 times a day.',
     icon: 'eye-outline',
     count: '1234',
     icons: 'thumbs-o-up',
     countlike: '2433',
    },
    {id: '3',
     image: require('../assets/homescreen/articals/groups.png'),
     profileImage: require('../assets/homescreen/articals/profile.png'),
     name: 'Jaohar Raihan',
     time: '35min',
     title: 'The Power of Bangladesh people',
     description: 'Äll of us have been staying in marathon whole years. We works hard to make our country pride also for our old genarations. Our main focus is to make bangladesh a great country also everyones eats 3 times a day.',
     icon: 'eye-outline',
     count: '1234',
     icons: 'thumbs-o-up',
     countlike: '2433',
    }
  ]

  const categories: string[] = ['All', 'Full Time', 'Part Time', 'Remote', 'Freelance'];

  const getCompanyLogo = (logo: string) => {
    const logoMap: { [key: string]: any } = {
      google: require('../assets/homescreen/companyLogo/googleLogo.png'),
      paypal: require('../assets/homescreen/companyLogo/paypalLogo.png'),
      pinterest: require('../assets/homescreen/companyLogo/pinterestLogo.png'),
      apple: require('../assets/homescreen/companyLogo/appleLogo.png'),
      spotify: require('../assets/homescreen/companyLogo/spotifyLogo.png'),
      valve: require('../assets/homescreen/companyLogo/valveLogo.png'),
      airbnb: require('../assets/homescreen/companyLogo/airbnbLogo.png'),
    };
    return logoMap[logo] || '🏢';
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
          <Image 
            source={job.isBookmarked ? require('../assets/homescreen/bookmark.png') : require('../assets/homescreen/bookmarked.png')}
            style={styles.bookmarkIcon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.jobLocation}>{job.location}</Text>
      
      <View style={styles.salaryContainer}>
        <Text style={styles.salaryText}>
          <Text style={styles.salaryAmount}>{job.salaryMin} - {job.salaryMax}</Text>
          <Text style={styles.salaryPeriod}>{job.period}</Text>
        </Text>
      </View>
      
      <View style={styles.jobTagsContainer}>
        <View style={styles.jobTag}>
          <Text style={styles.jobTagText}>{job.type}</Text>
        </View>
        <View style={styles.jobTag}>
          <Text style={styles.jobTagText}>{job.duration}</Text>
        </View>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply now</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderCompanyCard = (company: Company) => (
    <View key={company.id} style={styles.companyCard}>
      <View style={styles.companyCardLogo}>
        <Image
          source={company.logo}
          style={{ width: 50, height: 50, }}
          resizeMode="contain"
        />
      </View>
       <Text style={styles.companyCardName}>{company.name}</Text>
       <Text style={styles.companyCardJobs}>{company.jobsOpen} Jobs open</Text>
    </View>
  );

  const renderArticalCard = (artical: articals) => (
    <View key={artical.id} style={styles.articleCard}>
      <Image source={artical.image} style={styles.articleImage} />

      <View style={styles.articleContentTop}>
        <View style={styles.articleHeaderRow}>
          <View style={styles.articleAuthorRow}>
            <Image source={artical.profileImage} style={styles.articleProfileImage} />
            <View style={styles.articleInfo}>
              <Text style={styles.articleName}>{artical.name}</Text>
            </View>
          </View>
          <Text style={styles.articleTime}>{artical.time}</Text>
        </View>

        <Text style={styles.articleTitle}>{artical.title}</Text>
        <Text style={styles.articleDescription} numberOfLines={3} ellipsizeMode="tail">{artical.description}</Text>
      </View>

      <View style={styles.articleDivider} />

      <View style={styles.articleFooterRow}>
        <View style={styles.articleStatsRow}>
          <MaterialCommunityIcons name={artical.icon as string} size={18} color={colors.textLight} />
          <Text style={styles.articleCount}>{artical.count}</Text>
        </View>

        <View style={styles.articleLikeRow}>
          <FontAwesome name={artical.icons as string} size={18} color={colors.textLight} />
          <Text style={styles.articleCount}>{artical.countlike}</Text>
        </View>
      </View>
    </View>
  )

  const renderTrainingsCard = (item: trainings) => (
    <View key={item.id} style={styles.trainingsCard}>
      <Image source={item.image} style={styles.trainingImage} />
    <View style={styles.trainingscontenttop}>
    <View style={styles.trainingsheaderrow}>
    <View style={styles.trainingsauthorrow}>
       <Image source={item.profileImage} style={styles.trainingsprofileimage} />
    <View style={styles.trainingsinfo}>
       <Text style={styles.trainingsname}>{item.name}</Text>
    </View>
    </View>
    <Text style={styles.trainingstime}>{item.time}</Text>
    </View>
    <Text style={styles.trainingstitle}>{item.title}</Text>
    <Text style={styles.traningdescription} numberOfLines={3}>{item.description}</Text>
    </View>
    <View style={styles.trainingsdevider} />
    <View style={styles.trainingsfooterrow}>
    <View style={styles.trainingsstatsrow}>
      <MaterialCommunityIcons name={item.icon as string} size={24} color={colors.textLight} />
      <Text style={styles.trainingcount}>{item.count}</Text>
    </View>
    <View style={styles.trainingslikerow}>
      <FontAwesome name={item.icons as string} size={18} color={colors.textLight} />
      <Text style={styles.trainingcount}>{item.countlike}</Text>
    </View>
    </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View style={styles.avatar}>
              <Image source={require('../assets/homescreen/profile.jpg')} style={styles.avatarImage} />
            </View>
            <View>
              <Text style={styles.greeting}>Good Morning 👋</Text>
              <Text style={styles.userName}>Jaohar Raihan</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton} onPress={onNotificationPress}>
            <Image source={require('../assets/homescreen/notificationIcon.png')} style={styles.notificationIcon} />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Image source={require('../assets/homescreen/searchIcon.png')} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for a job or company"
              placeholderTextColor={colors.textLight}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Image source={require('../assets/homescreen/filterIcon.png')} style={styles.filterIcon} />
          </TouchableOpacity>
        </View>

        {/* Hero Banner */}
        <View style={styles.heroBanner}>
          <Image source={require('../assets/homescreen/bghero.png')} style={styles.heroBGImage} />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>
              The future is for{'\n'}those who take the{'\n'}next step
            </Text>
            <View style={styles.heroStats}>
              <View>
                <Text style={styles.heroStatNumber}>2,102</Text>
                <Text style={styles.heroStatLabel}>Active Jobs</Text>
              </View>
              <View style={styles.heroStatDivider} />
              <View>
                <Text style={styles.heroStatNumber}>702</Text>
                <Text style={styles.heroStatLabel}>Organizations</Text>
              </View>
            </View>
          </View>
          <View style={styles.heroImage}>
            <Image source={require('../assets/homescreen/heroimg.png')} style={styles.heroImage} />
          </View>
        </View>

        {/* Jobs Near You Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Jobs Near You</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Job Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.jobsList}
        >
          {jobs.slice(2, 5).map(renderJobCard)}
        </ScrollView>

        {/* Top Company Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Company</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Company Cards */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.companiesContainer}
        >
          {companies.map(renderCompanyCard)}
        </ScrollView>

        {/* Recent Jobs Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Category Filters */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonActive
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[
                styles.categoryButtonText,
                selectedCategory === category && styles.categoryButtonTextActive
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Recent Jobs List */}
        <View style={styles.jobsList}>
          {jobs.slice(1).map(renderJobCard)}
        </View>

        {/* Articles Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Articles</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.companiesContainer}
        >
          {articals.map(renderArticalCard)}
        </ScrollView>

        {/* Training section */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trainings</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.trainingsContainer}
        >
          {trainings.map(renderTrainingsCard)}
        </ScrollView>

        {/* Bottom Padding */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,

  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greeting: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: fontWeight.bold,
    color: colors.black,
  },
  notificationButton: {
    position: 'relative',
    padding: spacing.sm,
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.error,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray100,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.md,
    marginHorizontal: spacing.xs,
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginRight: spacing.sm,
    borderColor: colors.primary,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.textPrimary,
    paddingVertical: spacing.md,
    fontWeight: fontWeight.medium,
  },
  filterButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    width: 25,
    height: 25,
  },
  heroBanner: { 
    flexDirection: 'row', 
    backgroundColor: '#0A66C2', 
    marginHorizontal: spacing.md, 
    borderRadius: 28, 
    padding: 15, 
    width: 370,
    height: 181,
    marginBottom: spacing.md, 
    },
  heroContent: {
    flex: 1,
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: fontWeight.bold,
    color: colors.white,
    marginBottom: 20,
    lineHeight: 25,
    marginLeft: 15,
    
  },
  heroStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 25,
  },
  heroStatNumber: {
    fontSize: 20,
    fontWeight: fontWeight.bold,
    color: colors.white,
  },
  heroStatLabel: {
    fontSize: 14,
    color: colors.white,
    opacity: 0.8,
  },
  heroStatDivider: {
    width: 1,
    height: 30,
    backgroundColor: colors.white,
    marginHorizontal: spacing.md,
    opacity: 0.3,
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
  heroImage: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: spacing.md,
    width: 156,
    height: 156,
  },
  heroImagePlaceholder: {
    fontSize: 60,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: fontWeight.bold,
    color: colors.black,
    marginBottom: spacing.sm,
  },
  seeAllButton: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: fontWeight.bold,
  },
  jobsList: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  jobCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xxl,
    padding: 35,
    marginLeft: spacing.xs,
    marginRight: spacing.md,
    marginBottom: spacing.md,
    ...shadows.sm,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  jobHeader: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  companyLogoContainer: {
    width: 65,
    height: 65,
    borderRadius: borderRadius.xl,
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
    fontSize: 19,
    fontWeight: fontWeight.bold,
    color: colors.black,
    marginBottom: 4,
    marginRight: 55,
  },
  companyName: {
    fontSize: 16,
    color: colors.textLight,
  },
  bookmarkButton: {
    padding: spacing.xs,
    marginHorizontal: -10,
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
    marginHorizontal: -10
  },
  jobLocation: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: spacing.sm,
    marginLeft: -20,
  },
  salaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
    marginLeft: -20,
  },
  salaryText: {
    fontSize: 18,
  },
  salaryAmount: {
    fontWeight: fontWeight.bold,
    color: colors.primary,
  },
  salaryPeriod: {
    color: colors.primary,
  },
  jobTagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -20,
  },
  jobTag: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    marginRight: spacing.sm,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  jobTagText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  applyButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    marginLeft: 'auto',
  },
  applyButtonText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: fontWeight.medium,
  },
  companiesContainer: {
    paddingLeft: spacing.md,
    marginBottom: spacing.xl,
  },
  trainingsContainer: {
    paddingLeft: spacing.md,
    marginBottom: spacing.xl,
  },
  companyCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginRight: spacing.md,
    alignItems: 'center',
    minWidth: 120,
    ...shadows.sm,
    borderWidth: 1,
    borderColor: colors.gray200,
    width: 180,
    height: 180,
  },
  companyCardLogo: {
    width: 65,
    height: 65,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
    backgroundColor: colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',  
  },
  companyCardName: {
    fontSize: 14, 
    fontWeight: fontWeight.medium,
    color: colors.black,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  companyCardJobs: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: fontWeight.medium,
  },
  categoriesContainer: {
    paddingLeft: spacing.md,
    marginBottom: spacing.lg,
  },
  categoryButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    marginRight: spacing.sm,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.textPrimary,
  },
  categoryButtonActive: {
    backgroundColor: colors.primary,
  },
  categoryButtonText: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: fontWeight.bold,
  },
  categoryButtonTextActive: {
    color: colors.white,
  },
  bottomPadding: {
    height: 100,
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.gray200,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },
  navIconActive: {
    width: 20,
    height: 20,
  },
  navIconjob:{
    width: 25,
  },
  navLabelActive: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: fontWeight.bold,
  },
    navIconActivehome: {
    width: 20,
    height: 20,
    color: colors.primary,
  },
  articleCard: {
    width: 330,
    height: 350,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing.md,
    ...shadows.sm,
    borderWidth: 1,
    borderColor: colors.gray200,
    marginRight: spacing.md,
  },
  articleImage: {
    width: '95%',
    height: 160,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: spacing.sm,
    borderRadius: borderRadius.md,
  },
  articleContentTop: {
    padding: spacing.md,
  },
  articleHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  articleAuthorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  articleProfileImage: {
    width: 26,
    height: 26,
    borderRadius: 18,
    marginRight: spacing.sm,
  },
  articleInfo: {
    justifyContent: 'center',
  },
  articleName: {
    fontSize: 16,
    fontWeight: fontWeight.bold,
    color: colors.black,
  },
  articleTime: {
    fontSize: 12,
    color: colors.textLight,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginTop: -5,
  },
  articleDescription: {
    fontSize: 14,
    color: colors.textLight,
    marginTop: spacing.xs,
  },
  articleDivider: {
    height: 1,
    backgroundColor: colors.gray200,
  },
  articleFooterRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: spacing.md,
    gap: 24,
  },
  articleStatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.lg,
  },
  articleLikeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  articleCount: {
    fontSize: 12,
    color: colors.textLight,
    marginLeft: spacing.xs,
  },
  curvedBackground: {
    backgroundColor: '#ffffff',     
    paddingTop: 20,                 
    borderTopLeftRadius: 40,        
    borderTopRightRadius: 40,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -2 },
    elevation: 8,                  
  },
  trainingsCard: {
    width: 330,
    height: 350,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing.md,
    ...shadows.sm,
    borderWidth: 1,
    borderColor: colors.gray200,
    marginRight: spacing.md,
  },
  trainingImage: {
    width: '95%',
    height: 160,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: spacing.sm,
    borderRadius: borderRadius.md,
  },
  trainingscontenttop: {
    padding: spacing.md,
  },
  trainingsheaderrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  trainingsauthorrow: {
        flexDirection: 'row',
    alignItems: 'center',
  },
  trainingsinfo: {
    justifyContent: 'center',
  },
  trainingsprofileimage: {
    width: 26,
    height: 26,
    borderRadius: 18,
    marginRight: spacing.sm,
  },
  trainingsname: {
    fontSize: 16,
    fontWeight: fontWeight.bold,
    color: colors.black,
  },
  trainingstime: {
    fontSize: 12,
    color: colors.textLight,
  },
  trainingstitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginTop: -5,
  },
  traningdescription: {
    fontSize: 14,
    color: colors.textLight,
    marginTop: spacing.xs,
  },
  trainingsdevider: {
    height: 1,
    backgroundColor: colors.gray200,
  },
  trainingsfooterrow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: spacing.md,
    gap: 24,
  },
  trainingsstatsrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.lg,
  },
  trainingcount: {
    fontSize: 12,
    color: colors.textLight,
    marginLeft: spacing.xs,
  },
  trainingslikerow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },

});
