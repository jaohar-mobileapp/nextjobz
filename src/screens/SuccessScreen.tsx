import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Animated,
} from 'react-native';
import { colors, spacing, borderRadius, fontSize, fontWeight } from '../styles/theme';

interface Props {
  onComplete: () => void;
}

export function SuccessScreen({ onComplete }: Props): React.JSX.Element {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const dotsRotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start animations
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
    ]).start();

    // Rotate dots animation
    Animated.loop(
      Animated.timing(dotsRotateAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      })
    ).start();

    // Auto-navigate after 3 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete, fadeAnim, scaleAnim, progressAnim, dotsRotateAnim]);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '55%'],
  });

  const dotsRotate = dotsRotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      
      {/* Background with gradient overlay */}
      <View style={styles.background}>
        {/* Success Card */}
        <Animated.View 
          style={[
            styles.successCard,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          {/* Animated Checkmark with Rotating Dots */}
          <View style={styles.checkmarkContainer}>
            <Animated.View 
              style={[
                styles.dotsContainer,
                {
                  transform: [{ rotate: dotsRotate }],
                },
              ]}
            >
              {/* Large green dots */}
              <View style={[styles.animatedDot, styles.largeDot, styles.greenDot1]} />
              <View style={[styles.animatedDot, styles.largeDot, styles.greenDot2]} />
              
              {/* Medium purple dots */}
              <View style={[styles.animatedDot, styles.mediumDot, styles.purpleDot1]} />
              <View style={[styles.animatedDot, styles.mediumDot, styles.purpleDot2]} />
              
              {/* Small green and purple dots */}
              <View style={[styles.animatedDot, styles.smallDot, styles.greenDot3]} />
              <View style={[styles.animatedDot, styles.smallDot, styles.purpleDot3]} />
            </Animated.View>
            
            <View style={styles.checkmarkCircle}>
              <View style={styles.shieldIcon}>
                <Text style={styles.checkmark}>✓</Text>
              </View>
            </View>
          </View>
          
          <Text style={styles.title}>Congratulations!</Text>
          <Text style={styles.subtitle}>
            You have successfully create your{'\n'}Nextjobz account.
          </Text>
          
          {/* Animated Progress bar */}
          <View style={styles.progressContainer}>
            <Animated.View 
              style={[
                styles.progressBar,
                { width: progressWidth }
              ]} 
            />
          </View>
          
          <Text style={styles.progressText}>Getting to the SignIn</Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },
  successCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 15,
  },
  checkmarkContainer: {
    position: 'relative',
    marginBottom: spacing.xl,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsContainer: {
    position: 'absolute',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkCircle: {
    width: 130,
    height: 130,
    borderRadius: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 12,
  },
  shieldIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: fontWeight.bold,
  },
  animatedDot: {
    borderRadius: 50,
    position: 'absolute',
  },
  largeDot: {
    width: 18,
    height: 18,
  },
  mediumDot: {
    width: 14,
    height: 14,
  },
  smallDot: {
    width: 10,
    height: 10,
  },
  greenDot1: {
    backgroundColor: '#22C55E',
    top: 20,
    left: 70,
  },
  greenDot2: {
    backgroundColor: '#22C55E',
    top: 60,
    right: 20,
  },
  greenDot3: {
    backgroundColor: '#22C55E',
    bottom: 40,
    left: 30,
  },
  purpleDot1: {
    backgroundColor: '#A855F7',
    top: 10,
    right: 60,
  },
  purpleDot2: {
    backgroundColor: '#A855F7',
    bottom: 20,
    right: 70,
  },
  purpleDot3: {
    backgroundColor: '#A855F7',
    bottom: 60,
    left: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: fontWeight.bold,
    color: colors.primary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: spacing.xl,
  },
  progressContainer: {
    width: '70%',
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'center',
    fontWeight: '500',
  },
});
