import { StyleSheet } from 'aphrodite';

export const styles = StyleSheet.create({
  item: {
      border: 'none',
      lineHeight: 2,
      padding: 20,
      borderBottom: '1px solid #E6E6E6',
      fontWeight: '600',
      color: '#CE1C24',
      cursor: 'pointer',
      width: '100%',
      backgroundColor: 'white'
  },
  hidden: {
    display: 'none'
  },
  icon: {
      float: 'right',
      color: '#CE1C24',
      border: '2px solid #C5C5C5',
      borderRadius: '5px',
      marginTop: -10,
      padding: 5
  },
  active: {
    borderLeft: '6px solid #CE1C24'
  }
});
