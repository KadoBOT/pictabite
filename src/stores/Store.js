import { observable } from 'mobx';
// import { computed } from 'mobx';

export default class Store {
  @observable menuOn = false;
  @observable active = 'Starters'
  @observable menu2 = ['Starters', 'Main Courses', 'Pastas', 'Drinks', 'Desserts'];
  @observable menu1 = ['Starter menu 1', 'Starter menu 2', 'Starter menu 3', 'Starter menu 4']

  selectedMenu = () => {
    switch(this.active) {
      case 'Starters':
        this.menu1 = ['Starter menu 1', 'Starter menu 2', 'Starter menu 3', 'Starter menu 4'];
        break;
      case 'Main Courses':
        this.menu1 = ['Main Courses menu 1', 'Main Courses menu 2', 'Main Courses menu 3', 'Main Courses menu 4'];
        break;
      case 'Pastas':
        this.menu1 = ['Pastas menu 1', 'Pastas menu 2', 'Pastas menu 3', 'Pastas menu 4'];
        break;
      case 'Drinks':
        this.menu1 = ['Drinks menu 1', 'Drinks menu 2', 'Drinks menu 3', 'Drinks menu 4'];
        break;
      case 'Desserts':
        this.menu1 = ['Desserts menu 1', 'Desserts menu 2', 'Desserts menu 3', 'Desserts menu 4'];
        break;
      default:
        this.menu1 = ['Starter menu 1', 'Starter menu 2', 'Starter menu 3', 'Starter menu 4'];
    }
  }

  reorderMenu = (value) => {
    let menu = this.menu2;
    if (this.menuOn) {
      menu = this.menu1
    }
    let idx = menu.indexOf(this.active);
    let arr = menu
    let curr = arr[idx]
    let prev = arr[idx - 1];
    let next = arr[idx + 1];
    if(value === 'down' && idx < menu.length - 1) {
      arr[idx] = next
      arr[idx + 1] = curr
    } else if (value === 'up' && idx !== 0) {
      arr[idx] = prev
      arr[idx - 1] = curr
    }
  }

  clickButton = () => {
    this.menuOn = !this.menuOn;
  }
}
