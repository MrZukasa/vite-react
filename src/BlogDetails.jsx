import { useParams,useHistory } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {

    const {id} = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/'+ id);
    const history = useHistory();
    const handleClick= () => {
        fetch('http://localhost:8000/blogs/'+ id,{
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

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
            <div class="bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded max-w-fit mt-5 flex;">
                <button onClick={handleClick}>
                    <svg class="w-5 h-5 max-w-fit inline-flex items-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                    <span>Delete</span>
                </button>
            </div>
        </div>        
    );
}
 
export default BlogDetails;