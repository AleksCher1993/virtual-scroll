import React from "react";
import s from "./Postinfo.module.css"
import { NavLink, useParams } from "react-router-dom";
import { useGetDataUserOfIdFromJSONPlaceholderQuery } from "../../bll/QueryApi";

const PostInfo=()=>{
    let {userId}=useParams()
    const {data={}}=useGetDataUserOfIdFromJSONPlaceholderQuery(userId)
    
return <div className={s.container}>
        <h1>Полное описание</h1>
        <NavLink to={`/`}>назад</NavLink>
        <div className={s.cart}>
        <h2>{data.id} - {data.title}</h2>
        <p>{data.body}</p>
        </div>
    </div>
}
export default PostInfo