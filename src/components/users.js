import React, {Component} from 'react';
import { connect } from 'react-redux';

class Users extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
  render(){
    return <div>{this.props.list.map((item, i)=><div key={i}><div>title:{item.title}</div><div>pages:{item.pages}</div></div>)}</div>
  }

}

function mapStateToProps(state){
        return {
            list:state.list
        };
    }

export default connect(mapStateToProps)(Users)
