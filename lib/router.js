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

	this.route('new', {
		path: '/new',
		template: 'new'
	});

	this.route('workshop', {
		path: '/workshop',
		template: 'workshop'
	});

	this.route('add', {
		path: '/add',
		template: 'add'
	})
});
