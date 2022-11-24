import React from 'react'

function Post({ title, author, content }) {
    return (
        <>
            <div className='flex-column m-2-auto jc-center width50'>
                <h3>{title}</h3>
                <div className='my-2'>
                    <p>{content}</p>
                </div>
                <h5 className='mb-1'>Escrita por: {author}</h5>
                <hr/>
            </div>
            
        </>
    )
}

export default Post 