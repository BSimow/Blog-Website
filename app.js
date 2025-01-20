const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const _ = require("lodash");

const app = express();
const port = 3000;

posts = [];

const homeStartingContent =
	"This is a simple blog website where you can add your daily blogs. You can add your blog by clicking on the compose button. You can also view the full blog by clicking on the read more button.";
const aboutUsContent =
	"This is the about page of the blog website. You can know more about the website and the developer of the website.";
const contactUsContent =
	"This is the contact page of the blog website. You can contact the developer of the website by filling the form.";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
	res.render("index", {
		title: "Home",
		content: homeStartingContent,
		posts: posts,
	});
});
app.get("/compose", (req, res) => {
	res.render("compose", { title: "Compose" });
});

app.post("/compose", (req, res) => {
	const post = {
		title: req.body.postTitle,
		content: req.body.postBody,
	};

	posts.push(post);
	res.redirect("/");
});

app.get("/about", (req, res) => {
	res.render("about", { title: "About Us", content: aboutUsContent });
});

app.get("/contact", (req, res) => {
	res.render("contact", { title: "Contact Us", content: contactUsContent });
});

app.get("/posts/:postName", (req, res) => {
	const requestedTitle = _.lowerCase(req.params.postName);

	posts.forEach((post) => {
		const storedTitle = _.lowerCase(post.title);
		if (storedTitle === requestedTitle) {
			res.render("post", { title: storedTitle, content: post.content });
		}
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
