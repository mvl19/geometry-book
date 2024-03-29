import { Link } from "react-router-dom";
import Gallery from "/gallery.svg";
import About from "/about.svg";
import Home from "/home.svg";
import Close from "/menu_close.svg"

interface SidebarProps {
    visible: boolean,
    onClick: () => void,
}

export default function Sidebar({visible, onClick}: SidebarProps) {
    return (
        <>
            {visible ? <div className="fixed w-full h-full bg-black opacity-40 top-0 z-50" onClick={onClick} />: <></> }
            <nav className={`text-black h-full w-64 fixed bg-white opacity-100 z-50 transition-all duration-25 shadow left-[-100%] ${visible ? 'left-[0]' : ''}`}>
               <div className="flex items-center p-4 gap-4" data-visible="true">
                    <div className="bg-gray-200 rounded-full cursor-pointer">
                        <img src={Close} alt="" width={24} height={24} onClick={onClick}/>
                    </div>
                </div>   
                <Link className="flex items-center p-5 hover:bg-gray-200 gap-5" to="/">
                    <img src={Home} alt="home" width={24} height={24} />Home
                </Link>
                <Link className="flex items-center p-5 hover:bg-gray-200 gap-5" to="gallery">
                    <img src={Gallery} alt="gallery" width={24} height={24} />Gallery
                </Link>
                <Link className="flex items-center p-5 hover:bg-gray-200 gap-5" to='about'>
                    <img src={About} alt="about" width={24} height={24} />About me
                </Link> 
            </nav>
        </>
        
    )
}