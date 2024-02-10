import React from "react"
import { NavLink } from "react-router-dom"
import { sliseTextHandler } from "../../utils/utils"

const PostItem=({post})=>{
    return <div >
    <h2>{post.id} - {post.title}</h2>
    <p>{sliseTextHandler(post.body)}</p>
    <NavLink to={`/${post.id}`}>Подробнее</NavLink>
  </div>
}
export default PostItem