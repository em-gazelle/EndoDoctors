Posts = new Meteor.Collection('posts');

Posts.allow({
	update: ownsDocument,
	remove: ownsDocument
});

Posts.deny({
	update: function(userId, post, fieldNames) {
		//may only edit the following fields:
		return (_.without(fieldNames, 'doctor', 'doctor_location').length > 0);
	}
});

Meteor.methods({
	post: function(postAttributes) {
		var user = Meteor.user(),
			postWithSameLink = Posts.findOne({doctor: postAttributes.doctor});
	//ensure the user is logged in
	if (!user)
{		throw new Meteor.Error(401, "Sorry! You need to login to review a doctor.");

}	//post must have a Dr's name
	if (!postAttributes.doctor)
{		throw new Meteor.Error(422, "Please add the name of the doctor you wish to review.");
}
	//no repeats - doc name
	//!!!!!!!!!! will need more work in future. find a way to differentiate amongst doctors
	if (postAttributes.doctor && postWithSameLink) {
		throw new Meteor.Error(302, "This doctor already exists in our system! Please add your review under this doctor's page.", postWithSameLink._id);
}
	//pick out whitelisted keys
	var post = _.extend(_.pick(postAttributes, 'doctor', 'doctor_location'), {
		userId: user._id,
		author: user.username,
		submitted: new Date().getTime(),
		commentsCount:0,
		totalrating: 0,
		totalrating_possible: 0
		//rating = 0? rating = rating? Not working :()
		
	});
		

	var postId = Posts.insert(post);

	return postId;
	}

});