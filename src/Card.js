import React from 'react';

const Card = (props) => {
    const { name, email, id } = props;
    return(
        <div className='tc bg-light-purple dib br3 ma3 pa3 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );


    }


export default Card;