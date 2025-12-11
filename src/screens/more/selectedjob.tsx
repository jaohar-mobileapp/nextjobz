import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../../styles/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

export class selectedjob extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <MaterialComunityIcons name="arrow-left" size={24} color= '#000' />
        <Text style={styles.headertext}>Settings</Text>
        </View>
        <View style={styles.frame}>
            <AntDesign name="loading-3-quarters" size={24} color= '#000' />

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
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
        
    }

})

export default selectedjob