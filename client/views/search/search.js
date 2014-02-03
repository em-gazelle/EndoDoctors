Template.comment.helpers({
	submittedText:function() {
		return new Date(this.submitted).toString();
	}
});

/*
Meteor.methods({

	searchResults: function(postAttributes) {
		var user = Meteor.user(),
			postWithSameLink = Posts.findOne({doctor: postAttributes.doctor});
	};
)};
*/
/*Until searchInfo is being saved as a variable....
var searchResults = function(searchInfo) {
	db.Posts.find({doctor: /searchInfo/g});
	return postId;
};
*/

/*
	db.Posts.find({
                    postAttributes: {
                                 doctor: {searchInfo}/*,
                                 doctor_location: '123 Street',
                                 clinic: 'kkk'
                               }

                  
                 });
*/

//Option Two:

//fetching data from database to find the average rating
	//	var comments = Comments.find({
	//		postId: comment.postId
	//	}).fetch();

/* Playing with search functionality...

		//fetching data from database to find the average rating
		var searchMe = Posts.find({
			postId: Posts.postId,
			doctor: Posts.doctor,
			doctor_location: Posts.doctor_location,
			clinic: Posts.clinic
		}).fetch();

		searchResults: function() {

		}

*/