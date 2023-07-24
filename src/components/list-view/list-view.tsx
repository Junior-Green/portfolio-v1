import { useState } from "react"


const ListView = ({ children }: { children: Iterable<React.ReactNode> }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1)



    return (
        Array.from(children).map((element, index) =>
            <div key={index} className={`mb-3 ${selectedIndex !== index && selectedIndex !== -1 ? "opacity-20" : "opacity-100"} transition-opacity`} onMouseEnter={() => setSelectedIndex(index)} onMouseLeave={() => setSelectedIndex(-1)}>
                {element}
            </div>
        )
    )

}

export default ListView