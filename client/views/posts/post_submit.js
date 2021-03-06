Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();


    var post = {
      doctor: $(e.target).find('[name=doctor]').val(),
      doctor_location: $(e.target).find('[name=doctor_location]').val(),
      clinic: $(e.target).find('[name=clinic]').val()
    }

    post._id = Posts.insert(post);
    Router.go('postPage', post);

    Meteor.call('post', post, function(error, id) {
      if (error) {
        //display error to user:
        throwError(error.reason);
      }
      
      if (error.error===302) {
      Router.go('postPage', {_id: error.details});
    } 
    else { 
      Router.go('postPage', {_id: id});
    }

    });
  }
});