Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

 function updateTextInput(val) {
      document.getElementById('textInput').value=val; 
    }

    var $body = $(e.target).find('[name=body]');
    var comment = {
      body: $body.val(),
      postId: template.data._id
    };

    Meteor.call('comment', comment, function(error, commentId) {
      if (error){
        throwError(error.reason);
      } else {
        $body.val('');
      }
    });
  }
});
