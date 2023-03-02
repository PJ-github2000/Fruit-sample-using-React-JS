/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {countBanana: 0, countMango: 0}

  eatMango = () => {
    this.setState(value => ({countMango: value.countMango + 1}))
  }

  eatBanana = () => {
    this.setState(value => ({countBanana: value.countBanana + 1}))
  }

  render() {
    const {countBanana, countMango} = this.state
    return (
      <div className="bg-container">
        <div className="lower-box">
          <h1 className="count-title">
            Bob ate <span className="count">{countMango}</span> mangoes
            <span className="count"> {countBanana} </span>
            bananas
          </h1>
          <div className="fruit-box">
            <div className="fruit-details">
              <img
                className="mango-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="mango-button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-details">
              <img
                className="mango-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="mango-button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
