import React, { Component } from 'react';

const Like = (props) => {
    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";
    return ( 
        <i 
        onClick={props.onClick} 
        className={classes} are-hidden="true" 
        style={{cursor: "pointer"}}
         />
     );
}

export default Like;


// class Like extends Component {
//     state = {  }
//     render() {
//         let classes = "fa fa-heart";
//         if (!this.props.liked) classes += "-o";
//         return <i onClick={this.props.onClick} className={classes} are-hidden="true" style={{cursor: "pointer"}} />;
//     }
// }

// export default Like;

