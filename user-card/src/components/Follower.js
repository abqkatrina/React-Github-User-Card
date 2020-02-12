import React from 'react';


const Follower = ({follower}) => {

    return (
        <div className='Card-follower'>
            <div className='Card-header-follower'>
                 <h3>{follower.name}</h3>
                 <img src={follower.avatar_url} alt={follower.name}/>
            </div>
    
            <div className='Card-main-follower'>
                <p>Username: {follower.login}</p>
                <p>Profile: <a href={follower.html_url}>{follower.html_url}</a></p>
                <p>Organizations: <a href={follower.organizations_url}>{follower.organizations_url}</a></p>
                <p>Location: {follower.location}</p>
                <p>Followers: <a href={follower.followers_url}>{follower.followers}</a></p>
                <p>Following: <a href={follower.following_url}>{follower.following}</a></p>
                <p>Bio: {follower.bio}</p>
            </div>
        </div>
    )
}
export default Follower;