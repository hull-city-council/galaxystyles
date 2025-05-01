function createDonateButton(id) {
    const listItem = document.createElement('li');
    listItem.className = 'list__item';

    const link = document.createElement('a');
    link.setAttribute('id', `${id}-donate-button`);
    link.setAttribute('href', 'https://hullcc-self.test.achieveservice.com/en/AchieveForms/?form_uri=sandbox-publish://AF-Process-111d38a4-5c4a-4c49-a2d4-259190734abe/AF-Stage-3bf77b12-b84e-4866-a55c-6773f6e4b343/definition.json&redirectlink=/en&cancelRedirectLink=/en');
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
