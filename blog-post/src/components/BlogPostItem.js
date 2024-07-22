import React from 'react'
import { Link } from 'react-router-dom'

const BlogPostItem = ({ id, post }) => {
  return (
    <>
      <div className='BlogPostItem card h-100 p-3 m-3' style={{ backgroundColor: '#d0d2eb', fontFamily: 'cursive', fontWeight: 600 }}>
        <div className='card-body d-flex flex-column'>
          <p>Posted On: {new Date(post.publishedAt).toLocaleDateString('en-GB')}</p>
          <p>{post.title}</p>
          <Link to={`/post/${id}`} className="btn btn-primary mt-auto align-self-start">Read More</Link>
        </div>
      </div>
    </>
  )
}

export default BlogPostItem
