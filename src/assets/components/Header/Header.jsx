// import PropTypes from 'prop-types';
const Header = () => {
    return (
        <header>
            {/* nav starts */}
            <nav>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Recipe Calories</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end space-x-5">
                        <label className="input input-bordered items-center gap-2 hidden md:flex">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                        <div className="avatar pr-6">
                            <div  className="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2 ">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* nav ends */}

            {/* banner starts */}
            <div className="w-11/12 mx-auto my-4">
                <div style={{backgroundImage: 'url("/images/chef.png")'}} className="min-h-[600px] bg-cover bg-center bg-no-repeat w-full rounded-xl text-white text-center flex items-center">
                    <div className="w-11/12 md:w-3/4 mx-auto space-y-5">
                        <h3 className="text-4xl md:text-7xl font-extrabold">Discover an exceptional cooking class tailored for you!</h3>
                        <p className="opacity-75">Join a personalized cooking class designed to suit your taste, skill level, and culinary goals. Learn from expert chefs, elevate your kitchen skills, and create delicious dishes with confidence!</p>
                        <button className="btn bg-lime-500 border-none text-white">Explore Now</button>
                        <button className="btn ml-4">Get Feedback</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

// Header.propTypes = {

// };

export default Header;