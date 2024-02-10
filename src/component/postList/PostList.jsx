import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetDataFromJSONPlaceholderQuery } from '../../bll/QueryApi';
import s from "./PostList.module.css"
import PostItem from './post/PostItem';



const PostList=()=>{

const [refStart, inViewStart]=useInView({threshold:0})
const [refEnd, inViewEnd]=useInView()
const [start,setStart]=useState(0)
const {data=[]}=useGetDataFromJSONPlaceholderQuery({start})
useEffect(()=>{
  if (inViewStart) {
    setStart(prev=>prev>0?prev-1:prev)
    
  }
},[inViewStart])
useEffect(()=>{
  if (inViewEnd) {
    setStart(prev=>prev+1)
    
  }
},[inViewEnd])

  const list=(data)=>{
    return data.map((post,index,arr)=>{
      return index===0
      ?<li key={post.id} ref={refStart}><PostItem post={post}/></li>
      :index===arr.length-1
        ?<li key={post.id} ref={refEnd}><PostItem post={post}/></li>
        :<li key={post.id}><PostItem post={post}/></li>
    })
  }


  return <div>
    <h1>Все посты</h1>
    <ul className={s.list}>
      {list(data)}
    </ul>
  </div>
}
export default PostList