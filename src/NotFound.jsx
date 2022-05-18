import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found">
            <p class="flex text-7xl mt-5 text-red-400">Sorry :(</p>
            <p class="flex text-2xl mt-5">That page cannot be found.</p>
            <Link to="/" class="flex mt-3 text-red-300 hover:text-red-500 italic">Back to the homepage...</Link>
        </div>
    );
}
 
export default NotFound;