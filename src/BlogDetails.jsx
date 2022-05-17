import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {

    const {id} = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/'+ id);

    return (
        <div className="blog-details">
            <p class="text-3xl">Blog Details - {id}</p>
            { isPending && <div class="italic">Loading...</div> }
            { error && <div className="errormsg">{error}</div> }
            { blog && 
                <article>
                    <p class="text-3xl mt-5 text-red-300">{ blog.title }</p>
                    <p class="italic mt-2">Written by { blog.author }</p>
                    <div class="mt-2 pl-5 first-letter:text-5xl first-letter:mr-3 first-letter:float-left first-letter:italic first-letter:text-red-300">
                        { blog.body }
                    </div>
                </article>
            }
        </div>
    );
}
 
export default BlogDetails;