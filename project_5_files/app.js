//api keys


// Global Variables

var replyNum = 0;
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
	subshell.getElementsByTagName('a')[0].id = "post" + count;
	subshell.getElementsByTagName('div')[4].id = "reply" + count;
	subshell.getElementsByTagName('div')[5].id = "report" + count;
	subshell.getElementsByTagName('div')[7].id = "upvote" + count;
	subshell.getElementsByTagName('div')[8].id = "voteCount" + count;
	subshell.getElementsByTagName('div')[9].id = "downvote" + count;
	subshell.getElementsByTagName('div')[8].innerHTML = 0;
	all_posts.appendChild(subshell);
	subshell.getElementsByTagName('div')[1].innerHTML = text;
	currentPosts.push(text);
	console.log(currentPosts)
	document.getElementById('input_text').value = "";
	post_votes[count] = 0;

	// clone & append new dummy reply field below new post
	shell = document.getElementById("example_all_replies");
	subshell = shell.cloneNode(true);
	subshell.id = "all_replies" + count;
	all_posts.appendChild(subshell);


	}
}


function passReplyNum(id_name){
	replyNum = id_name.slice(4);
}
function replyPost() {
	var text = document.getElementById('reply-text').value;
	if (text == ""){
		console.log("error: cannot make empty post");
	}
	else{
		var shell = document.getElementById("reply0");

		var subshell = shell.cloneNode(true);
		subshell.style.display = "block";
		count += 1;
		subshell.id = "reply" + count;
		subshell.getElementsByTagName('div')[3].id = "report" + count;
		var x = "all_replies" + replyNum;
		console.log(x);
		var y = document.getElementById(x);
		console.log(y);
		y.appendChild(subshell);
		subshell.getElementsByTagName('div')[1].innerHTML = text;

		currentPosts.push(text);
		console.log(currentPosts)
		document.getElementById('reply-text').value = "";
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

}

function downvote(id_name) {

	var post_number = id_name.slice(8);

	console.log(post_number);
	post_votes[post_number] -= 1;
	total = post_votes[post_number];
	document.getElementById('voteCount' + post_number).innerHTML = total;
	console.log(post_votes);

}
