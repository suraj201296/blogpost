
import React  from 'react';
import BlogPostItem from './BlogPostItem';

const BlogPostList = ({posts , page , nextPage , prevPage}) => {

  return (
    <div>
            <div className='container'>
                <h3 className='text-center my-3'>Blog Posts</h3>
                <div className='row justify-content-center'>
                    {
                        posts && posts.map((post, index) => (
                            <div key={index} className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                                <BlogPostItem id={index} post={post} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center gap-2 mb-5'>
                <button className='btn btn-info' onClick={prevPage} disabled={page <= 1}>Previous</button>
                <button className='btn btn-info' onClick={nextPage} disabled={Math.ceil(posts.length / page) <= page}>Next</button>
            </div>
        </div>
  );
};

export default BlogPostList;
