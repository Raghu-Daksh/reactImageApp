import React from "react";
class Image extends React.Component{

    render(){
        return(
            <img src={this.props.src}  width='50%' height="50%" />
        )
    }
}

export default  Image;