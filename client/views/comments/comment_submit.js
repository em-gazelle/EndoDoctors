Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var $empathy = $(e.target).find('[name=empathy]');
    var $expectations = $(e.target).find('[name=expectations]');
    var $specificKnowledge = $(e.target).find('[name=specificKnowledge]');
   

    $(function () { $('#rateit6').rateit({ max: 20, step: 2, backingfld: '#backing6' }); });


    var comment = {
      empathy: $empathy.val(),
      expectations: $expectations.val(),
      specificKnowledge: $specificKnowledge.val(),
      postId: template.data._id
    };


    Meteor.call('comment', comment, function(error, commentId) {
    /* COMMENTED OUT WHILE DEBUGGING/CHANGING NAME FROM BODY TO EMPATHY
      if (error){
        throwError(error.reason);
      } else {
        $body.val('');
      }
    */
    });
  }
});
