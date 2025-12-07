import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../styles/theme';

interface Props {
  onComplete: () => void;
}

interface OnboardingSlide {
  id: number;
  image: any;
  title: string;
  description: string;
}

const onboardingData: OnboardingSlide[] = [
  {
    id: 1,
    image: require('../assets/onboarding/onboarding1.png'),
    title: "We are the best job portal platform",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: 2,
    image: require('../assets/onboarding/onboarding2.png'),
    title: "We are the best job portal platform",
    description: "The future is for those who take the next step",
  },
  {
    id: 3,
    image: require('../assets/onboarding/onboarding3.png'),
    title: "We are the best job portal platform",
    description: "NextJobz helps you explore careers and connect with global opportunities.",
  }
];

const { width } = Dimensions.get('window');

export function OnboardingScreen({ onComplete }: Props): React.JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleNext = () => {
    if (currentSlide < onboardingData.length - 1) {
      const nextSlide = currentSlide + 1;
      setCurrentSlide(nextSlide);
      scrollViewRef.current?.scrollTo({
        x: nextSlide * width,
        animated: true,
      });
    } else {
      onComplete();
    }
  };

  const onScroll = (event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentSlide(index);
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Slides */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {onboardingData.map((slide) => (
          <View key={slide.id} style={styles.slide}>
            <View style={styles.slideContent}>
              <View style={styles.imageContainer}>
                <Image 
                  source={slide.image} 
                  style={styles.slideImage} 
                  resizeMode="contain"
                />
              </View>
              {/* Text Content */}
              <View style={styles.textContainer}>
                <Text style={styles.slideTitle}>{slide.title}</Text>
                <Text style={styles.slideDescription}>{slide.description}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentSlide && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>

      {/* Next/Get Started Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {currentSlide === onboardingData.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  slideContent: {
    alignItems: 'center',
    maxWidth: 320,
  },
  imageContainer: {
    width: 350,
    height: 505,
    borderRadius: 12,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    bottom: -50,
  },
  textContainer: {
    alignItems: 'center',
    bottom: 15,
  },
  slideTitle: {
    fontSize: fontSize.xxl + 2,
    fontWeight: fontWeight.bold,
    color: colors.black,
    textAlign: 'center',
    marginBottom: spacing.md,
    lineHeight: fontSize.xxl * 1.3,
  },
  slideDescription: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: fontSize.md * 1.5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.lg,
    gap: spacing.sm,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gray300,
  },
  paginationDotActive: {
    backgroundColor: colors.primary,
    width: 24,
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  nextButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md + 2,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    ...shadows.md,
  },
  nextButtonText: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.white,
  },
});
