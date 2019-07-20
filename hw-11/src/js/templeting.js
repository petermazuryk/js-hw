import menuData from '../menu.json';
import templates from '../templates/menu-item.hbs';

const refs = {
  menu: document.querySelector('.menu'),
};

buildMenu(menuData, refs.menu);
function buildMenu(menuData, menu) {
  menuData.map(e => {
    menu.insertAdjacentHTML('beforeend', templates(e));
  });
}
