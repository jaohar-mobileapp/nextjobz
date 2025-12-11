import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { borderRadius, colors, spacing } from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const PersonalInfoEdit: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headertext}>Personal Information</Text>
      </View>
      <View>
        <View>
            <Text style={styles.subtext}>First name</Text>
        <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="account" size={20} color={colors.black} />
            <TextInput style={styles.inputtext} placeholder='Jaohar' />
        </View>
        <View>
            <Text style={styles.subtext}>Last Name</Text>
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="account" size={20} color={colors.black} />
                <TextInput style={styles.inputtext} placeholder='Raihan' />
            </View>
        </View>
        <View>
            <Text style={styles.subtext}>Phone Number</Text>
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="flag-checkered" size={20} color={colors.black} />
                <TextInput style={styles.inputtext} placeholder='+88 01874517426' />
            </View>
        </View>
        <View>
            <Text style={styles.subtext}>Email address</Text>
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="email-outline" size={20} color={colors.black} />
                <TextInput style={styles.inputtext} placeholder='jaoharraihan@gmail.com' />
            </View>
        </View>
        </View>
        <View style={styles.line} />
        <TouchableOpacity style={styles.button} onPress={() => {}} activeOpacity={0.8}>
          <Text style={styles.buttontext}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.background,
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: spacing.xxl,
  },
  headertext: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 16,
  },
  subtext:{
    fontSize: 14,
    fontWeight: '400',
    color: colors.gray900,
    marginLeft: 16,
  },
  inputContainer:{
    backgroundColor: colors.white,
    borderColor: colors.gray300,
    borderWidth: 1,
    borderRadius: borderRadius.xl,
    padding: 14,
    paddingHorizontal: spacing.sm,
    marginTop: spacing.md,
    marginLeft: spacing.md,
    marginRight: spacing.md,
    marginBottom: spacing.md,
  },
  inputtext:{
    fontSize: 16,
    color: colors.black,
    marginLeft: spacing.xl,
    marginTop: -20,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray300,
    marginVertical: spacing.lg,
   },
   button: {
    backgroundColor: '#805CF6',
    borderRadius: borderRadius.xl,
    padding: 20,
    margin: spacing.md,
  },
  buttontext: {
    color: colors.white,
    fontWeight: '700',
    textAlign: 'center'
  }

})

export default PersonalInfoEdit