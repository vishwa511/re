// import React, { useState} from "react"
// import Axios from "axios"; 
// import './sty.css';

// function Header(){
//     const [motivate, setmotiv] = useState("");
    
//     const getMotivate = () => {
//         Axios.get("https://type.fit/api/quotes").then(
//             (response)=> {
//                 console.log(response);
//                 setmotiv(response.data.body + "_" + response.data.author);
//             }
//         );
//     };
    
//     return(
//         <div className="header_01">
//             <h1>Hey professor.. here is your calculator</h1>
//        <h3 className="api">{motivate}</h3>
//        <button id="api_btn" onClick={getMotivate}>motivate now</button>
      
//         </div>
//     )
// }

// export default Header