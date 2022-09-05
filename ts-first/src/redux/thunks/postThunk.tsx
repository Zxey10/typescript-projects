import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async(_?: any) => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(res?.data)
            return {data: res?.data}
        } catch (error) {
            console.log(error)
        }
    }
)