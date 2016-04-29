import { StyleSheet } from 'aphrodite';

const keyframes = {
    'from': {
        backgroundColor: '#E6E6E6'
    },
    'to': {
        backgroundColor: 'white'
    }
};

const keyframes1 = {
    'from': {
        backgroundColor: 'white'
    },
    'to': {
        backgroundColor: '#E6E6E6'
    }
};

export const styles = StyleSheet.create({
  item: {
      animationName: keyframes,
      animationDuration: '0.5s',
      animationIterationCount: '1',
      padding: 20,
      borderBottom: '1px solid #E6E6E6',
      fontWeight: '600',
      color: '#AFAFAF',
      backgroundColor: 'white',
      cursor: 'pointer'
  },
  icon: {
      float: 'right',
      color: '#CE1C24',
      border: '2px solid #C5C5C5',
      borderRadius: '5px',
      marginTop: -10,
      padding: 5,
      backgroundColor: 'transparent'
  },
  disabled: {
    animationName: keyframes1,
    animationDuration: '0.5s',
    animationIterationCount: '1',
    backgroundColor: '#E6E6E6',
    color: '#BFBFBF',
    borderBottom: '1px solid #CCC'
  },
  active: {
    borderLeft: '6px solid #CE1C24',
    color: '#CE1C24'
  }
});
