const BlogList = ({blogs}) => {
    // const blogs = props.blogs;
    // raccolgo la props passata come parametro e la assegno ad una variabile

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <p className="title">{blog.title}</p>
                    <p class="italic ml-2"> Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;