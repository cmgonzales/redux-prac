import React, { Component } from 'react'
import Proptypes from 'prop-types'
import { connect } from 'react-redux';
import {fetchPost} from '../actions/postActions'

class post extends Component {

    componentWillMount(){
        this.props.fetchPost();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.post.unshift(nextProps.newPost)
        }
    }

    render(){

        const postItems = this.props.post.map(posts => (<div key = {posts.id}>
            <h3>{posts.title}</h3>
            <p>{posts.body}</p>
        </div>
        ));
    return (
        <div>
            <h1>Post</h1>
            {postItems}
        </div>
    )
    }
}

post.propTypes = {
    fetchPost: Proptypes.func.isRequired,
    post: Proptypes.array.isRequired,
    newPost: Proptypes.object
}

const mapStateToProps = state => ({
    post: state.post.items,
    newPost: state.post.item
})

export default connect(mapStateToProps, {fetchPost})(post)
