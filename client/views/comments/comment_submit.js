Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var $body = $(e.target).find('[name=empathy]');
    var $expectations = $(e.target).find('[name=expectations]');
    
    var comment = {
      body: $body.val(),
      postId: template.data._id
    };


/*experimental. Let's try to add separate fields into the comments  
    var $body = $(e.target).find('[name=expectations]');
    var comment = {
      body: $expectations.val(),
      postId: template.data._id
    };
*/



    Meteor.call('comment', comment, function(error, commentId) {
      if (error){
        throwError(error.reason);
      } else {
        $body.val('');
      }
    });
  }
});
