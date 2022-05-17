import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" class="flex justify-center border-b-2 border-gray-200 mt-4">
            <div className="h1" class="text-5xl text-red-400 max-w-xl m-auto mb-4">
                <p>The Dojo Blog</p>
            </div>
            
            <div className="links" class="m-auto">
                {/* <a href="/" class="pr-2 cursor-pointer hover:text-red-300">Home</a>
                <a href="/create" class="pr-2 cursor-pointer hover:text-red-300">New Blog</a> */}
                {/*aggiungo il tag link per far si che ad ogni click si eviti di passare dal server, ma si rimanga sempre client side*/}
                <Link to="/" class="pr-5 cursor-pointer hover:text-red-300">Home</Link>
                <Link to="/create" class="pr-5 cursor-pointer hover:text-red-300">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;