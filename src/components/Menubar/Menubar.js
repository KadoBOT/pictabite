// @flow

import React from 'react';
import { css } from 'aphrodite';
import {styles} from './styles.css';
import FontIcon from 'react-toolbox/lib/font_icon';

const Menubar = ({store}) => (
  <div className={css(styles.menu)}>
    DINNER
    <FontIcon
      className={css(styles.icon)}
      onClick={store.clickButton}
      value='keyboard_arrow_down'/>
  </div>
)

Menubar.propTypes = {
  store: React.PropTypes.object
}

export default Menubar;
