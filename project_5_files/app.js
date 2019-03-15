//api keys


// Global Variables

var replyNum = 0;
var currentPosts = [];
var count = 0;
var post_votes = [];
post_votes[0] = 4;
var num_replies = [1];
var num_posts;

//data collection
var netid;
var firstname;
var sex;
var year;
var join_date;
var user_post_count;

function update_starter(topic){
	console.log(topic)
	if(topic == "Academics"){
		localStorage.setItem("topic_post", "I literally just bombed my EECS 919 midterm")
		localStorage.setItem("topic_reply", "My GPA is so low it has the boots with the fur")
	}
	else if (topic == "Relationships") {
		localStorage.setItem("topic_post","Why doesn't my boyfriend want to meet my parents?")
		localStorage.setItem("topic_reply", "I've only been with my boyfriend for a month and he already wants to meet my parents. Like he needs to chill. I waited 9 months before I met them myself.")
	}
	else if (topic == "Bummed"){
		localStorage.setItem("topic_post", "Isn't beef jerky like a cow raisin?")
		localStorage.setItem("topic_reply", "Literally what does this have to do with anything?")
	}
	else if (topic == "Feeling Good") {
		localStorage.setItem("topic_post", "Thanks to whoever saved a poor soul who fell on ice outside of University this morning.")
		localStorage.setItem("topic_reply", "Any time!")
	}
}

function reported() {
	alert("This post has been reported to administrators.");
}
function fieldsfull(){
	var text1 = document.getElementById('inputNetID').value;
	var text2 = document.getElementById('inputPassword').value;
	var text3 = document.getElementById('inputUsername').value;
	var text4 = document.getElementById('gender').value;
	var text5 = document.getElementById('class').value;

	if ((text1 == "") || (text2 == "") || (text3 == "") || (text4 == "") || (text5 == "")) {
		alert("Must fill all fields to proceed");
		console.log("fields must be full")}

		else{
			collectfields()
			window.location.href = 'splash.html';
			text1 = document.getElementById('inputNetID').value = ""
			text2 = document.getElementById('inputPassword').value = ""
			text3 = document.getElementById('inputUsername').value = ""
			text4 = document.getElementById('gender').value = ""
			text5 = document.getElementById('class').value = ""
		}
	}

function collectfields(){
	console.log("collect fields is running")
	localStorage.setItem("netid", document.getElementById('inputNetID').value)
	localStorage.setItem("password", document.getElementById('inputPassword').value)
  localStorage.setItem("firstname", document.getElementById('inputUsername').value)
  localStorage.setItem("sex", document.getElementById('gender').value)
  localStorage.setItem("year", document.getElementById('class').value)
	localStorage.setItem("join_date", "March 2019")
	localStorage.setItem(user_post_count, 0)

}
function savetopic(passed_top){
	localStorage.setItem("topic", passed_top)
}
function populate(){
	document.getElementById("starter_post").innerHTML = localStorage.getItem("topic_post")
	document.getElementById("sample_reply").innerHTML = localStorage.getItem("topic_reply")
	console.log("pop is running")
	firstname = localStorage.getItem("firstname")
	if (firstname == "Gabriel" || firstname == "gabriel"){
		document.getElementById('propic').src = "https://media.licdn.com/dms/image/C4D03AQEwcydfgg_tsA/profile-displayphoto-shrink_800_800/0?e=1557964800&v=beta&t=_EdeWyR4Z_5Y2plIq4cYv_0xHySNdbhn_89S_NL0xtg"
	}
	else if (firstname == "David"){
		document.getElementById('propic').src = "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/c0.0.842.842a/p843x403/40548471_1085246518308643_4558062832045785088_n.jpg?_nc_cat=108&_nc_ht=scontent-ort2-1.xx&oh=c67129b162b1479514e31a0c98a90a4f&oe=5D1671FD"
	}
	console.log(localStorage.getItem("topic"))
	document.getElementById("topic").innerHTML = localStorage.getItem("topic")
	document.getElementById('netid').innerHTML = localStorage.getItem('netid')
	document.getElementById('firstname').innerHTML = localStorage.getItem('firstname')
	document.getElementById('sex').innerHTML = localStorage.getItem('sex')
	document.getElementById('year').innerHTML = localStorage.getItem('year')
	document.getElementById('join_date').innerHTML = localStorage.getItem('join_date')
	document.getElementById('user_post_count').innerHTML = localStorage.getItem(user_post_count)
}

function submitPost() {
	var temp_count = localStorage.getItem(user_post_count)
	temp_count = Number(temp_count)
	temp_count += 1
	console.log(temp_count)
	localStorage.setItem(user_post_count, temp_count)

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
	populate()
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

	if (document.getElementById('upvote' + post_number).style.color != 'blue') {

		// check if downvote was previously selected
		if (document.getElementById('downvote' + post_number).style.color == 'blue'){
			document.getElementById('downvote' + post_number).style.color = 'black';
			post_votes[post_number] += 1;
		}

		// change color of upvote button
		document.getElementById('upvote' + post_number).style.color = 'blue';

		// increment votes
		console.log(post_number);
		post_votes[post_number] += 1;
		total = post_votes[post_number];
		// update vote display
		document.getElementById('voteCount' + post_number).innerHTML = total;
		console.log(post_votes);

	}
	else {		// removing an upvote
		document.getElementById('upvote' + post_number).style.color = 'black';
		post_votes[post_number] -= 1;
		document.getElementById('voteCount' + post_number).innerHTML = post_votes[post_number];
	}

}

function downvote(id_name) {
	var post_number = id_name.slice(8);

	if (document.getElementById('downvote' + post_number).style.color != 'blue') {

		// check if upvote was previously selected
		if (document.getElementById('upvote' + post_number).style.color == 'blue'){
			document.getElementById('upvote' + post_number).style.color = 'black';
			post_votes[post_number] -= 1;
		}

		// change color of upvote button
		document.getElementById('downvote' + post_number).style.color = 'blue';

		// decrement votes
		console.log(post_number);
		post_votes[post_number] -= 1;
		total = post_votes[post_number];
		document.getElementById('voteCount' + post_number).innerHTML = total;
		console.log(post_votes);

		// unselect upvote if it was previously selected
		document.getElementById('upvote' + post_number).style.color = 'black';
	}
	else {		// removing a downvote
		document.getElementById('downvote' + post_number).style.color = 'black';
		post_votes[post_number] += 1;
		document.getElementById('voteCount' + post_number).innerHTML = post_votes[post_number];
	}

}
