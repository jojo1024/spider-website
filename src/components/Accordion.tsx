import React, { useState } from 'react'

function Accordion({ title, content, active, setActive }: any) {
    const [close, setClose] = useState(false)
    return (
        <div className='accordion'>
            <div className="accordionHeading">
                <div className="container">
                    <div>{title}</div>
                    <span onClick={() => {
                        setActive(title);
                        setClose(!close)
                    }
                    }>
                        {active === title ? "-" : "+"}</span>
                </div>
            </div>
            <div className={((active === title) && close  ? "show" : "") + " accordionContent"}>
                <div className="container">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Accordion
