import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const getPosts = createAsyncThunk(
    'getPosts',
    async function (info, {dispatch}) {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        if (response.status >= 201 || response.status <= 204) {
            const posts = await response.json()
            dispatch(postInfo(posts))
        }
    }
)

export const getMorePostInfo = createAsyncThunk(
    'getMorePostInfo',
    async function (id, {dispatch}) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        if (response.status >= 201 || response.status <= 204) {
            const posts = await response.json()
            dispatch(getMorePost(posts))
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: [],
        more: null
    },
    reducers: {
        postInfo: (state, action) => {
            state.posts = action.payload
        },
        getMorePost: (state, action) => {
            state.more = action.payload
        }
    }
})

export const {postInfo, getMorePost} = postSlice.actions

export default postSlice.reducer