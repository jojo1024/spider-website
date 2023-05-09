import React, { useEffect, useState } from 'react'
import '../style/spinner.css'
function Spinner() {

    return (
        <>
        <div style={{display: "flex", justifyContent:"center", alignItems:"center", height:"100vh", flexDirection: "column"}}>
                <div>Chargement en cours, Veuillez patienter...</div>
            <label className='spin' >
                <div className="check-icon"></div>
            </label>
        </div>
        </>
    )
}

export default Spinner