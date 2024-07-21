import React from 'react'
import { Link } from 'react-router-dom'

const BlogPostItem = ({ id, post}) => {
  return (
    <>
        <div className='BlogPostItem card col-lg-2 col-md-3 col-sm-4  p-3 m-3 gap-3' style={{ backgroundColor : '#d0d2eb', fontFamily :'cursive', fontWeight : 600 , }}>
            <p>{ new Date(post.publishedAt).toLocaleDateString('en-GB')}</p>
            <p>{post.title}</p>
            <Link to={`/post/${id}`} className="btn btn-primary mt-auto">Read More</Link>
        </div>
    </>
  )
}

export default BlogPostItem
