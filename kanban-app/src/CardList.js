import React from 'react';
import Card from './Card'
import PropTypes from 'prop-types'; 
export default class CardList extends React.Component {

    render() {
        const cardComponents = [];
        this.props.cards.forEach(card => {
            cardComponents.push(<Card key={card.id} color={card.color} title={card.title} description={card.description} tasks={card.tasks} />)
        });
        return (
            <div className='CardList'>
                <h1>{this.props.title}</h1>
                {cardComponents}
            </div>
        );
    }
}

CardList.propType = {
    title:PropTypes.string.isRequired,
    cards:PropTypes.arrayOf(PropTypes.string).isRequired
}