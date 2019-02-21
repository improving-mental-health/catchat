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

		var p = document.getElementById("testPost");
		var p2 = p.cloneNode(true);
		allposts.appendChild(p2);
		p2.innerHTML.innerHTML == "test"
/*
		var node = document.createElement("DIV");
		var textnode = document.createTextNode("Water");
		node.appendChild(textnode);
		document.getElementById("posts").appendChild(node);
*/
		document.getElementById("post1").appendChild(div);
	}
	console.log(posts);

}
