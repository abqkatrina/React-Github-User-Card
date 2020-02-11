import React from 'react';

const Follower = props => {


        return (
            <div className='Card'>

                <div className='Card-header'>
                    <img src={props.follower.avatar_url} alt={props.follower.name}/>
                    <h3>{props.follower.name}</h3>
                </div>

                <div className='Card-main'>
                    <p>Username: {props.follower.login}</p>
                    <p>Profile: <a href={props.follower.html_url}>{props.follower.html_url}</a></p>
                    <p>Organizations: <a href={props.follower.organizations_url}>{props.follower.organizations_url}</a></p>
                    <p>Followers: <a href={props.follower.followers_url}>{props.follower.followers_url}</a></p>
                    <p>Fallowing: <a href={props.follower.following_url}>{props.follower.following_url}</a></p>
                    {/* <p>Location: {props.follower.location}</p>
                    <p>Followers: {props.follower.followers}</p>
                    <p>Following: {props.follower.following}</p>
                    <p>Bio: {props.follower.bio}</p> */}
                </div>

            </div>
        )

}
export default Follower;