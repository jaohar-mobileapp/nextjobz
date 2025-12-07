import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface Tab {
  name: string;
  icon: React.ReactNode;
  onPress: () => void;
  isActive?: boolean;
}

interface CenterButton {
  icon: React.ReactNode;
  name: string;
  onPress: () => void;
}

interface Props {
  tabs: Tab[];
  centerButton: CenterButton;
  backgroundColor?: string;
  activeColor?: string;
  inactiveColor?: string;
}

export function CurvedBottomBar({
  tabs,
  centerButton,
  backgroundColor = '#ffffff',
  activeColor = '#6366F1',
  inactiveColor = '#9CA3AF'
}: Props): React.JSX.Element {
  
  const leftTabs = tabs.slice(0, 2);
  const rightTabs = tabs.slice(2, 4);

  return (
    <View style={styles.container}>
      {/* Curved Background */}
      <View style={[styles.curvedBackground, { backgroundColor }]}>
        {/* Left Circle for Curve */}
        <View style={[styles.curveCircle, styles.leftCircle, { backgroundColor }]} />
        {/* Right Circle for Curve */}
        <View style={[styles.curveCircle, styles.rightCircle, { backgroundColor }]} />
      </View>

      {/* Tab Buttons Container */}
      <View style={styles.tabContainer}>
        {/* Left Tabs */}
        <View style={styles.sideTabsContainer}>
          {leftTabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={styles.tabButton}
              onPress={tab.onPress}
            >
              <View style={styles.tabIconContainer}>
                {tab.icon}
              </View>
              <Text style={[
                styles.tabLabel,
                { color: tab.isActive ? activeColor : inactiveColor }
              ]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Center Space for Floating Button */}
        <View style={styles.centerSpace} />

        {/* Right Tabs */}
        <View style={styles.sideTabsContainer}>
          {rightTabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={styles.tabButton}
              onPress={tab.onPress}
            >
              <View style={styles.tabIconContainer}>
                {tab.icon}
              </View>
              <Text style={[
                styles.tabLabel,
                { color: tab.isActive ? activeColor : inactiveColor }
              ]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Floating Center Button */}
      <TouchableOpacity
        style={[styles.centerButton, { backgroundColor: activeColor }]}
        onPress={centerButton.onPress}
        activeOpacity={0.8}
      >
        <View style={styles.centerButtonIcon}>
          {centerButton.icon}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  curvedBackground: {
    height: 80,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    overflow: 'hidden',
  },
  curveCircle: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    top: -40,
  },
  leftCircle: {
    left: screenWidth / 2 - 80,
  },
  rightCircle: {
    right: screenWidth / 2 - 80,
  },
  tabContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sideTabsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  centerSpace: {
    width: 100,
  },
  tabButton: {
    alignItems: 'center',
    paddingVertical: 8,
    minWidth: 50,
  },
  tabIconContainer: {
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  centerButton: {
    position: 'absolute',
    top: -25,
    left: screenWidth / 2 - 35,
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 12,
  },
  centerButtonIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
