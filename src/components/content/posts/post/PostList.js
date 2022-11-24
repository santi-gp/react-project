import React from 'react'
import Post from './Post';
function PostList({ posts = [] }) {
    return (
        <>
            {
                posts.map((p, i) => (
                    <Post {...p} key={'post-' + i} />)
                )
            }
        </>
    )
}

export default PostList