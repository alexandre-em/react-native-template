import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10,
    elevation: 10,
    margin: 20,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  centerButtonWrapper: {
    top: -20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 8,
  },
  centerButton: {
    backgroundColor: '#007AFF',
    padding: 18,
    borderRadius: 35,
  },
  iconWrapper: {
    padding: 5,
  },
  focused: {
    color: '#007AFF',
  },
  label: {
    fontSize: 12,
    color: '#999',
  },
  focusedLabel: {
    color: '#007AFF',
  },
});
