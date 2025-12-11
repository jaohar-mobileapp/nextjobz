import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing } from '../../styles/theme';

const PersonalInfo: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#0d0c0cff" />
          </TouchableOpacity>
          <Text style={styles.headertext}>Personal Information</Text>
          <TouchableOpacity style={styles.editicon} onPress={() => navigation.navigate('personalinfoedit')}>
            <MaterialCommunityIcons name="square-edit-outline" size={24} color="#6366F1" />
          </TouchableOpacity>
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.info}>Jaohar</Text>
          <Text style={styles.info}>Raihan </Text>
          <Text style={styles.info}>🇧🇩 +88 01874517426</Text>
          <Text style={styles.info}>jaohar@gmail.com</Text>
        </View>

      </ScrollView>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingVertical: spacing.xxxl,
  },
  headertext: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 16,
  },
  editicon:{
    fontSize: 24,
    color: '#0d0c0cff',
    marginLeft: 80,
  },
  info:{
    fontSize: 18,
    fontWeight: '400',
    marginTop: 25,
    backgroundColor: colors.gray100,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 16,
    borderRadius: 8,
  },
  subcontainer:{
    marginVertical: -50,
  }
})

export default PersonalInfo