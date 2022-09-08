import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getPosts } from '../thunks/postThunk'

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface Posts{
    posts: Post[],
    loading?: boolean,
    err?: string
}

const initialPostsState: Posts = {
    posts: [],
    loading: false,
    err:''
}

const postSlice = createSlice({
    name: 'posts',
    initialState: initialPostsState,
    reducers: {

    },
    extraReducers: (builder) => {
       builder
            .addCase(getPosts.fulfilled, (state,action) => {
                const data = action?.payload?.data as Post[]
                console.log(data)
                state.loading = false
                state.posts = data
            })
            .addCase(getPosts.pending, (state,action) => {
                state.loading = true
            }) 
            .addCase(getPosts.rejected, (state,action) => {
                console.log(action?.error?.message)
            }) 
    },
    
})

export default postSlice