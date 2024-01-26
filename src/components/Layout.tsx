import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Layout({children}:{children: React.ReactNode}) {
    const [visible, setVisible] = useState(false);
    const sidebarHandler = () => {
        setVisible(!visible);
    }
    return (
        <>
        <Sidebar visible={visible} onClick={sidebarHandler}/>
        <Header onClick={sidebarHandler}/>
        {children}
        </>
    )
}