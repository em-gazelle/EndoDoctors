Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var $empathy = $(e.target).find('[name=empathy]');
    var $expectations = $(e.target).find('[name=expectations]');
    var $specificKnowledge = $(e.target).find('[name=specificKnowledge]');
    var $ratedas = $(e.target).find('[name=ratedas]'); 
    var $knowledgeRatedas = $(e.target).find('[name=knowledgeRatedas]');   

 //   console.log("This is a test to see if ratedas is a number after being put into MongoDB: we want false");
   // console.log(isNaN(ratedas));

    var comment = {
      empathy: $empathy.val(),
      expectations: $expectations.val(),
      specificKnowledge: $specificKnowledge.val(),
      ratedas: $ratedas.val(),
      knowledgeRatedas: $knowledgeRatedas.val(),
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
