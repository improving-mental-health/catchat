//api keys


// Global Variables


// init function that is called when index body is loaded
function init() {
	// array of existing posts
	var posts = [];
	//initialize localstorage api
	myStorage = window.localStorage;
	//load all existing posts held in local storage into variable
	var existingPosts =  myStorage.getItem('posts')
	//check if there are any existing posts in storage,
	//if yes, load all posts onto local array
	if(existingPosts) { //array exists
		posts = existingPosts;
	}
	//if no existing posts, initalize new post array in storage
	else{
		myStorage.setItem("posts", []);
	}
	/*
	for(var i = 0; i < posts.len(); i++){
		//populate divs with array
		var post = posts[i];
		//access the text field of each post dictionary entry
		post["text"]*/
	}


function post() {

	var currentPosts = localStorage.getItem("posts");
	//initialize newPost dictionary entry
	var newPost = {
		"text" : document.getElementById('new-post-text').value,
		"votes": 0,
		"reply": []
	}

	//append dictionary to currentPosts array
	currentPosts.push(newPost);
	console.log(newPost);
	//add updated array back to local storage
	localStorage.setItem("posts", currentPosts)

//access the second reply of the new post ->
//newPost["reply"][2]

	// get new post from user input and append to "posts" array
	var new_post = document.getElementById('new-post-text').value;
	posts.push(new_post);

	var p = document.getElementById("testPost");
	var p2 = p.cloneNode(true);
	// generate a div for each post and display
	for (var i = 0; i < posts.length; i++) {
		console.log(i);

		allposts.appendChild(p2);
		p2.getElementsByTagName('div')[0].innerHTML = new_post["text"];

	}
	console.log(posts);

}

function upvote() {
	console.log("upvote");
	document.getElementById("vote_count").innerHTML += 1;
}
