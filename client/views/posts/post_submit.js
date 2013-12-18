Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();


    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val(),
      rating: $(e.target).find('[name=rating]').val()
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

//step one for the rating system, help used
//http://mobile-web-app.blogspot.com/2012/03/easy-display-value-for-of-slider-in.html