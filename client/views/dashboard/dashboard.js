Controller('dashboard', {

    helpers: {

    	workshops: [
    		{
    			name: 'Portfolio Website',
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
