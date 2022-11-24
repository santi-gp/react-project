import React, { useState } from 'react'
import UserBar from './user/UserBar';
import CreatePost from './post/CreatePost';
import PostList from './post/PostList';
//const user = 'Fabio';
const defaultPosts = [
    {
        title: 'Devil Inside',
        content: 'La canción fue más exitosa en los Estados Unidos, llegando al número 2 en el Billboard Hot 100 durante dos semanas.',
        author: 'Andrew Farriss y Michael Hutchence'
    },
    {
        title: 'Open Arms',
        content: 'Canción interpretada por la banda de rock estadounidense Journey.',
        author: 'Steve Perry y Jonathan Cain'
    }
]
function PostMain() {
    const [user, setUser] = useState('');
    const [posts, setPosts] = useState(defaultPosts);
    return (
        <>
            <UserBar user={user} setUser={setUser} />
            <div>{user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}</div>
            <PostList posts={posts} />
        </>
    )
}

export default PostMain