import { useNavigate, useParams } from "react-router-dom"

const BlogPostDetails = ({ posts }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const post = posts[parseInt(id)];

    return (
        <div className="container mt-4">
            <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                    <button
                        className="btn btn-primary ms-0 mt-2 rounded border-0 p-2"
                        onClick={() => navigate('/')}
                    >
                        Back to list
                    </button>
                </div>
            </div>

            {post ? (
                <div className="row justify-content-center mt-4 mb-3">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title mt-3">{post.title}</h5>
                                {post.urlToImage && (
                                    <img
                                        className="img-thumbnail mb-3"
                                        src={post.urlToImage}
                                        alt={post.title}
                                    />
                                )}
                                <p className="card-text">{post.description}</p>
                                <p className="card-text">{post.content}</p>
                                <p className="card-text text-muted">Author: {post.author}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row justify-content-center mt-4">
                    <div className="col-auto">
                        <p>Post not found</p>
                    </div>
                </div>
            )}
        </div>
    )
}


export default BlogPostDetails