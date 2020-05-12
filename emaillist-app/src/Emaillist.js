import React from 'react';
import EmailListItem from './EmaillistItem';
export default class Emaillist extends React.Component {
    componentWillReceiveProps() {
        console.log('Emaillist:componentWillReceiveProps()');
    }
    shoudComponentUpdate() {
        console.log('Emaillist:shoudComponentUpdate()');
    }

    componentWillUpdate() {
        console.log('Emaillist:componentWillUpdate()');
    }

    getSnapshotBeforeUpdate(prevProps){
        // this.props.keyword : new
        // prevProps.keyword :old
        // console.log(this.props.keyword," - ",prevProps.keyword);
        return prevProps;
    }


    render() {
        console.log("Emaillist:render()");
        console.log(this.getSnapshotBeforeUpdate(this.props.keyword));
        // let emaillist = [];
        // this.props.emails.forEach((element) => 
        //     emaillist.push(<EmailListItem 
        //         name={`${element.firstName}${element.lastName}`}
        //         email = {element.email}/>));
        return (
            <div className="Emaillist">
                <ul>
                    {
                        this.props.emails && this.props.emails
                            .filter((element) =>
                                element.firstName.indexOf(this.props.keyword) != -1 ||
                                element.lastName.indexOf(this.props.keyword) != -1 ||
                                element.email.indexOf(this.props.keyword) != -1)
                            .map((element) => <EmailListItem
                                name={`${element.firstName}${element.lastName}`}
                                email={element.email}
                                key={element.no} />
                            )
                    }
                </ul>
            </div>
        );
    }

    componentDidUpdate(sanpshot,ab) {
        this.getSnapshotBeforeUpdate('abs',this.props.keyword);
        console.log('Emaillist:componentDidUpdate()',sanpshot);
        
    }
}