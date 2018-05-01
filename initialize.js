/*
        Hello. I'm sure there is an easier way.
        But this forum functions based on
        assigning a unique id to every post
        and comment. It then uses .hover alongside
        data- to find the numbers associates with
        the ids and then stores them in variables
*/

// ------this is the array that stores each post and it's comments as an object------


var commentCount=0; //counts amount of comments made
var postCount=0; //counts amount of posts submitted

var posts = [{
  'userName': 'Hew',
  'postMessage': 'Welcome to my project',
  'comments': [{
    'commenter': 'Hew',
    'commentMessage': 'You can make comments here'
  }],
}]


//If we want to load the page without any pre-loaded content, simply remove newPost(), newComment, and thisPostId from this page. And delete the object in the area

console.log("initial variables are created")
console.log("posts array already contains initial object --> pushing to post skipped")


$( document ).ready(function() {

  let commentSubmit = '#comment-submit-' + 1
  let commenterName = '#comment-user-' + 1
  let commenterText = '#post-comment-' + 1
  let thisPostId = 1; //since the page adds the first post object, I initialized thisPostId since there is no hovering that happens to find the variable.

  newPost();
  newComment(thisPostId);
});
