Controller('dashboard', {

    helpers: {

    	workshops: [
    		{
    			name: 'Portfolio: Show Off Your Accomplishments',
    			difficulty: 'beginnner'
    		},
    		{
    			name: 'Todo App: Meteor',
    			difficulty: 'expert'
    		},
    		{
    			name: 'Instagram Clone',
    			difficulty: 'intermediate'
    		}
    	]

    },

    rendered: function() {
    	console.log("hello")
    }

});
