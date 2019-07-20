const refs = {
  bodyTheme: document.querySelector('body'),
  buttonSwitch: document.querySelector('button[data-action="theme-switch"]'),
  toolbar: document.querySelector('.toolbar__icon'),
};

const themeData = {
  light: ['theme-light', 'wb_sunny'],
  dark: ['theme-dark', 'brightness_3'],
};

const previousTheme = localStorage.getItem('theme');

if (previousTheme === themeData.dark[0]) {
  switchTheme(themeData.dark);
} else {
  switchTheme(themeData.light);
}

refs.buttonSwitch.addEventListener('click', handleSwitchTheme);
function handleSwitchTheme(e) {
  if (!refs.bodyTheme.classList.toggle(themeData.light[0])) {
    addToLocalStorage(themeData.dark);
  } else {
    refs.bodyTheme.classList.remove(themeData.dark[0]);
    addToLocalStorage(themeData.light);
  }
}

function switchTheme(theme) {
  refs.bodyTheme.classList.add(theme[0]);
  refs.toolbar.textContent = theme[1];
}

function addToLocalStorage(theme) {
  localStorage.setItem('theme', theme[0]);
  switchTheme(theme);
}
