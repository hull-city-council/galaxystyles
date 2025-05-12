function createDonateButton(id) {
    const listItem = document.createElement('li');
    listItem.className = 'list__item';

    const link = document.createElement('a');
    link.setAttribute('id', `${id}-donate-button`);
    link.setAttribute('href', '//hullcc-self.achieveservice.com/service/Library_donation');
    link.setAttribute('title', 'Donate');
    link.innerHTML = '<span class="button__text">Donate</span>';

    listItem.appendChild(link);
    return listItem;
}
setTimeout(() => {
	// Add donate button to header navigation
	const headerSelector = "#top > div.container > nav > div.navigation-buttons > ul";
	document.querySelector(headerSelector).appendChild(createDonateButton('header'));

	// Add donate button to primary navigation
	const primarySelector = "#js-menu > div.menu-navigation__inner > div > nav:nth-child(1) > ul";
	document.querySelector(primarySelector).appendChild(createDonateButton('primary'));
}, 1000);
