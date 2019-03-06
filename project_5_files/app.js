//api keys


// Global Variables


var currentPosts = [];
var count = 0;
var post_votes = [];
post_votes[0] = 4;
	function init() {
		myStorage = window.localStorage;
		//var posts = [];
		myStorage.setItem("posts", []);


	/*
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
	}*/
}
/*var div = document.getElementById('div_id'),
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
clone.id = "some_id";
document.body.appendChild(clone); */

function submitPost() {

	var text = document.getElementById('input_text').value;
	if (text == ""){
		console.log("error: cannot make empty post");
	}
	else{




	var shell = document.getElementById("postContainer0");

	var subshell = shell.cloneNode(true);
	count += 1;
	subshell.id = "postContainer" + count;
	subshell.getElementsByTagName('div')[5].id = "reply" + count;
	subshell.getElementsByTagName('div')[6].id = "report" + count;
	subshell.getElementsByTagName('div')[8].id = "upvote" + count;
	subshell.getElementsByTagName('div')[9].id = "voteCount" + count;
	subshell.getElementsByTagName('div')[10].id = "downvote" + count;
	subshell.getElementsByTagName('div')[9].innerHTML = 0;
	all_posts.appendChild(subshell);
	subshell.getElementsByTagName('div')[2].innerHTML = text;
<<<<<<< HEAD


	document.getElementById('input_text').value = ""
	}
}


/* function replyPost() {
	var replyText = document.getElementById('reply_text').value;
	var shell = document.getElementById('all_replies');
	var subshell = shell.cloneNode(true);
	console.log(replyText);
	replyShell.appendChild(subshell);
	subshell.getElementsByTagName('div')[0].innerHTML = replyText;

} */

function replyPost() {	//this is trash
	var text = document.getElementById('reply_text').value;
	if (text == ""){
		console.log("error: cannot make empty post");
	}
	else{
		var newPost = {
			"text" : document.getElementById('input_text').value,
			"votes": 0,
			"reply": []
		}
		currentPosts.push(text);
		console.log(currentPosts)
		localStorage.setItem("posts", currentPosts)


	var shell = document.getElementById("postContainer");

	var subshell = shell.cloneNode(true);
	count += 1;
	subshell.id = "postContainer" + count
	subshell.getElementsByTagName('div')[5].id = "reply" + count
	subshell.getElementsByTagName('div')[6].id = "report" + count
	subshell.getElementsByTagName('div')[8].id = "upvote" + count
	subshell.getElementsByTagName('div')[9].id = "voteCount" + count
	subshell.getElementsByTagName('div')[10].id = "downvote" + count
	all_posts.appendChild(subshell);
	subshell.getElementsByTagName('div')[2].innerHTML = text;

=======
	currentPosts.push(text);
	console.log(currentPosts)
	document.getElementById('input_text').value = "";
	post_votes[count] = 0;
}
}
function upvote(id_name) {
	var post_number = id_name.slice(6);
	console.log(post_number);
	post_votes[post_number] += 1;
	total = post_votes[post_number];
	document.getElementById('voteCount' + post_number).innerHTML = total;
	console.log(post_votes)
>>>>>>> refs/remotes/origin/master

	document.getElementById('input_text').value = ""
	}
}

function downvote(id_name) {

<<<<<<< HEAD

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
=======
	var post_number = id_name.slice(8);

	console.log(post_number);
	post_votes[post_number] -= 1;
	total = post_votes[post_number];
	document.getElementById('voteCount' + post_number).innerHTML = total;
	console.log(post_votes);
>>>>>>> refs/remotes/origin/master

}
