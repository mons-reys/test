import Tooltip from './mons-ui/tooltip.js';
import Dropdown from './mons-ui/dropdown.js';
import Tabs from './mons-ui/tabs.js';
import Snackbar from './mons-ui/snackbar.js';

//create a tooltip 

const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

//create a dropdown 
const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
    console.log('drop');
});

const l = document.querySelector('.dropdown');

console.log(l.querySelector('.trigger'));

//creat a Tabs
const tab = new Tabs(document.querySelector('.tabs'));
tab.init();

//create a snackbar
const snackbar = new Snackbar();
snackbar.init();

//add listener to show the message when click
const snackbarTrigger = document.querySelector('button');

snackbarTrigger.addEventListener('click', () => {
    snackbar.show('you clciked me :)');
});