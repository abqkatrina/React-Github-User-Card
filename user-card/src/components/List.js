import React from 'react';
import Card from './Card';

const List = props => {

    return (
        <div className='List-main'>           
            <Card key={props.user.id} user={props.user}/>           
        </div>
    )
}
export default List;