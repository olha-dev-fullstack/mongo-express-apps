const mongoose = require("mongoose");
const assert = require("assert");

const User = require("../src/user");
const Comment = require("../src/comment");
const BlogPost = require("../src/blogPost");
const { log } = require("util");

describe("Associations", () => {
  let joe, blogPost, comment;
  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    blogPost = new BlogPost({ title: "Js is great", content: "Yes it is" });
    comment = new Comment({ content: "Congrats on new post" });

    joe.blogPosts.push(blogPost);
    blogPost.comments.push(comment);
    comment.user = joe;

    Promise.all([joe.save(), blogPost.save(), comment.save()]).then(() =>
      done()
    );
  });

  it("saves a relation between a user and a blogpost", (done) => {
    User.findOne({ name: "Joe" })
      .populate("blogPosts")
      .then((user) => {
        assert(user.blogPosts[0].title === "Js is great");
        done();
      });
  });

  it("saves a full reation graph", (done) => {
    User.findOne({ name: "Joe" })
      .populate({
        path: "blogPosts",
        populate: {
          path: "comments",
          model: "comment",
          populate: {
            path: "user",
            model: "user",
          },
        },
      })
      .then((user) => {
        assert(user.name === "Joe");
        assert(user.blogPosts[0].title === "Js is great");
        assert(
          user.blogPosts[0].comments[0].content === "Congrats on new post"
        );
        done();
      });
  });
});
