// Temporary Data
// const users = [
//   {id:1 , name:'John'},
//   {id:2 , name: 'Jane'}
// ]
// const posts = [
//     {id:1 , title:'Post1',body:'.....',userId:'1'},
//     {id:2 , title:'Post1',body:'.....',userId:'1'},
//     {id:3 , title:'Post1',body:'.....',userId:'2'},
//     {id:4 , title:'Post1',body:'.....',userId:'2'},
// ]

import { Post, User } from "./models";
import { connectToDB } from "./utils";

export const getPosts = async ()=>{
   try {
    connectToDB();
      const posts = await Post.find();
      return posts;
   } catch (err) {
      console.log(err);
      throw new Error("Failed to Fetch Posts");
   }
}
export const getPost = async (slug)=>{
    try {
      connectToDB()
      const post = await Post.find({slug})
      return post;
    } catch (err) {
      console.log(err)
      throw new Error('Failed to Fetch Post!')
    }
}
export const getUser = async (id)=>{
    try {
      connectToDB()
      const user = await User.findById(id)
      return user;
    } catch (err) {
      console.log(err)
      throw new Error('Failed to Fetch User!')
    }
}
export const getUsers = async ()=>{
    try {
      connectToDB()
      const users = await User.find();
      return users;
    } catch (err) {
      console.log(err)
      throw new Error('Failed to Fetch Users!')
    }
}