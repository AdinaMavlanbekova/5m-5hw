import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../store/postSlice";
import Post from "../components/Post";


const PostPage = () => {

    const {posts} = useSelector(state => state.postReducer)
    const dispatch = useDispatch()

    const getPostFunc = () => {
        dispatch(getPosts())
    }



    useEffect(() => {
        getPostFunc()
    }, [])

    return (
        <div>
            <h1>{posts.map(post => <Post key={post.id} postInfo={post} />)}</h1>
        </div>
    )
}

export default PostPage;
