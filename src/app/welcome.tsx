import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const heroImage = require('@/assets/images/casey-horner-4rDCa5hBlCs-unsplash.jpg');
const brandIcon = require('@/assets/icons/burn.png');
const googleIcon = require('@/assets/icons/GoogleG_FullColor_RGB.png');
const phoneIcon = require('@/assets/icons/phone-call.png');
const RNImage = require('react-native').Image;

export default function WelcomeScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={heroImage} style={styles.hero}>
        <LinearGradient
          colors={['rgba(30, 25, 23, 0.75)', 'rgba(30, 25, 23, 0.2)', '#1E1917']}
          locations={[0, 0.5, 1]}
          style={StyleSheet.absoluteFill}
        />
      </ImageBackground>

      <SafeAreaView style={styles.safeArea}>
        <Pressable accessibilityLabel="Skip welcome" style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>

        <View style={styles.content}>
          <View style={styles.brand}>
            <RNImage accessibilityLabel="Bonfire" source={brandIcon} style={styles.brandIcon} />
            <Text style={styles.brandName}>bonfire</Text>
            <Text style={styles.tagline}>The only app your friends circle need.</Text>
          </View>

          <View style={styles.actions}>
            <Pressable accessibilityLabel="Continue with Google" style={styles.googleButton}>
              <RNImage accessibilityLabel="Google" source={googleIcon} style={styles.googleIcon} />
              <Text style={styles.googleButtonText}>Continue with Google</Text>
            </Pressable>
            <Pressable accessibilityLabel="Continue with phone" style={styles.phoneButton}>
              <RNImage accessibilityLabel="Phone" source={phoneIcon} style={styles.phoneIcon} />
              <Text style={styles.phoneButtonText}>Continue with Phone</Text>
            </Pressable>
          </View>

          <Text style={styles.legalText}>
            By continuing, you agree to our Privacy Policy and Terms of Service.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1E1917',
  },
  hero: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  skipButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  skipText: {
    color: '#FFF7F0',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    alignItems: 'center',
    gap: 28,
    paddingBottom: 16,
  },
  brand: {
    alignItems: 'center',
    gap: 8,
  },
  brandIcon: {
    height: 56,
    resizeMode: 'contain',
    tintColor: '#FFF7F0',
    width: 56,
  },
  brandName: {
    color: '#FFF7F0',
    fontSize: 40,
    fontWeight: '700',
    letterSpacing: -1.5,
  },
  tagline: {
    color: '#CBBDB5',
    fontSize: 16,
  },
  actions: {
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 12,
  },
  googleButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    flexDirection: 'row',
    height: 52,
    justifyContent: 'center',
    maxWidth: 350,
    width: '100%',
  },
  googleIcon: {
    height: 36,
    left: 20,
    position: 'absolute',
    width: 36,
  },
  googleButtonText: {
    color: '#1F1F1F',
    fontSize: 16,
    fontWeight: '700',
  },
  phoneButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    flexDirection: 'row',
    height: 52,
    justifyContent: 'center',
    maxWidth: 350,
    width: '100%',
  },
  phoneIcon: {
    height: 18,
    left: 30,
    position: 'absolute',
    tintColor: '#1F1F1F',
    width: 18,
  },
  phoneButtonText: {
    color: '#1F1F1F',
    fontSize: 16,
    fontWeight: '700',
  },
  legalText: {
    color: '#A99B94',
    fontSize: 12,
    lineHeight: 18,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
});
