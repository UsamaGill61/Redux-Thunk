import React, { Component } from 'react'
import {connect } from 'react-redux'
import { fetchuser } from '../Actions/Actions'

export class UserHeader extends Component {
    componentDidMount(){
        this.props.fetchuser(this.props.userId);
    }
    render() {
        console.log(this.props.user)
        const user =  this.props.user.find(user => user.id === this.props.userId)
        if(!user){
            return null
        }
      
        return (
            <div>
               {user.name}
                
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return {user: state.users }
}

export default connect(mapStateToProps,{fetchuser})(UserHeader)
