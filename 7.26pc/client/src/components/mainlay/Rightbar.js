import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import duanwu from "../../images/duanwu.jpg";
import { useSelector,useDispatch } from 'react-redux'
const Rightbar = () => {
    const { posts,auth } = useSelector(state => state)
    const dispatch = useDispatch()
console.log(posts)
  return (
    <div className=" p-4 flex-row justify-center items-center">
        {auth.token && (<h1 className="text-3xl text-blue-400 text-center">
        <Link to="/newsupdate">新闻更新</Link>
      </h1>)}
      <h1 className="text-3xl text-blue-400 text-center">近期新闻</h1>
      <h1 className="flex justify-center pt-2 "> tite</h1>
      <img
        className="mx-auto w-10/12 h-52 rounded-3xl object-center pt-2"
        src={duanwu}
      ></img>
      <h1 className="flex justify-center pt-2 text-center w-10/12 mx-auto">
        ggg
      </h1>
    </div>
  );
};

export default Rightbar;
