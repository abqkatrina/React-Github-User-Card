import React from 'react';

const Card = props => {

    return (
        <div className='Card'>

            <div className='Card-header'>
                <img src={props.user.avatar_url} alt={props.user.name}/>
                <h3>{props.user.name}</h3>
            </div>

            <div className='Card-main'>
                <p>Username: {props.user.login}</p>
                <p>Profile: <a href={props.user.html_url}>{props.user.html_url}</a></p>
                <p>Location: {props.user.location}</p>
                <p>Followers: {props.user.followers}</p>
                <p>Following: {props.user.following}</p>
                <p>Bio: {props.user.bio}</p>
            </div>

        </div>
    )
}
export default Card;