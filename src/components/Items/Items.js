// @flow

import React from 'react';
import { css } from 'aphrodite';
import { observer } from 'mobx-react';
import {styles} from './styles.css';
import FontIcon from 'react-toolbox/lib/font_icon';

const Items = observer(({active, clickHandler, item, menuOn}) => {
  const activeMenu = () => {
    clickHandler(item);
  }
  return(
    <div
      className={css(styles.item, active === item ? styles.active : '')}
      onClick={menuOn ? activeMenu : ''}
    >
      {item}
      <FontIcon
        className={css(styles.icon)}
        value='edit' />
    </div>
  )
})

Items.propTypes = {
  store: React.PropTypes.object
}

export default Items;
