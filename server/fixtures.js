// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Anna Salazar' }
  });
 
  var tom = Meteor.users.findOne(tomId);

  var sachaId = Meteor.users.insert({
    profile: { name: 'EndoGurl Warrior' }
  });
  var sacha = Meteor.users.findOne(sachaId);


//insert posts

  var SanchezId = Posts.insert({
    doctor: 'Dr. Sanchez',
    userId: sacha._id,
    author: sacha.profile.name,
    doctor_location: 'Houston, TX',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 1
  });

  Comments.insert({
    postId: SanchezId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    empathy: 'Dr. Sanchez was wonderful, caring, compassionate, articulate, and did not hesitate to say when she lacked knowledge on a subject.',
    expectations: 'She was the first doctor to recognize my symptoms of Endo and helped manage my symptoms in a time of desperate need.',
    specificKnowledge: 'Her first prescribed treatment (BC) was successful while I was under her care.',
    ratedas: 3.5
  });

var Nezhat_id = Posts.insert({
    doctor: 'Dr. Nezhat',
    userId: tom._id,
    author: tom.profile.name,
    doctor_location: 'San Jose, CA',
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 1
  });

Comments.insert({
  postId: Nezhat_id,
  userId: sacha._id,
  author: sacha.profile.name,
  submitted: now - 2 * 1200 * 100,
  empathy: 'How beautiful it was to finally meet an understanding, compassionate doctor! He listened to everything I said and did not question my judgment, only provided guidance',
  expectations: 'I expected Dr. Nezhat to permanently diminish my symptoms via laparascopic excisioin surgery. So far, it is working!',
  specificKnowledge: 'Dr. Nezhat was extraordinarily knowledgeable; what a relief! His surgical expertise is also, of course, unparalleled.',
  ratedas: 5
});

}