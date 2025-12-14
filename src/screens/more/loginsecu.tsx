import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import { colors, spacing, borderRadius, fontSize, fontWeight, shadows } from '../../styles/theme';

const { width } = Dimensions.get('window');

export default function loginsecu() {
  const navigation = useNavigation<any>();
  const [sheetVisible, setSheetVisible] = useState(false);
  const [selected, setSelected] = useState<'email' | 'password'>('email');

  const openSheet = () => setSheetVisible(true);
  const closeSheet = () => setSheetVisible(false);
  const onContinue = () => {
    closeSheet();
    if (selected === 'email') navigation.navigate('personalinfoedit');
    else navigation.navigate('personalinfoedit');
  };

  return (
    <>
      <ScrollView style={styles.container}>
          <View>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <MaterialCommunityIcons name="arrow-left" size={24}/>
                </TouchableOpacity>
                  <Text style={styles.headertext}>Login & Security</Text>
                <TouchableOpacity style={styles.editButton} onPress={openSheet}>
                  <MaterialCommunityIcons name="square-edit-outline" size={24} style={styles.editicon} />
                </TouchableOpacity>
              </View>
              <View style={styles.inputmailContainer}>
                  <MaterialCommunityIcons name="email-outline" size={20} color={colors.black} />
                  <Text style={styles.inputmailtext}>jaoharraihan@gmail.com</Text>
               </View>
               <View style={styles.inputpassContainer}>
                  <MaterialCommunityIcons name="lock-outline" size={20} color={colors.black} />
                  <Text style={styles.inputpasstext}>**********</Text>
               </View>
          </View>
      </ScrollView>

      <Modal
        isVisible={sheetVisible}
        animationIn="slideInUp"
        style={styles.modal}
      >
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={closeSheet} />
        <View style={styles.sheetContainer}>
          <View style={styles.sheetHandle} />
          <Text style={styles.sheetTitle}>Which one you wish to update?</Text>
          <View style={styles.sheetDivider} />

          <View style={styles.optionsRow}>
            <TouchableOpacity
              style={[styles.optionCard, selected === 'email' && styles.optionCardSelected]}
              activeOpacity={0.8}
              onPress={() => setSelected('email')}
            >
              <View style={styles.optionInner}>
                <View style={styles.optionIconWrapper}>
                  <MaterialCommunityIcons name="email-outline" size={28} color={selected === 'email' ? colors.primary : '#9CA3AF'} />
                </View>
                <Text style={styles.optionLabel}>Email</Text>
                <View style={styles.radioOuter}>
                  {selected === 'email' && <View style={styles.radioInner} />}
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.optionCard, selected === 'password' && styles.optionCardSelected]}
              activeOpacity={0.8}
              onPress={() => setSelected('password')}
            >
              <View style={styles.optionInner}>
                <View style={styles.optionIconWrapper}>
                  <MaterialCommunityIcons name="lock-outline" size={28} color={selected === 'password' ? colors.primary : '#9CA3AF'} />
                </View>
                <Text style={[styles.optionLabel, { color: '#9CA3AF' }]}>Password</Text>
                <View style={styles.radioOuter}>
                  {selected === 'password' && <View style={styles.radioInner} />}
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={closeSheet}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.continueButton} onPress={onContinue} activeOpacity={0.9}>
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
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
        color: colors.primary,
        marginLeft: 8,
    },
    editButton: {
        marginLeft: 'auto',
    },
    inputmailContainer:{
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputmailtext:{
        fontSize: 16,
        color: colors.black,
        marginLeft: spacing.xl,
        marginTop: -20,
    },
    inputpassContainer: {
        backgroundColor: colors.white,
        borderColor: colors.gray300,
        borderWidth: 1,
        borderRadius: borderRadius.xl,
        padding: 14,
        paddingHorizontal: spacing.sm,
        marginTop: 10,
        marginLeft: spacing.md,
        marginRight: spacing.md,
        marginBottom: spacing.md,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputpasstext: {
        fontSize: 16,
        color: colors.black,
        marginLeft: spacing.xl,
        marginTop: -15,
    },
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.35)'
    },
    sheetContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#fff',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      paddingTop: 12,
      paddingBottom: 32,
      paddingHorizontal: 18,
      ...shadows.lg,
    },
    sheetHandle: {
      width: 60,
      height: 6,
      backgroundColor: '#E5E7EB',
      borderRadius: 6,
      alignSelf: 'center',
      marginBottom: 12,
    },
    sheetTitle: {
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 12,
    },
    sheetDivider: {
      height: 1,
      backgroundColor: colors.gray200,
      marginBottom: 18,
    },
    optionsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    optionCard: {
      width: (width - 64) / 2,
      height: 160,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: '#E5E7EB',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 14,
    },
    optionCardSelected: {
      borderColor: colors.primary,
      ...shadows.lg,
    },
    optionInner: {
      alignItems: 'center',
    },
    optionIconWrapper: {
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: '#F3F4F6',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
    },
    optionLabel: {
      fontSize: 16,
      fontWeight: '600',
      marginTop: 8,
    },
    radioOuter: {
      width: 22,
      height: 22,
      borderRadius: 11,
      borderWidth: 2,
      borderColor: '#9CA3AF',
      marginTop: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioInner: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: colors.primary,
    },
    actionsRow: {
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'space-between',
    },
    cancelButton: {
      flex: 1,
      backgroundColor: colors.gray100,
      padding: 14,
      borderRadius: 12,
      marginRight: 12,
      alignItems: 'center',
    },
    continueButton: {
      flex: 1,
      backgroundColor: colors.primary,
      padding: 14,
      borderRadius: 12,
      alignItems: 'center',
      ...shadows.lg,
    },
    cancelText: {
      color: colors.gray700,
      fontWeight: '600',
    },
    continueText: {
      color: '#fff',
      fontWeight: '700',
    }
})