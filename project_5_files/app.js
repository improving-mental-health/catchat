//api keys


// Global Variables

var replyNum = 0;
var currentPosts = [];
var count = 0;
var post_votes = [];
post_votes[0] = 4;
var num_replies = [1];
var num_posts;

function init() {
	myStorage = window.localStorage;
	//var posts = [];
	myStorage.setItem("posts", []);

	num_posts = 1;

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
	var shell = document.getElementById("examplePostContainer");

	var subshell = shell.cloneNode(true);
	count += 1;
	subshell.id = "postContainer" + count;
	subshell.style.display = "block";
	subshell.getElementsByTagName('a')[0].id = "post" + count;
	subshell.getElementsByTagName('h6')[0].id = "replyHeader" + count;
	subshell.getElementsByTagName('div')[5].id = "reply" + count;
	subshell.getElementsByTagName('div')[6].id = "report" + count;
	subshell.getElementsByTagName('div')[8].id = "upvote" + count;
	subshell.getElementsByTagName('div')[9].id = "voteCount" + count;
	subshell.getElementsByTagName('div')[10].id = "downvote" + count;
	subshell.getElementsByTagName('div')[11].id = "all_replies" + count;
	subshell.getElementsByTagName('div')[9].innerHTML = 0;
	all_posts.appendChild(subshell);
	subshell.getElementsByTagName('div')[2].innerHTML = text;
	document.getElementById('input_text').value = "";
	post_votes[count] = 0;

	document.getElementById("postContainer" + count).removeAttribute("hidden");
	num_replies.push(0)
	}
}


function passPostNum(id_name){
	postNum = id_name.slice(4);
}
function replyPost() {
	var text = document.getElementById('reply-text').value;
	if (text == ""){
		console.log("error: cannot make empty post");
	}
	else{

		// show 'Replies' header if num_replies was previously equal to 0
		if (num_replies[postNum] == 0){
			document.getElementById("replyHeader" + postNum).removeAttribute("hidden");
			document.getElementById("all_replies" + postNum).removeAttribute("hidden");
		}

		var shell = document.getElementById("exampleReply");
		var subshell = shell.cloneNode(true);
		subshell.removeAttribute("hidden");
		subshell.id = "reply" + num_replies[postNum];
	//	subshell.getElementsByTagName('div')[3].id = "report" + count;
		var x = "all_replies" + postNum;
		var y = document.getElementById(x);
		console.log(y);
		y.appendChild(subshell);
		subshell.getElementsByTagName('div')[0].innerHTML = text + subshell.getElementsByTagName('div')[0].innerHTML;

		document.getElementById('reply-text').value = "";			//clear popup reply textfield
		post_votes[count] = 0;
		num_replies[postNum] += 1
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
