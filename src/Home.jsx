const Home = () => {
    return (
        <div className="Home">
            <div className="h2" class="text-4xl">
                <p>Homepage</p>
            </div>
            <div className="button">
                <button>
                    <svg class="w-6 h-6 mr-auto fill-current inline-flex items-center" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                    </svg>
                    <span>Click me</span>
                </button>
            </div>
        </div>
    );
}
 
export default Home;