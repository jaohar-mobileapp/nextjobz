import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

interface Props {
  onFinish: () => void;
}

type SplashStage = 'stage1' | 'stage2' | 'stage3' | 'stage4';

export function SplashScreen({ onFinish }: Props): React.JSX.Element {
  const [currentStage, setCurrentStage] = useState<SplashStage>('stage1');
  
  // Animation values
  const circleScale = useSharedValue(0);
  const circleOpacity = useSharedValue(0);
  const xLogoScale = useSharedValue(0);
  const xLogoOpacity = useSharedValue(0);
  const finalLogoScale = useSharedValue(0);
  const finalLogoOpacity = useSharedValue(0);

  const moveToNextStage = (nextStage: SplashStage) => {
    setCurrentStage(nextStage);
  };

  useEffect(() => {
    const sequence = async () => {
      // Stage 1: White background (800ms)
      setTimeout(() => {
        runOnJS(moveToNextStage)('stage2');
      }, 1200);

      // Stage 2: Purple background from circle to full screen (1200ms)
      setTimeout(() => {
        circleScale.value = withSpring(1, {
          mass: 1,
          stiffness: 80,
          damping: 20,
        });
        circleOpacity.value = withTiming(1, { duration: 1200 });
        
        setTimeout(() => {
          runOnJS(moveToNextStage)('stage3');
        }, 1200);
      }, 1200);

      // Stage 3: X logo (1200ms)
      setTimeout(() => {
        xLogoScale.value = withSpring(1, {
          mass: 1,
          stiffness: 100,
          damping: 15,
        });
        xLogoOpacity.value = withTiming(1, { duration: 1200 });
        
        setTimeout(() => {
          runOnJS(moveToNextStage)('stage4');
        }, 1800);
      }, 2000);

      // Stage 4: NextJobz logo  (1200ms)
      setTimeout(() => {
        // Fade out X logo
        xLogoOpacity.value = withTiming(0, { duration: 1200 });
        xLogoScale.value = withTiming(0.8, { duration: 1200 });
        
        // Fade in final logo
        setTimeout(() => {
          finalLogoScale.value = withSpring(1, {
            mass: 1,
            stiffness: 100,
            damping: 15,
          });
          finalLogoOpacity.value = withTiming(1, { duration: 800 });
        }, 200);
        
        // Navigate to onboarding after final stage
        setTimeout(() => {
          runOnJS(onFinish)();
        }, 1800);
      }, 3200);
    };

    sequence();
  }, [onFinish, circleScale, circleOpacity, xLogoScale, xLogoOpacity, finalLogoScale, finalLogoOpacity]);

  // Animated styles
  const circleAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: circleScale.value }],
    opacity: circleOpacity.value,
  }));

  const xLogoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: xLogoScale.value }],
    opacity: xLogoOpacity.value,
  }));

  const finalLogoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: finalLogoScale.value }],
    opacity: finalLogoOpacity.value,
  }));

  const getBackgroundColor = () => {
    switch (currentStage) {
      case 'stage1':
        return '#FFFFFF';
      case 'stage2':
      case 'stage3':
      case 'stage4':
        return '#6633FF';
      default:
        return '#FFFFFF';
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      {/* Stage 2: Animated Circle */}
      {(currentStage === 'stage2' || currentStage === 'stage3' || currentStage === 'stage4') && (
        <Animated.View style={[styles.circle, circleAnimatedStyle]} />
      )}

      {/* Stage 3: X Logo */}
      {(currentStage === 'stage3' || currentStage === 'stage4') && (
        <Animated.View style={[styles.logoContainer, xLogoAnimatedStyle]}>
          <Image 
            source={require('../assets/logo/Xlogo.png')}
            style={styles.xLogo}
            resizeMode="contain"
          />
        </Animated.View>
      )}

      {/* Stage 4: Final NextJobz Logo */}
      {currentStage === 'stage4' && (
        <Animated.View style={[styles.logoContainer, finalLogoAnimatedStyle]}>
          <Image 
            source={require('../assets/logo/logow.png')}
            style={styles.finalLogo}
            resizeMode="contain"
          />
        </Animated.View>
      )}
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  circle: {
    position: 'absolute',
    width: Math.max(width, height) * 2.5,
    height: Math.max(width, height) * 2.5,
    borderRadius: Math.max(width, height) * 1.25,
    backgroundColor: '#6633FF',
    top: height / 2 - Math.max(width, height) * 1.25,
    left: width / 2 - Math.max(width, height) * 1.25,
  },
  logoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  xLogo: {
    width: 180,
    height: 180,
  },
  finalLogo: {
    width: 200,
    height: 180,
  },
  xLogoPlaceholder: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
  },
  xLogoText: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  finalLogoPlaceholder: {
    width: 200,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
  },
  finalLogoText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
