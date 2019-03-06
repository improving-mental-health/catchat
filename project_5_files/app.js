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

}

function downvote(id_name) {

	var post_number = id_name.slice(8);

	console.log(post_number);
	post_votes[post_number] -= 1;
	total = post_votes[post_number];
	document.getElementById('voteCount' + post_number).innerHTML = total;
	console.log(post_votes);

}
