const burgerBtn = document.querySelector('.burger');
const openMobileMenu = document.querySelector('.open-menu');
const closeMobileMenu = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-link');
const forestIcon = document.querySelector('.forest-logo');
const footerYear = document.querySelector('.current-year')

const mobileNavActive = () => {
	closeMobileMenu.classList.toggle('active');
	openMobileMenu.classList.toggle('active');
	mobileMenu.classList.toggle('active-link');
	document.body.classList.toggle('sticky-body');

	navItems.forEach((item) => {
		item.addEventListener('click', () => {
			closeMobileMenu.classList.remove('active');
			openMobileMenu.classList.add('active');
			mobileMenu.classList.remove('active-link');
			document.body.classList.remove('sticky-body');
		});
	});
};

const mobileNavClose = () => {
	if (mobileMenu.classList.contains('active-link')) {
		closeMobileMenu.classList.remove('active');
		openMobileMenu.classList.add('active');
		mobileMenu.classList.remove('active-link');
		document.body.classList.remove('sticky-body');
	}
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear()

burgerBtn.addEventListener('click', mobileNavActive);
forestIcon.addEventListener('click', mobileNavClose);


