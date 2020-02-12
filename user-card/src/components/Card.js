import React from 'react';

const Card = props => {

    return (
        <div className='Card'>

            <div className='Card-header'>
                <h3>{props.users.name}</h3>
                <img src={props.users.avatar_url} alt={props.users.name}/>
            </div>

            <div className='Card-main'>
                <p>Username: {props.users.login}</p>
                <p>Profile: <a href={props.users.html_url}>{props.users.html_url}</a></p>
                <p>Location: {props.users.location}</p>
                <p>Followers: {props.users.followers}</p>
                <p>Following: {props.users.following}</p>
                <p>Bio: {props.users.bio}</p>
            </div>

        </div>
    )
}
export default Card;