


const Post = require('../models/postModel');

// Get all posts
exports.readAllPost = (req, res) => {
    Post.find({}, (error, posts) => {
        if(error){
            res.status(500);
            console.log(error);
            res.end({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json({
                count : posts.length,
                posts
            });
        }
    });
}

// Create a post
exports.createAPost = (req, res) => {
    // {
    //     title: "Mon premeir article",
    //     content: "toto"
    // }
    let newPost = new Post(req.body);

    newPost.save((error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(201);
            res.json(post);
        }
    });
}


// Get a post
exports.readAPost = (req, res) => {
    Post.findById(req.params.post_id, (error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(post);
        }
    });
}

// Update a post
exports.updateAPost = (req, res) => {
    Post.findByIdAndUpdate(req.params.post_id, req.body, {new: true}, (error, post) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(post);
        }
    });
}

// Delete a post
exports.deleteAPost = (req, res) => {
    Post.findByIdAndDelete(req.params.post_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.end({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Article supprimé"});
        }
    });
}




















