import {Link} from 'react-router-dom';
const BlogList = ({blogs}) => {
    // const blogs = props.blogs;
    // raccolgo la props passata come parametro e la assegno ad una variabile
    // nel caso di handleDelete posso passare direttamente funzioni come props

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <p className="title">{blog.title}</p>
                        <p class="italic ml-2"> Written by {blog.author}</p>
                    </Link>                    
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;