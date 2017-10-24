import React, {Component} from 'react'

export default class SearchLayout extends Component{
  render() {
    return (
      <div className="row">
  						<div className="col-md-12">
                <div className="results">
                  {this.props.children}
                </div>
  						</div>
  					</div>
    )
  }
}
