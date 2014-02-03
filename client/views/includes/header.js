Template.header.helpers({
	activeRouteClass: function(/* route names*/) {
		var args = Array.prototype.slice.call(arguments, 0);
		args.pop();

		var active = _.any(args, function(name) {
			return Router.current().route.name === name
		});

		return active && 'active';
	}

		//fetch data from database: 
	/*	var comments = Comments.find({
			postId: comment.postId
		}).fetch();
*/
});


/*
Meteor.methods({
	
	post: function(postAttributes) {
		var user = Meteor.user(),
			postWithSameLink = Posts.findOne({doctor: postAttributes.doctor});
)};


*/

/*
Template.header.events({
	var searchInfo = document.getElementById("searchInfo");
	console.log("my HTML input text shows up as a variable if: " + searchInfo);
});

*/