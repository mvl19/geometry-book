import { useState } from "react";
import { StlViewer } from "react-stl-viewer";
import Card from "./Card";

interface CardProps {
    description: string,
    width?: number,
    height?: number,
    url: string,
}

export default function StlCard({url, description="dummy"}: CardProps) {
    const [load, setLoad] = useState(true);
    return (
        <Card>
            <StlViewer 
                orbitControls
                shadows
                showAxes
                onFinishLoading={()=>{setLoad(false)}}
                url={url}
            />
            {load && <p>Loading</p>}
            
            <figcaption className="font-mono">{description}</figcaption>
        </Card>
    )
}