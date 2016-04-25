// @flow

import React from 'react';
import { css } from 'aphrodite';
import { observer } from 'mobx-react';
import {styles} from './styles.css';
import FontIcon from 'react-toolbox/lib/font_icon';

const Menu = observer(({active, clickHandler, menuOn, item, selectedMenu}) => {
  const activeMenu = () => {
    clickHandler(item);
    selectedMenu();
  }
  return(
    <div
      className={css(styles.item, menuOn ? styles.disabled : '', active === item && !menuOn ? styles.active : '')}
      onClick={!menuOn ? activeMenu : ''}>
      {item}
      {menuOn ? '' :
        <button
          className={css(styles.icon)}
          >
          <FontIcon
            value='settings' />
        </button>
      }
    </div>
  )
})

Menu.propTypes = {
  store: React.PropTypes.object
}

export default Menu;
