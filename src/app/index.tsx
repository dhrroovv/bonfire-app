import { SymbolView } from 'expo-symbols';
import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const brandIcon = require('@/assets/icons/burn.png');

type TripChat = {
  accent: string;
  id: string;
  memberNames: string[];
  name: string;
};

const tripChats: TripChat[] = [
  {
    id: 'goa',
    name: 'Goa getaway',
    memberNames: ['Dhruv', 'Aarav', 'Maya', 'Kabir', 'Riya', 'Arjun'],
    accent: '#D87D4A',
  },
  {
    id: 'japan',
    name: 'Japan 2026',
    memberNames: ['Dhruv', 'Nisha', 'Ishaan', 'Tara'],
    accent: '#7869B5',
  },
  {
    id: 'himachal',
    name: 'Himachal long weekend',
    memberNames: ['Dhruv', 'Sana', 'Veer', 'Meera', 'Rohan'],
    accent: '#4F9A87',
  },
  {
    id: 'london',
    name: 'London reunion',
    memberNames: ['Dhruv', 'Anya', 'Dev', 'Neil', 'Zoya'],
    accent: '#B56C7D',
  },
];

export default function ChatsScreen() {
  const [search, setSearch] = useState('');
  const filteredChats = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return tripChats;

    return tripChats.filter(
      (chat) =>
        chat.name.toLowerCase().includes(query) ||
        chat.memberNames.some((member) => member.toLowerCase().includes(query)),
    );
  }, [search]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <Image source={brandIcon} style={styles.brandIcon} />
          <Text style={styles.title}>Bonfire</Text>
        </View>
        <Pressable accessibilityLabel="Create a trip group" style={styles.createButton}>
          <SymbolView
            name={{ ios: 'plus', android: 'add', web: 'add' }}
            size={22}
            tintColor="#F8F6F4"
          />
        </Pressable>
      </View>

      <View style={styles.searchBox}>
        <SymbolView
          name={{ ios: 'magnifyingglass', android: 'search', web: 'search' }}
          size={22}
          style={styles.searchIcon}
          tintColor="#AAA6AE"
        />
        <TextInput
          accessibilityLabel="Search trip groups"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setSearch}
          placeholder="Search trip groups"
          placeholderTextColor="#8A878E"
          style={styles.searchInput}
          value={search}
        />
      </View>

      <ScrollView contentContainerStyle={styles.listContent} keyboardShouldPersistTaps="handled">
        {filteredChats.length ? (
          filteredChats.map((chat) => (
            <Pressable key={chat.id} style={styles.chatRow}>
              <View style={[styles.avatar, { backgroundColor: chat.accent }]}>
                <Text style={styles.avatarText}>{chat.name.charAt(0)}</Text>
              </View>
              <View style={styles.chatDetails}>
                <View style={styles.chatTitleRow}>
                  <Text numberOfLines={1} style={styles.chatName}>
                    {chat.name}
                  </Text>
                  <Text style={styles.memberCount}>{chat.memberNames.length} members</Text>
                </View>
                <Text ellipsizeMode="tail" numberOfLines={1} style={styles.members}>
                  {chat.memberNames.join(', ')}
                </Text>
              </View>
            </Pressable>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No trip groups found</Text>
            <Text style={styles.emptyText}>Try another group or member name.</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomNav}>
        <Pressable accessibilityLabel="Groups" accessibilityState={{ selected: true }} style={styles.navItem}>
          <View style={styles.navIconContainer}>
            <SymbolView
              name={{ ios: 'person.2.fill', android: 'group', web: 'group' }}
              size={26}
              tintColor="#F07D43"
            />
          </View>
          <Text style={styles.navLabelActive}>Groups</Text>
        </Pressable>
        <Pressable accessibilityLabel="Settings" style={styles.navItem}>
          <View style={styles.navIconContainer}>
            <SymbolView
              name={{ ios: 'gearshape.fill', android: 'settings', web: 'settings' }}
              size={26}
              tintColor="#99949D"
            />
          </View>
          <Text style={styles.navLabel}>Settings</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#151317' },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  brandRow: { alignItems: 'center', flexDirection: 'row', gap: 9 },
  brandIcon: { height: 25, tintColor: '#F07D43', width: 25 },
  title: { color: '#F8F6F4', fontSize: 29, fontWeight: '700', letterSpacing: -0.8 },
  createButton: {
    alignItems: 'center',
    backgroundColor: '#2A272D',
    borderRadius: 18,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  searchBox: {
    alignItems: 'center',
    backgroundColor: '#26232A',
    borderRadius: 24,
    flexDirection: 'row',
    height: 48,
    marginHorizontal: 20,
    marginTop: 18,
    paddingHorizontal: 16,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { color: '#F8F6F4', flex: 1, fontSize: 16, height: '100%' },
  listContent: { paddingBottom: 88, paddingTop: 12 },
  chatRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 13,
    minHeight: 82,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  avatar: { alignItems: 'center', borderRadius: 25, height: 50, justifyContent: 'center', width: 50 },
  avatarText: { color: '#FFF9F5', fontSize: 20, fontWeight: '700' },
  chatDetails: { flex: 1, gap: 5, minWidth: 0 },
  chatTitleRow: { alignItems: 'center', flexDirection: 'row', gap: 8 },
  chatName: { color: '#F8F6F4', flex: 1, fontSize: 16, fontWeight: '700' },
  memberCount: { color: '#98939D', fontSize: 12 },
  members: { color: '#A8A3AC', fontSize: 14 },
  emptyState: { alignItems: 'center', gap: 6, paddingHorizontal: 24, paddingTop: 70 },
  emptyTitle: { color: '#F8F6F4', fontSize: 17, fontWeight: '700' },
  emptyText: { color: '#A8A3AC', fontSize: 14, textAlign: 'center' },
  bottomNav: {
    alignItems: 'center',
    backgroundColor: '#201D22',
    borderTopColor: '#302C33',
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 4,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  navItem: { alignItems: 'center', gap: 4, minWidth: 92, paddingVertical: 2 },
  navIconContainer: { alignItems: 'center', height: 30, justifyContent: 'center', width: 30 },
  navLabel: { color: '#99949D', fontSize: 14, fontWeight: '600' },
  navLabelActive: { color: '#F07D43', fontSize: 14, fontWeight: '700' },
});
