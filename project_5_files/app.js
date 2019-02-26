//api keys


// Global Variables




	var hardText = [
		"i need help",
		"I'm doing great",
		"EECS 330 is hard"
	]
	function init() {
	var posts = [];
	myStorage = window.localStorage;
	var existingPosts =  myStorage.getItem('posts')
	if(existingPosts) { //array exists
		posts = existingPosts;
	}
	else{
		myStorage.setItem("posts", []);

	}

	for(i = 0; i < posts.length; i++){
		//populate divs with array
		var post = posts[i];
		post["text"]
	}
}

function submitPost() {
	var text = document.getElementById('input_text').value;
	var shell = document.getElementById("postShell");
	var subshell = shell.cloneNode(true);
	console.log(hardText[1]);
	all_posts.appendChild(subshell);
	subshell.getElementsByTagName('div')[0].innerHTML = text;
}

function post() {

	var currentPosts = localStorage.getItem("posts");
	var newPost = {
		"text" : document.getElementById('new-post-text').value,
		"votes": 0,
		"reply": []

	}

	currentPosts.append(newPost);
	localStorage.setItem("posts", currentPosts)


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
		p2.getElementsByTagName('div')[0].innerHTML = posts[i];

	}
	console.log(posts);

}

function upvote() {
	console.log("upvote");
	document.getElementById("vote_count").innerHTML += 1;
}
