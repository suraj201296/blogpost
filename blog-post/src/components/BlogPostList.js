// src/components/BlogPostList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogPostItem from './BlogPostItem';

const BlogPostList = ({posts , page , nextPage , prevPage}) => {

  return (
    <div>
      <div className='container d-flex justify-content-center m-auto row'>
      <h3 className='container m-3'>Blog Posts</h3>
        {
          posts && posts.map((post, index) => (
            <BlogPostItem key={index} id={index} post={post} />
          ))
        }
      </div>
      <div className='d-flex justify-content-center gap-2 mb-5'>
        <button className='btn bg-info-subtle' onClick={prevPage} disabled={page <= 1}>Previous</button>
        <button className='btn bg-info-subtle' onClick={nextPage} disabled={Math.ceil(posts.length / page) <= page}>Next</button>
      </div>

    </div>
  );
};

export default BlogPostList;
