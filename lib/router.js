Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() {
		return [Meteor.subscribe('comments'), Meteor.subscribe('notifications')];
	}
});

PostsListController = RouteController.extend({
	template: 'postsList',
	increment: 5,
	limit: function() {
		return parseInt(this.params.postsLimit) || this.increment;
	},
	findOptions: function() {
		return {limit: this.limit()};
	},
	waitOn: function() {
		return Meteor.subscribe('posts', this.findOptions());
	},
	data: function() {
//		return {posts: Posts.find({}, this.findOptions())};
		return {
			posts: Posts.find({}, this.findOptions()),
			nextPath: this.route.path({postsLimit: this.limit() + this.increment})
		};
	}
});

Router.map(function() {
	
	this.route('postPage', {
		path: '/posts/:_id',
		waitOn: function() {
			return [
				Meteor.subscribe('comments', this.params._id),
				Meteor.subscribe('singlePost', this.params._id)
				];
		},
		data: function() { return Posts.findOne(this.params._id); }
	});
	this.route('postEdit', {
		path: '/posts/:_id/edit',
		waitOn: function() {
			return Meteor.subscribe('singlePost', this.params._id);
		},
		data: function() {
			return Posts.findOne(this.params._id);
		}
	});
	this.route('postSubmit', { 
		path: '/newdoctor/',
		template: 'postSubmit'
		

	//	disableProgress:true
	});

	this.route('postsList', {
		path: '/:postsLimit?',
/*		waitOn: function() {
			var postsLimit = parseInt(this.params.postsLimit) || 5;
			return Meteor.subscribe('posts', {limit: postsLimit});
		},
		data: function() {
			var limit= parseInt(this.params.postsLimit) || 5;
			return {
				posts: Posts.find({}, {limit: limit})
			};
		}
*/
		controller: PostsListController
	});

});

var requireLogin = function() {
	if (! Meteor.user()) {
		this.render('accessDenied');
		this.stop();
	}
}
//Router.before(requireLogin, {only: 'postSubmit'});
Router.before(function() {
	clearErrors();
});