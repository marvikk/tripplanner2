import React, {Component} from 'react'
import { Link } from "react-router";

export default class ButtonLayout extends Component{
  render() {
    return (
      <div>
        <div className="results">
          {this.props.children}
        </div>
        </div>
    )
  }
}
