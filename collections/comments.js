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
		comment = _.extend(_.pick(commentAttributes, 'postId', 'empathy', 'specificKnowledge', 'expectations', 'ratedas', 'knowledgeRatedas'), {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});
		//update post with #of comments
		Posts.update(comment.postId, {
			$inc: {commentsCount: 1}
		});


		Comments.insert(comment);


		//finding the average rating
		var comments = Comments.find({
			postId: comment.postId
		}).fetch();

//finding average rating for Empathy:
		
		var sum = _.reduce(comments, function(total, comment) {
		//	console.log(comment.ratedas);
		//	console.log(_.isString(comment.ratedas));
			return total + Number(comment.ratedas);
		}, 0);

		//tests to debug average rating system
	//	console.log(comments);
	//	console.log("sum: " + sum);
	//	console.log(comments.length);

		var totalrating = sum / comments.length ;
		//	console.log("totalrating: " + totalrating);

		Posts.update(comment.postId, {
			$set: {totalrating: totalrating},
		});

//empathy rounded:
		var totalrating_possible = Math.round(totalrating*10) /10;
	//	console.log("display rating rounded = " + totalrating_possible);

		Posts.update(comment.postId, {
			$set: {totalrating_possible: totalrating_possible},
		});



//100% failure rate :(
//finding average rating for Endo-Specific KNowledge:
//		var knowledgeRatedas = Number(knowledgeRatedas);
//		var knowledgeRatedas = Math.floor(knowledgeRatedas);
//		var knowledgeRatedas = Number(comment.knowledgeRatedas);
//		var knowledgeRatedas = Math.floor("knowledgeRatedas"); 



		var knowlSum = _.reduce(comments, function(knowlTotal, comment) {
		//	console.log(comment.ratedas);
		//	console.log(_.isString(comment.ratedas));
			return knowlTotal + Number(comment.knowledgeRatedas);
		}, 0);

		//tests to debug average rating system
	//	console.log(comments);
	//	console.log("sum: " + sum);
	//	console.log(comments.length);

		var knowledgeRating = knowlSum / comments.length ;
		//	console.log("totalrating: " + totalrating);

		Posts.update(comment.postId, {
			$set: {knowledgeRating: knowledgeRating}
		});

//empathy rounded:
		var knowledgeRatingRounded = Math.round(knowledgeRatingRounded*10) /10;
	//	console.log("display rating rounded = " + totalrating_possible);

		Posts.update(comment.postId, {
			$set: {knowledgeRatingRounded: knowledgeRatingRounded}
		});


	}
});