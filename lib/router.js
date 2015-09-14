// routes

Router.configure({

	fastRender: true

});


Router.map( function () {

	// homepage
	this.route('home', {

		path: '/',
		template: 'home'

	});

	this.route('dashboard', {
		path: '/dashboard',
		template: 'dashboard'
	});
});
