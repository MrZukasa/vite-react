const Navbar = () => {
    return (
        <nav className="navbar" class="flex justify-center border-b-2 border-gray-200 mt-4">
            <div className="h1" class="text-5xl text-red-400 max-w-xl m-auto mb-4">
                <p>The Dojo Blog</p>
            </div>
            
            <div className="links" class="m-auto">
                <a href="/" class="pr-2 cursor-pointer hover:text-red-300">Home</a>
                <a href="/create" class="pr-2 cursor-pointer hover:text-red-300">New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;