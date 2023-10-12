import React from  'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Titulo = ({titulo, icon, estilo})=>{
    return(
        <h1 className={estilo}><FontAwesomeIcon icon={icon}/>  {titulo}</h1>
    )
}

export default Titulo