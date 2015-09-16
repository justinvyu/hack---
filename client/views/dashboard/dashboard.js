Controller('dashboard', {

    helpers: {

    	workshops: [
    		{
    			name: 'Portfolio',
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
    	$('.ui.sticky')
          .sticky({
            context: '#context'
          })
        ;
    }

});
