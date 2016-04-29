import { StyleSheet } from 'aphrodite';

const keyframes = {
    'from': {
        height: 0
    },
    'to': {
        height: 340
    }
};

const keyframes1 = {
    'from': {
        height: 340
    },
    'to': {
        height: 0
    }
};

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        border: '1px solid #C5C5C5',
        padding: 0,
        borderRadius: '10px',
        overflow: 'hidden'
    },
    menu: {
      WebkitBoxShadow: '0px 2px 1px 0px rgba(0,0,0,0.48)',
      MozBoxShadow: '0px 2px 1px 0px rgba(0,0,0,0.48)',
      boxShadow: '0px 2px 1px 0px rgba(0,0,0,0.48)',
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden'
    },
    menuOn: {
      animationName: keyframes,
      animationDuration: '1s',
      animationIterationCount: '1'
    },
    menuOff: {
      animationName: keyframes1,
      animationDuration: '0.5s',
      animationIterationCount: '1',
      animationFillMode: 'forwards'
    }
});
