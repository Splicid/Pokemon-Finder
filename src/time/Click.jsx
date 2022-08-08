import React, {useState} from 'react'


const Click = () => {
    const date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    const [Count, SetCount] = useState();

    

    return(
        <div> 
            <h1> {month}/{day}/{year} </h1>
        </div>
    );
}


export default Click;