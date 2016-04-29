import { observable } from 'mobx';
// import { computed } from 'mobx';

export default class Store {
  @observable menuOn = false;
  @observable active = ''
  @observable menu2 = [];
  @observable menu1 = ['Dinner Menu', 'Lunch Menu', 'Wine Menu', 'Cocktail Menu', 'Desserts Menu'];

  selectedMenu = (item) => {
    switch(item) {
      case 'Dinner Menu':
        this.menu2 = ['Dinner menu 1', 'Dinner menu 2', 'Dinner menu 3', 'Dinner menu 4'];
        break;
      case 'Lunch Menu':
        this.menu2 = ['Lunch menu 1', 'Lunch menu 2', 'Lunch menu 3', 'Lunch menu 4'];
        break;
      case 'Wine Menu':
        this.menu2 = ['Wine menu 1', 'Wine menu 2', 'Wine menu 3', 'Wine menu 4'];
        break;
      case 'Cocktail Menu':
        this.menu2 = ['Cocktail menu 1', 'Cocktail menu 2', 'Cocktail menu 3', 'Cocktail menu 4'];
        break;
      case 'Desserts Menu':
        this.menu2 = ['Desserts menu 1', 'Desserts menu 2', 'Desserts menu 3', 'Desserts menu 4'];
        break;
      default:
        this.menu2 = ['Dinner menu 1', 'Dinner menu 2', 'Dinner menu 3', 'Dinner menu 4'];
    }
  }

  reorderMenu = (value) => {
    if(!this.active) {
      return;
    }
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
    this.active = '';
    this.menuOn = !this.menuOn;
  }
}
