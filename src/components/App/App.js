// @flow

import React from 'react';
import { observer } from 'mobx-react';
import Menubar from '../Menubar/Menubar';
import Items from '../Items/Items';
import Menu from '../Menu/Menu'
import Buttons from '../Buttons/Buttons'
import { css } from 'aphrodite';
import {styles} from './styles.css';

@observer
class App extends React.Component {
  activeMenu = (item) => {
    this.props.store.active = item
  }

  render () {
    const {store} = this.props;
    return (
      <div className='column'>
        <div className={`column is-6 is-offset-3 ${css(styles.container)}`}>
          <Menubar {...this.props}/>
          <div className={css(styles.menu, store.menuOn ? styles.menuOn : styles.menuOff)}>
            {store.menu1.map(item => (
              <Items
                active={store.active}
                clickHandler={this.activeMenu}
                item={item}
                key={item}
                {...store}
              />
            ))}
          </div>
          {store.menu2.map(item => (
            <Menu
              active={store.active}
              clickHandler={this.activeMenu}
              item={item}
              key={item}
              {...store}/>
          ))}
          <Buttons {...store}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object
}

export default App;
