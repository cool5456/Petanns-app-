import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

// RANGI ZA PETANNS - Kutoka kwa Gari
const COLORS = {
  blue: '#0091DA',      // Blue ya Gari
  darkBlue: '#0069A8',  // Blue kali
  red: '#E31E24',       // Red ya CAUTION
  white: '#FFFFFF',
  lightGrey: '#F2F6F9',
  black: '#1A1A1A',
  grey: '#666666',
};

export default function App() {
  const [page, setPage] = useState('home');
  const [name, setName] = useState('');

  const go = (p) => setPage(p);

  return (
    <View style={styles.container}>
      {/* HEADER - BLUE KAMA GARI */}
      <View style={styles.header}>
        <Text style={styles.logo}>🚗 PETANNS</Text>
        <Text style={styles.logoSub}>CAUTION • DRIVER UNDER INSTRUCTION</Text>
        <Text style={styles.headerPhone}>To Enrol Dial 483*4#  |  0705 05 05 04</Text>
      </View>

      <ScrollView style={styles.content}>
        {page === 'home' && (
          <View>
            <View style={styles.welcomeBox}>
              <Text style={styles.welcomeTitle}>Karibu Petanns! 👋</Text>
              <Text style={styles.welcomeText}>Leo kwa Petanns - Chagua unachotaka kufanya leo.</Text>
            </View>

            {/* RED BANNER KAMA YA GARI */}
            <View style={styles.redBanner}>
              <Text style={styles.redBannerText}>⚠️ CAUTION - DRIVER UNDER INSTRUCTION ⚠️</Text>
              <Text style={styles.redBannerSub}>Book Driving Lesson Leo - KDS 484L</Text>
            </View>

            <Text style={styles.sectionTitle}>EXAMS: KNEC Registration Open</Text>
            <TouchableOpacity style={styles.card} onPress={() => go('courses')}>
              <Text style={styles.cardTitle}>📚 Angalia Courses Zote</Text>
              <Text style={styles.cardText}>ICT, Cosmetology, Hospitality, Driving na zingine</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.card, {borderLeftColor: COLORS.red}]} onPress={() => go('driving')}>
              <Text style={styles.cardTitle}>🚗 Book Driving Lesson</Text>
              <Text style={styles.cardText}>Category B - Manual / Automatic - 0705 05 05 04</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => go('fees')}>
              <Text style={styles.cardTitle}>💰 Angalia Fees Structure</Text>
              <Text style={styles.cardText}>Lipa pole pole - Lipia 483*4#</Text>
            </TouchableOpacity>

            <View style={styles.gradBox}>
              <Text style={styles.gradTitle}>🎓 Graduation - Ndumberi Stadium</Text>
              <Text style={styles.gradText}>Jiandae kuhitimu na Petanns!</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Andika Jina Lako..."
              value={name}
              onChangeText={setName}
            />
            <TouchableOpacity style={styles.blueBtn} onPress={() => Alert.alert('Asante ' + name, 'Tutakucall kwa 0705 05 05 04')}>
              <Text style={styles.btnText}>JIANDIKISHE SASA</Text>
            </TouchableOpacity>
          </View>
        )}

        {page === 'courses' && (
          <View>
            <Text style={styles.sectionTitle}>Courses Zetu</Text>
            {['ICT - Computer Packages', 'Cosmetology - Hair & Beauty', 'Hospitality - Catering', 'Driving School - Category B', 'Electrical Installation', 'Plumbing'].map((c, i) => (
              <View key={i} style={styles.card}><Text style={styles.cardTitle}>{c}</Text><Text style={styles.cardText}>Enrol via 483*4#</Text></View>
            ))}
          </View>
        )}

        {page === 'driving' && (
          <View>
            <Text style={styles.sectionTitle}>🚗 Driving School</Text>
            <View style={[styles.card, {backgroundColor: COLORS.blue}]}><Text style={[styles.cardTitle, {color: 'white'}]}>Honda Grace - KDS 484L</Text><Text style={[styles.cardText, {color: 'white'}]}>Gari yetu ya kujifunzia - Kama picha uliyotuma!</Text></View>
            <TouchableOpacity style={styles.redBtn} onPress={() => Alert.alert('Booked!', 'Tutakucall kwa Driving Lesson')}><Text style={styles.btnText}>BOOK LESSON - 0705 05 05 04</Text></TouchableOpacity>
          </View>
        )}

        {page === 'fees' && (
          <View>
            <Text style={styles.sectionTitle}>Fees Structure</Text>
            <View style={styles.card}><Text style={styles.cardTitle}>Driving - Ksh 12,000</Text><Text style={styles.cardText}>Lipa kwa 483*4#</Text></View>
            <View style={styles.card}><Text style={styles.cardTitle}>ICT - Ksh 8,500 / Term</Text></View>
            <View style={styles.card}><Text style={styles.cardTitle}>Cosmetology - Ksh 15,000 / Term</Text></View>
          </View>
        )}
      </ScrollView>

      {/* BOTTOM NAV - BLUE */}
      <View style={styles.nav}>
        {['home', 'courses', 'driving', 'fees'].map((p) => (
          <TouchableOpacity key={p} onPress={() => go(p)} style={styles.navBtn}>
            <Text style={[styles.navText, page === p && styles.navActive]}>{p === 'home' ? 'Home' : p === 'courses' ? 'Courses' : p === 'driving' ? 'Driving' : 'Fees'}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  header: { backgroundColor: COLORS.blue, paddingTop: 50, paddingBottom: 15, paddingHorizontal: 20, borderBottomWidth: 5, borderBottomColor: COLORS.red },
  logo: { color: 'white', fontSize: 28, fontWeight: 'bold', letterSpacing: 1 },
  logoSub: { color: 'white', fontSize: 11, fontWeight: 'bold', marginTop: 2 },
  headerPhone: { color: 'white', fontSize: 12, marginTop: 8, backgroundColor: COLORS.darkBlue, padding: 6, borderRadius: 6, textAlign: 'center' },
  content: { flex: 1, padding: 16 },
  welcomeBox: { backgroundColor: COLORS.lightGrey, padding: 16, borderRadius: 12, borderLeftWidth: 5, borderLeftColor: COLORS.blue },
  welcomeTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.black },
  welcomeText: { color: COLORS.grey, marginTop: 4 },
  redBanner: { backgroundColor: COLORS.red, padding: 14, borderRadius: 10, marginTop: 14, alignItems: 'center' },
  redBannerText: { color: 'white', fontWeight: 'bold', fontSize: 13, textAlign: 'center' },
  redBannerSub: { color: 'white', fontSize: 12, marginTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 18, marginBottom: 10, color: COLORS.black },
  card: { backgroundColor: 'white', padding: 16, borderRadius: 10, marginBottom: 10, borderLeftWidth: 5, borderLeftColor: COLORS.blue, elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.black },
  cardText: { color: COLORS.grey, marginTop: 4 },
  gradBox: { backgroundColor: COLORS.darkBlue, padding: 16, borderRadius: 10, marginTop: 10 },
  gradTitle: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  gradText: { color: 'white', marginTop: 4 },
  input: { borderWidth: 1, borderColor: '#DDD', borderRadius: 10, padding: 12, marginTop: 16, backgroundColor: 'white' },
  blueBtn: { backgroundColor: COLORS.blue, padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  redBtn: { backgroundColor: COLORS.red, padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 15 },
  nav: { flexDirection: 'row', backgroundColor: COLORS.blue, paddingVertical: 12, paddingBottom: 20, justifyContent: 'space-around', borderTopWidth: 4, borderTopColor: COLORS.red },
  navBtn: { alignItems: 'center' },
  navText: { color: 'white', opacity: 0.7, fontWeight: 'bold' },
  navActive: { opacity: 1, textDecorationLine: 'underline' },
});