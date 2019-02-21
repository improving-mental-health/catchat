// Global Variables
var posts = [];


/* function init() {
	for (var i = 0; i < posts.length; i++){
		console.log(i);
		var postText = "fdf";
	 	x = document.createElement('div');
		x.setAttribute("id", "testPost");
		document.getElementById("testText").innerHTML == "please work";

	}
} */

function post() {

	// get new post from user input and append to "posts" array
	var new_post = document.getElementById('new-post-text').value;
	posts.push(new_post);

	var p = document.getElementById("testPost");
	var p2 = p.cloneNode(true);
	// generate a div for each post and display
	for (var i = 0; i < posts.length; i++) {
		console.log(i);

		allposts.appendChild(p2);
		p2.getElementsByTagName('div')[0].innerHTML = posts[i];

	}
	console.log(posts);

}

function upvote() {
	console.log("upvote");
	document.getElementById("vote_count").innerHTML += 1;
}
