import  {Link} from "@tanstack/react-router";

const NavBar = () => {
    return (
        <>
            <div className='navbar bg-white pl-10 pr-10'>
                <div className='navbar-start'>
                    <span className="text-black font-medium">
                        <Link to={'/'}>VibeStream</Link>
                    </span>
                </div>

                <div className='navbar-end'>
                    <button className='btn btn-ghost text-black hover:bg-white hover:border-0'>Home</button>
                    <button className='btn btn-ghost text-black hover:bg-white hover:border-0'>Explore</button>
                    <button className='btn btn-ghost text-black hover:bg-white hover:border-0'>Your Library</button>

                    <div className="flex gap-2 ml-2">
                        <button className="btn btn-circle bg-white border-0">
                            <Link to={'likedsongPlaylist'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="black" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            </Link>
                        </button>

                        <button className='btn btn-circle bg-white border-0 '>
                            <svg width="130px" height="130px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke="#050505" stroke-width="1.5"></circle> <circle cx="12" cy="12" r="10" stroke="#050505" stroke-width="1.5"></circle> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#050505" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;