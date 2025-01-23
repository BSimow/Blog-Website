const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const env = require("dotenv").config().parsed;

const _ = require("lodash");

const app = express();

const postSchema = {
	title: String,
	content: String,
};

const Post = mongoose.model("Post", postSchema);
// Connect to the database
mongoose.connect(env.MONGO_API);

const post1 = new Post({
	title: "Day 1",
	content: "This is the first day of my blog.",
});

const defaultPosts = [post1];

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
	Post.find({})
		.then((posts) => {
			if (posts.length === 0) {
				Post.insertMany(defaultPosts).catch((err) => {
					console.log(err);
				});
			}
			res.render("index", {
				title: "Home",
				content: homeStartingContent,
				posts: posts,
			});
		})
		.catch((err) => {
			res.send(err);
		});
});
app.get("/compose", (req, res) => {
	res.render("compose", { title: "Compose" });
});

app.post("/compose", (req, res) => {
	const post = new Post({
		title: _.capitalize(req.body.postTitle),
		content: req.body.postBody,
	});
	post
		.save()
		.then(() => {
			res.redirect("/");
		})
		.catch((err) => {
			res.send(err);
		});
});

app.get("/about", (req, res) => {
	res.render("about", { title: "About Us", content: aboutUsContent });
});

app.get("/contact", (req, res) => {
	res.render("contact", { title: "Contact Us", content: contactUsContent });
});

app.get("/posts/:postId", (req, res) => {
	const requestedId = req.params.postId;
	Post.findById(requestedId)
		.then((post) => {
			res.render("post", {
				title: _.capitalize(post.title),
				content: post.content,
			});
		})
		.catch((err) => {
			res.send(err);
		});
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
