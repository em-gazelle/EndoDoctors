Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();




    var $empathy = $(e.target).find('[name=empathy]');
    var $expectations = $(e.target).find('[name=expectations]');
    var $specificKnowledge = $(e.target).find('[name=specificKnowledge]');
    var $ratedas = $(e.target).find('[name=ratedas]');


    var comment = {
      empathy: $empathy.val(),
      expectations: $expectations.val(),
      specificKnowledge: $specificKnowledge.val(),
      ratedas: $ratedas.val(),
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
