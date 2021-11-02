import React, { Component } from 'react'
import ColorShape from './ColorShape'
class RandomColor extends Component {
    state = {
        colors: 'green'
    };

    handleColor() {
        const colorList = ['#eb5234', '#eba834', '#cdeb34', '#42f5a7', '#42f5f5', '#4293f5', '#8442f5', '#d442f5', '#f54287', '#f54242', '#f5ec42', '#4542f5', '#f57842', '#f5ce42'];
        const randomNum = Math.ceil(Math.random() * colorList.length);
      

        return colorList[randomNum];
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ colors: this.handleColor() })
        }, 500)
    }

    render() { 
        const { colors } = this.state;
        return (

        <div>
            <ColorShape colors = { colors }/>
        </div>

        )
    }

}
 
export default RandomColor;