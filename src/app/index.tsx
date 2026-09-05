import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TripGroup = {
  id: string;
  name: string;
  members: number;
};

const tripGroups: TripGroup[] = [
  { id: 'goa', name: 'Goa getaway', members: 6 },
  { id: 'japan', name: 'Japan 2026', members: 4 },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>BONFIRE</Text>
          <Text style={styles.greeting}>Good evening, Dhruv</Text>
          <Text style={styles.intro}>Your shared trips, all in one place.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your trip groups</Text>
          {tripGroups.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>No trip groups yet</Text>
              <Text style={styles.emptyText}>Create one to start planning together.</Text>
            </View>
          ) : (
            tripGroups.map((group) => (
              <Pressable key={group.id} style={styles.groupCard}>
                <View style={styles.groupIcon}>
                  <Text style={styles.groupIconText}>{group.name.charAt(0)}</Text>
                </View>
                <View style={styles.groupDetails}>
                  <Text style={styles.groupName}>{group.name}</Text>
                  <Text style={styles.memberCount}>
                    {group.members} {group.members === 1 ? 'member' : 'members'}
                  </Text>
                </View>
                <Text style={styles.chevron}>›</Text>
              </Pressable>
            ))
          )}
        </View>

        <Pressable style={styles.createButton}>
          <Text style={styles.createButtonText}>+ Create a trip group</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFF9F3' },
  content: { flexGrow: 1, gap: 32, padding: 24 },
  header: { gap: 8, paddingTop: 16 },
  eyebrow: { color: '#B84A28', fontSize: 12, fontWeight: '700', letterSpacing: 1.4 },
  greeting: { color: '#241914', fontSize: 30, fontWeight: '700', letterSpacing: -0.6 },
  intro: { color: '#70615A', fontSize: 16 },
  section: { gap: 12 },
  sectionTitle: { color: '#241914', fontSize: 20, fontWeight: '700' },
  groupCard: {
    alignItems: 'center', backgroundColor: '#FFFFFF', borderColor: '#EFE5DC', borderRadius: 16,
    borderWidth: 1, flexDirection: 'row', gap: 14, padding: 16,
  },
  groupIcon: {
    alignItems: 'center', backgroundColor: '#F5D7C8', borderRadius: 14, height: 48,
    justifyContent: 'center', width: 48,
  },
  groupIconText: { color: '#8A321B', fontSize: 20, fontWeight: '700' },
  groupDetails: { flex: 1, gap: 4 },
  groupName: { color: '#241914', fontSize: 16, fontWeight: '600' },
  memberCount: { color: '#70615A', fontSize: 14 },
  chevron: { color: '#A18F85', fontSize: 28, lineHeight: 28 },
  emptyState: {
    alignItems: 'center', backgroundColor: '#FFFFFF', borderColor: '#EFE5DC', borderRadius: 16,
    borderStyle: 'dashed', borderWidth: 1, gap: 8, padding: 32,
  },
  emptyTitle: { color: '#241914', fontSize: 16, fontWeight: '600' },
  emptyText: { color: '#70615A', fontSize: 14, textAlign: 'center' },
  createButton: { alignItems: 'center', backgroundColor: '#B84A28', borderRadius: 14, marginTop: 'auto', paddingVertical: 16 },
  createButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});
