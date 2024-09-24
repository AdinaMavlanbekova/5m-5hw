import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMorePostInfo} from "../store/postSlice";

const Post = ({postInfo}) => {

    const dispatch = useDispatch()
    const {more} = useSelector(state => state.postReducer)

    const getMoreInfo = (id) => {
        dispatch(getMorePostInfo(id))
    }

    return (
        <div>
            <h1>{postInfo.title}</h1>
            <p>{postInfo.id}</p>
            <button onClick={() => getMoreInfo(postInfo.id)}>get more info</button>
            {more && more.id === postInfo.id &&
                <ul key={more.id}>
                    <li>{more.userId}</li>
                    <li>{more.title}</li>
                </ul>
            }
        </div>
    )
}

export default Post;
