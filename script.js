const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});





// TOGGLE SIDEBAR


const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');
let isSidebarHidden = localStorage.getItem('sidebarState') === 'hidden';

if (isSidebarHidden) {
  sidebar.classList.add('hide');
} else {
  sidebar.classList.remove('hide');
}

menuBar.addEventListener('click', function () {
  isSidebarHidden = !isSidebarHidden;
  sidebar.classList.toggle('hide');
  localStorage.setItem('sidebarState', isSidebarHidden ? 'hidden' : 'shown');
});


// TOGGLE DARK MODE
const switchMode = document.getElementById('switch-mode');
const body = document.body;
let isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

if (isDarkModeEnabled) {
  body.classList.add('dark');
  switchMode.checked = true;
}

switchMode.addEventListener('change', function () {
  isDarkModeEnabled = !isDarkModeEnabled;
  body.classList.toggle('dark');
  localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
});