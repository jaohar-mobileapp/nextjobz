import { ScrollView, StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../../styles/theme';



export default function loginsecu() {
  const navigation = useNavigation();

  return (
      <ScrollView style={styles.container}>
          <View>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <MaterialCommunityIcons name="arrow-left" size={24}/>
                </TouchableOpacity>
                  <Text style={styles.headertext}>Login & Security</Text>
                <TouchableOpacity style={styles.editButton} onPress={() => { /* handle edit */ }}>
                  <MaterialCommunityIcons name="square-edit-outline" size={24} style={styles.editicon} />
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                  <MaterialCommunityIcons name="email-outline" size={20} color={colors.black} />
                  <Text style={styles.inputtext}>jaoharraihan@gmail.com</Text>
               </View>

          </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        paddingVertical: spacing.xxxl,
    },
    headertext: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 16,
    },
    editicon:{
        color: colors.primaryLight,
        marginLeft: 8,
    },
    editButton: {
        marginLeft: 'auto',
    },
    inputContainer:{
        backgroundColor: colors.white,
        borderColor: colors.gray300,
        borderWidth: 1,
        borderRadius: borderRadius.xl,
        padding: 14,
        paddingHorizontal: spacing.sm,
        marginTop: -30,
        marginLeft: spacing.md,
        marginRight: spacing.md,
        marginBottom: spacing.md,
    },
    inputtext:{
        fontSize: 16,
        color: colors.black,
        marginLeft: spacing.xl,
        marginTop: -20,
    }
})