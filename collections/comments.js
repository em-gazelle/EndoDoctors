Comments = new Meteor.Collection('comments');

//creating the Meteor Method to post new comments:

Meteor.methods({
	comment: function(commentAttributes) {
		var user = Meteor.user();
		var post = Posts.findOne(commentAttributes.postId);

/* ERROR REPORTING -- REMOVED, TEMPORARILY, FOR DEBUGGING AND CHANGING BODY TO EMPATHY PURPOSES

		if (!user)
			{throw new Meteor.Error(401, "Please login to submit a review."); }
		if (!commentAttributes.body)
			{throw new Meteor.Error(422, "Oops. Please finish writing your review!"); }
		if (!commentAttributes.postId)
			{throw new Meteor.Error(422, "You must review a doctor."); }
*/
		comment = _.extend(_.pick(commentAttributes, 'postId', 'empathy', 'specificKnowledge', 'expectations', 'ratedas'), {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});
		//update post with #of comments
		Posts.update(comment.postId, {
			$inc: {commentsCount: 1}
		});

/*
		Posts.update(comment.postId, {
			$inc: {totalrating_possible: 5}
		});
*//*
		Posts.update(comment.postId, {
			$inc: {totalrating: 1}
		});
*/


		//create comment, save _id
		//comment._id = Comments.insert(comment);
		//create notification when user's post has been commented upon or additional comments have been posted
		//createCommentNotification(comment);
		Comments.insert(comment);





		var comments = Comments.find({
			postId: comment.postId
		}).fetch();

		var sum = _.reduce(comments, function(total, comment) {
			console.log(comment.ratedas);
			console.log(_.isString(comment.ratedas));
			return total + Number(comment.ratedas);
		}, 0);


		console.log(comments);
		console.log("sum: " + sum);
		console.log(comments.length);

		var totalrating = sum / comments.length ;
		console.log("totalrating: " + totalrating);

		Posts.update(comment.postId, {
			$set: {totalrating: totalrating}
		});

		var totalrating_possible = Math.round(totalrating*10) /10;
		console.log("display rating rounded = " + totalrating_possible);

		Posts.update(comment.postId, {
			$set: {totalrating_possible: totalrating_possible}
		});


	}
});