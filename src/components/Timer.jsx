
import { useState } from "react";

export const Timer = ({int, end}) => {
    return(
     <div className="timer">
         <h1>Initial Time: {int}</h1>
         <h1>End Time: {end}</h1>
         </div>
    )
}