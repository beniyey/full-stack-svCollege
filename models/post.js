import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: Date,
    userId: String
})

const Post = mongoose.model("Post", postSchema)
export default Post