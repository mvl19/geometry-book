import Menu from "/menu.svg";

export default function Header({onClick}: {onClick: ()=> void}) {
    
    return (
        <header className="flex items-center justify-between h-16 w-screen font-mono text-black">
            <div className="flex pl-4 items-center gap-4">
                <div className="cursor-pointer hover:bg-gray-400 rounded-full p-1">
                    <img src={Menu} alt="" width={24} height={24} onClick={onClick} />
                </div>
                <div className="flex gap-4 items-center">
                    <span className="text-sm lg:text-base">Geometry Of Batik</span>
                </div>
            </div>
            <div className="pr-4 text-sm md:text-base w-[22ch] overflow-hidden whitespace-normal border-r-4">
                By Dimas Indra
            </div>
        </header>
    )
}