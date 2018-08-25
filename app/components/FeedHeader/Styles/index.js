import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerPadding: { padding: 15 },
  welcomeBack: { color: '#fff', fontSize: 13 },
  mainContentContainer: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'},
  header: { color: '#fff', fontWeight: 'bold', fontSize: 28 },
  iconsContainer: { flex: 1, justifyContent: 'space-between', flexDirection: 'row', marginLeft: 8 },
  inputStyles: { borderRadius: 8, margin: 0, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' },
  inputContainer: { marginTop: -6, backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0, width: '100%', paddingBottom: 15, paddingRight: 15, paddingLeft: 15 },
  clearIcon: {
    marginTop: -8,
    marginRight: 4
  },
  searchIcon: {marginTop: -8, marginLeft: 5}
});

export default styles;