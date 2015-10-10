Workshops = new Mongo.Collection('workshops');

Controller('dashboard', {

    helpers: {
    	workshops: Workshops.find().fetch()
    },

    events: {
        'click #add-button': function() {
            Workshops.insert({
                title: 'Test Title',
                author: 'Justin Yu',
                language: 'Ruby'
            })
        }
    },

    rendered: function() {
    	$('.ui.sticky').sticky({
            context: '#context'
        });
    }
});
