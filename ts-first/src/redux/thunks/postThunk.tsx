import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { Post } from "../slices/postSlice";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async() => {
        try {
            //const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const { data, status } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            console.log(data)
            return { data }
        } catch (error) {
            console.log(error)
            //return rejectWithValue(error)
        }
    }
)