const BlogList = ({blogs}) => {
    // const blogs = props.blogs;
    // raccolgo la props passata come parametro e la assegno ad una variabile
    // nel caso di handleDelete posso passare direttamente funzioni come props

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <p className="title">{blog.title}</p>
                    <p class="italic ml-2"> Written by {blog.author}</p>
                    <div className="button">
                        <button>
                            <svg class="w-5 h-5 max-w-fit inline-flex items-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;