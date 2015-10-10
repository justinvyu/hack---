var numFiles = [1];

Controller('add', {

    helpers: {
        numFiles: numFiles
    },

    events: {
        'click #add-md': function() {
            // numFiles.push(numFiles[numFiles.length - 1] + 1);
            $("#md-files").append("<div class='field'><label>Section Title</label><input type='text' placeholder='Section Title'><input type='file'></div>");
        },
        'submit form': function(event) {
            event.preventDefault();

            var title = $("#title-input").val();
            var author = $("#author-input").val();
            var language = $("#language-input").val();
            console.log(title, author, language);

            if (title == "" || author == "" || language == "") {
                return;
            }

            Workshops.insert({
                title: title,
                author: author,
                language: language
            });
        }
    },

    rendered: function() {

    }
});
