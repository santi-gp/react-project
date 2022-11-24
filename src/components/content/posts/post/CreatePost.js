import React, { useState } from 'react'
import styles from '../../forms/Forms.module.css';
function CreatePost({ user, posts, setPosts }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleTitle = (e) => {
        setTitle(e.target.value);
        e.preventDefault();
    };
    const handleContent = (e) => {
        setContent(e.target.value);
        e.preventDefault();
    };
    const handleCreate = (e) => {
        const newPost = { title, content, author: user };
        setPosts([newPost, ...posts]);
        e.preventDefault();
    }
    return (
        <>
            <form className={styles.forms} onSubmit={handleCreate}>
                <h4>Autor: {user}</h4>
                <label>Título</label>
                <input type='text' name='createTitle' value={title} onChange={handleTitle} />
                <textarea value={content} onChange={handleContent}></textarea>
                <button className={styles.submit}>Crear Post</button>
            </form>
        </>
    )
}

export default CreatePost