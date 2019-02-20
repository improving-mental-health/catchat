// Global Variables
var posts = [];




function post() {

	// get new post from user input and append to "posts" array
	var new_post = document.getElementById('new-post-text').value;
	posts.push(new_post);
	
	// generate a div for each post and display
	for (var i = 0; i < posts.length; i++) {
		console.log(i);
		var name = "post" + i;
		var div = document.createElement(name);
		div.style.width = "100px";
		div.style.height = "100px";
		div.style.background = "red";
		div.style.color = "white";
		div.innerHTML = posts[i];

		document.getElementById("post1").appendChild(div);
	}
	console.log(posts);
}