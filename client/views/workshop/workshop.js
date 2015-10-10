Controller('workshop', {

    helpers: {

    },

    rendered: function() {
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
        });

        document.write(marked("I am using __markdown__!"));
    }

});
