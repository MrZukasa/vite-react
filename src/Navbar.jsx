const Navbar = () => {
    return (
        <nav className="navbar" class="flex justify-center">
            <div className="h1" class="text-5xl mt-4 max-w-xl border-b-2 border-gray-200 m-auto text-red-400">
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