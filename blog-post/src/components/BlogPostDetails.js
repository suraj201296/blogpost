import { useNavigate, useParams } from "react-router-dom"

const BlogPostDetails = ({posts}) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const post = posts[parseInt(id)];

    return(
        <div>
            <button className="ms-5 mt-2 rounded border-0 p-2" style={{ marginRight : '10px'}} onClick={() => navigate('/')}>Back to list</button>
            {post ? (
                <div className="container mt-2 card m-auto">
                    <h5 className="mt-3">{post.title}</h5>
                    <img className="m-2 img-thumbnail" src={post.urlToImage} alt={post.title} />
                    <p>{post.description}</p>
                    <p>{post.content}</p>
                    <p>{post.author}</p>
                </div>
            ) : (
                <p>Post not found</p>
            )}
        </div>
    )
}


export default BlogPostDetails