Posts = new Meteor.Collection('posts');

Posts.allow({
	update: ownsDocument,
	remove: ownsDocument
	
});

Posts.deny({
	update: function(userId, post, fieldNames) {
		//may only edit the following fields:
		return (_.without(fieldNames, 'url', 'title').length > 0);
	}
});

Meteor.methods({
	post: function(postAttributes) {
		var user = Meteor.user(),
			postWithSameLink = Posts.findOne({url: postAttributes.url});
	//ensure the user is logged in
	if (!user)
		throw new Meteor.Error(401, "Sorry! You need to login to review a doctor.");

	//post must have a Dr's name
	if (!postAttributes.title)
		throw new Meteor.Error(422, "Please add the name of the doctor you wish to review.");

	//no repeats - doc name
	//!!!!!!!!!! will need more work in future. find a way to differentiate amongst doctors
	if (postAttributes.url && postWithSameLink) {
		throw new Meteor.Error(302, "This doctor already exists in our system! Please add your review under this doctor's page.", postWithSameLink._id);
}
	//pick out whitelisted keys
	var post = _.extend(_.pick(postAttributes, 'url', 'title', 'message'), {
		userId: user._id,
		author: user.username,
		submitted: new Date().getTime(),
		commentsCount:0,
		upvoters: [], 
	    votes: 0
	});

	var postId = Posts.insert(post);

	return postId;
	},

	//upvoting
		upvote: function(postId) {
			var user = Meteor.user();
			//ensure logged in
			if (!user) 
			{
				throw new Meteor.Error(401, "You must login to rate this doctor!");
				var post = Posts.findOne(postId);
			}
			if (!post) 
			{
				throw new Meteor.Error(422, 'Doctor not found');	
			}
			if (_.include(post.upvoters, user._id))
			{
				throw new Meteor.Error(422, "You've already rated this doctor!");
			}

			Posts.update({
				_id: postId,
				upvoters: {$ne: user._id}
			}, {
				$addToSet: {upvoters: user._id},
				$inc: {votes: 1}
			});
			
		}
});