import React from 'react';

const Card = ({ name, email,skill }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
     {/*<img alt="user" src={"https://assets.nrdc.org/sites/default/files/styles/full_content--retina/public/media-uploads/wlds43_654640_2400.jpg?itok=LbhnLIk9"} />*/} 
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <h4>{skill}</h4>
      </div>
    </div>
  );
}

export default Card;


// import React, { Component } from 'react';
// import './card.css';

// let Card=({companyname,jobtitle,skills})=>{
//     return(
//     <div>
//     <div class="company-logo-img">
//       <img src="" />
//     </div>
//     <h5>{`${jobtitle}`}</h5>
//     <h6>`${companyname}`</h6>
//     <ul>
//         <li>{`${skills[0]}`}</li>
//         <li>{`${skills[1]}`}</li>
//     </ul>
//     <button>Apply</button>
//   </div>);
// }


// export default Card;