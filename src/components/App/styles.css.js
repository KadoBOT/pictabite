import { StyleSheet } from 'aphrodite';

const keyframes = {
    '0%': {
        transform: 'translateY(-500px)',
    },
    '100%': {
        transform: 'translateY(0px)',
        display: 'list-item'
    }
};

const keyframes1 = {
    '0%': {
        transform: 'translateY(0px)',
        display: 'list-item'
    },
    '100%': {
        transform: 'translateY(-500px)',
        display: 'none'
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
      transform: 'translateY(0px)',
      height: 345,
      // WebkitAnimation: 'x 2s 1',
      // MozAnimation: 'x 2s 1',
      // OAnimation: 'x 2s 1',
      // animation: 'x 2s 1',
      // animationName: keyframes,
      WebkitTransition: 'all 1s linear', /* For Safari 3.1 to 6.0 */
      transition: 'all 1s linear'
    },
    menuOff: {
      height: 0,
      transform: 'translateY(-500px)',
      WebkitTransition: 'all 0.5s linear', /* For Safari 3.1 to 6.0 */
      transition: 'all 0.5s linear'
      // WebkitAnimation: 'x 1s 1 forwards',
      // MozAnimation: 'x 1s 1 forwards',
      // OAnimation: 'x 1s 1 forwards',
      // animation: 'x 1s 1 forwards',
      // animationName: keyframes1
    }
});
