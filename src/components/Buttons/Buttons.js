// @flow

import React from 'react';
import { css } from '../../../node_modules/aphrodite/dist/aphrodite.js';
import {styles} from './styles.css';
import FontIcon from 'react-toolbox/lib/font_icon';

const Buttons = ({reorderMenu}) => {
  const menuButton = (e) => {
    reorderMenu(e.target.getAttribute('name'))
  }
  return(
    <div className={'columns has-text-centered ' + css(styles.bottom)}>
      <div className={'column is-4 ' + css(styles.button)}>
        <FontIcon
          className={css(styles.icon)}
          value='add' />
      </div>
      <div
        className={'column is-4 ' + css(styles.button)}
        onClick={menuButton}>
        <FontIcon
          className={css(styles.icon)}
          name='up'
          value='arrow_upward' />
      </div>
      <div
        className={'column is-4 ' + css(styles.button)}
        onClick={menuButton}>
        <FontIcon
          className={css(styles.icon)}
          name='down'
          value='arrow_downward' />
      </div>
    </div>
  )
}

Buttons.propTypes = {
  reorderMenu: React.PropTypes.func
}

export default Buttons;
