import { useState } from 'react'
import AspectRatioSelector from './AspectRatioSelector'
import AspectRatio from './AspectRatio'
import './App.css'

function App() {
    const [aspectRatio, setAspectRatio] = useState<AspectRatio>(new AspectRatio(1920,1080))

    const actualRatio:AspectRatio = new AspectRatio(1920, 1080);

    const onSelectRatio = (selectedRatio:AspectRatio):void => {
        setAspectRatio(selectedRatio);
        console.log(selectedRatio);

    }
    return (
        <>
            <AspectRatioSelector actualRatio={actualRatio} selectedRatio={aspectRatio} onSelectRatio={onSelectRatio} />
        </>
    )
}

export default App
