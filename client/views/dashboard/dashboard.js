
Workshops = new Mongo.Collection('workshops');

if (Meteor.isServer) {

}

if (Meteor.isClient) {

}

Controller('dashboard', {

    helpers: {
    	workshops: function() {
            // console.log(Workshops.find({}));
            return Workshops.find({});
        }
    },

    events: {
        'click #add-button': function() {
            Workshops.insert({
                title: 'Test Title',
                author: 'Justin Yu',
                language: 'Ruby'
            });
            // console.log(Workshops.find({}).fetch());
        }
    },

    rendered: function() {
        
    }
});
