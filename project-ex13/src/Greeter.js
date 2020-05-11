import React from 'react';
import PropTypes from 'prop-types'; 

export default class Greeter extends React.Component {
    render(){
        console.log(this.props);
        return(
       <h1>Hello {this.props.name}</h1>
        );
    }
}

// Greeter.propTypes = {
//     name: PropTypes.number
// }

Greeter.propTypes = {
         name: PropTypes.string.isRequired
     }
// Prop Default Value
Greeter.defaultProps = {
    name: '둘리의 친구'
}

/* 
Prop Validator 
기본형 validator
PropTypes.string
PropTypes.number
PropTypes.boolean
PropTypes.object
PropTypes.func
PropTypes.array

조합형 Validator
PropTypes.oneOfType ex) PropTypes.oneOfType([PropTypes.string, PropTypes.number])
PropTypes.arrayOf   ex) PropTypes.arrayOf(PropTypes.string)
PropTypes.objectOf  ex) PropTypes.objectOf(PropTypes.string) : string 타입의 속성이 있는 객체 
PropTypes.shape     ex) PropTypes.shape({
                                    name: PropTypes.string
                                    price: PropTypes.number
                                    countOfStock; PropTypes.number
                                    isDiscount: PropTypes.boolean
                                    })
그박에..
PropTypes.element
PropTypes.instanceof
 */
