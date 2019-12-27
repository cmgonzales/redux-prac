import {FETCH_POST, NEW_POST} from './types'

export const fetchPost = ()=> dispatch =>{
    console.log('fetching')
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POST,
            payload: posts
        }))
    } 


    export const createPost = (postData)=> dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
            })
            .then(res => res.json())
            .then(posts => dispatch({
                type: NEW_POST,
                payload: posts
            }))
        }
