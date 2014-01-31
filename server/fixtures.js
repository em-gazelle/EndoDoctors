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

  var toomanyId = Meteor.users.insert({
    profile: { name: 'Average woman for 10 years'}
  });
  var toomany = Meteor.users.findOne(toomanyId);

  var motivationId = Meteor.users.insert({
    profile: { name: 'Motivation'}
  });
  var motivation = Meteor.users.findOne(motivationId);

//insert posts

  var SanchezId = Posts.insert({
    doctor: 'Dr. Sanchez',
    userId: sacha._id,
    author: sacha.profile.name,
    doctor_location: 'Houston, TX',
    clinic: 'Maker of the Young',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2,
    totalrating: 7.5 / 2,
    totalrating_possible: 3.8
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

  Comments.insert({
    postId: SanchezId,
    userId: toomany._id,
    author: toomany.profile.name,
    submitted: now - 3 * 3600 * 1000,
    empathy: 'I was upset to learn that I had been needlesly suffering, mocked, and struggling through classes I have not been physically capable of attendeding for the past 8 years. She was very understanding and sympathetic.',
    expectations: 'Wow! Doctors, family, and society has told me that my pain, inability to attend class, work, and the temporary starvation I undergo every month were normal! Dr. Sanchez was the first to tell me that I have the right to expect a life in which I can stay in school, work, and do not suffer through pain on a daily basis!',
    specificKnowledge: 'She gave me the name of the disease, recommended I do additional research, and started me on BC and anti-nauseau pills as the first line of defense. She has given me a referral to a specialist if it does not.',
    ratedas: 4
  });


var NezhatId = Posts.insert({
    doctor: 'Dr. Nezhat',
    userId: tom._id,
    author: tom.profile.name,
    doctor_location: 'San Jose, CA',
    clinic: 'Maker of the Young',
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 1,
    totalrating: 5,
    totalrating_possible: 5
  });

Comments.insert({
  postId: NezhatId,
  userId: sacha._id,
  author: sacha.profile.name,
  submitted: now - 2 * 1200 * 100,
  empathy: 'How beautiful it was to finally meet an understanding, compassionate doctor! He listened to everything I said and did not question my judgment, only provided guidance',
  expectations: 'I expected Dr. Nezhat to permanently diminish my symptoms via laparascopic excisioin surgery. So far, it is working!',
  specificKnowledge: 'Dr. Nezhat was extraordinarily knowledgeable; what a relief! His surgical expertise is also, of course, unparalleled.',
  ratedas: 5
});

  var sampledocId = Posts.insert({
    doctor: 'Dr. Somebody',
    userId: motivation._id,
    author: motivation.profile.name,
    doctor_location: 'Gable Springs, IN',
    clinic: 'Maker of the Young',
    submitted: now - 55 * 3600 * 1000,
    commentsCount: 2,
    totalrating: 2 / 2,
    totalrating_possible: 1
  });

  Comments.insert({
    postId: sampledocId,
    userId: motivation._id,
    author: motivation.profile.name,
    submitted: now - 33 * 3600 * 1000,
    empathy: 'Dr. Somebody told me it was all in my head. I wish he was right, because getting through school is hard when I spend all day puking in the bathroom or passed out in pain.',
    expectations: 'I just wanted to be able to learn algebra and feel better. Not losing weight every time I get my period would be nice, too.',
    specificKnowledge: 'EndoWhat?',
    ratedas: 1,
  });

  Comments.insert({
    postId: sampledocId,
    userId: toomany._id,
    author: motivation.profile.name,
    submitted: now - 43 * 3600 * 1000,
    empathy: 'He laughed at me and bemoaned the state of women these days, insisting I was making it up. My low heart rate did not seem to phase him at all.',
    expectations: 'I was not doing very well in classes and just wanted my symptoms to be treated so that I could go to class. Throwing up for a week each month must not be good for my body, surely?',
    specificKnowledge: 'He told me that getting pregnant would cure me.',
    ratedas: 1
  });

  var sampledoc2Id = Posts.insert({
    doctor: 'Dr. Somebody 2',
    userId: motivation._id,
    author: motivation.profile.name,
    doctor_location: 'Gable Springs, IN',
    clinic: 'Maker of the Young',
    submitted: now - 55 * 3600 * 1000,
    commentsCount: 2,
    totalrating: 1,
    totalrating_possible: 1
  });

  Comments.insert({
    postId: sampledoc2Id,
    userId: motivation._id,
    author: motivation.profile.name,
    submitted: now - 33 * 3600 * 1000,
    empathy: 'Dr. Somebody told me it was all in my head. I wish he was right, because getting through school is hard when I spend all day puking in the bathroom or passed out in pain.',
    expectations: 'I just wanted to be able to learn algebra and feel better. Not losing weight every time I get my period would be nice, too.',
    specificKnowledge: 'EndoWhat?',
    ratedas: 1
  });

  Comments.insert({
    postId: sampledoc2Id,
    userId: toomany._id,
    author: motivation.profile.name,
    submitted: now - 43 * 3600 * 1000,
    empathy: 'He laughed at me and bemoaned the state of women these days, insisting I was making it up. My low heart rate did not seem to phase him at all.',
    expectations: 'I was not doing very well in classes and just wanted my symptoms to be treated so that I could go to class. Throwing up for a week each month must not be good for my body, surely?',
    specificKnowledge: 'He told me that getting pregnant would cure me.',
    ratedas: 1
  });

  var sampledoc3Id = Posts.insert({
    doctor: 'Dr. Somebody 3',
    userId: motivation._id,
    author: motivation.profile.name,
    doctor_location: 'Gable Springs, IN',
    clinic: 'Maker of the Young',
    submitted: now - 55 * 3600 * 1000,
    commentsCount: 2,
    totalrating: 2 / 2,
    totalrating_possible: 1
  });

  Comments.insert({
    postId: sampledoc3Id,
    userId: motivation._id,
    author: motivation.profile.name,
    submitted: now - 33 * 3600 * 1000,
    empathy: 'Dr. Somebody told me it was all in my head. I wish he was right, because getting through school is hard when I spend all day puking in the bathroom or passed out in pain.',
    expectations: 'I just wanted to be able to learn algebra and feel better. Not losing weight every time I get my period would be nice, too.',
    specificKnowledge: 'EndoWhat?',
    ratedas: 1
  });

  Comments.insert({
    postId: sampledoc3Id,
    userId: toomany._id,
    author: motivation.profile.name,
    submitted: now - 43 * 3600 * 1000,
    empathy: 'He laughed at me and bemoaned the state of women these days, insisting I was making it up. My low heart rate did not seem to phase him at all.',
    expectations: 'I was not doing very well in classes and just wanted my symptoms to be treated so that I could go to class. Throwing up for a week each month must not be good for my body, surely?',
    specificKnowledge: 'He told me that getting pregnant would cure me.',
    ratedas: 1
  });

  var sampledoc4Id = Posts.insert({
    doctor: 'Dr. Somebody 4',
    userId: motivation._id,
    author: motivation.profile.name,
    doctor_location: 'Gable Springs, IN',
    clinic: 'Maker of the Young',
    submitted: now - 55 * 3600 * 1000,
    commentsCount: 2,
    totalrating: 2 / 2,
    totalrating_possible: 1
  });

  Comments.insert({
    postId: sampledoc4Id,
    userId: motivation._id,
    author: motivation.profile.name,
    submitted: now - 33 * 3600 * 1000,
    empathy: 'Dr. Somebody told me it was all in my head. I wish he was right, because getting through school is hard when I spend all day puking in the bathroom or passed out in pain.',
    expectations: 'I just wanted to be able to learn algebra and feel better. Not losing weight every time I get my period would be nice, too.',
    specificKnowledge: 'EndoWhat?',
    ratedas: 1
  });

  Comments.insert({
    postId: sampledoc4Id,
    userId: toomany._id,
    author: motivation.profile.name,
    submitted: now - 43 * 3600 * 1000,
    empathy: 'He laughed at me and bemoaned the state of women these days, insisting I was making it up. My low heart rate did not seem to phase him at all.',
    expectations: 'I was not doing very well in classes and just wanted my symptoms to be treated so that I could go to class. Throwing up for a week each month must not be good for my body, surely?',
    specificKnowledge: 'He told me that getting pregnant would cure me.',
    ratedas: 1
  });
}