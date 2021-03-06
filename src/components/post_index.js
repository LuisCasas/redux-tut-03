import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostIndex extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        console.log(this.props);

        return _.map(this.props.posts, post => {
            return(
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render(){
        
        return (
            <div>
                <h3>Post</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
  }

  function mapStateToProps(state){
      return {post: state.posts };
  }

  export default connect(null, {fetchPosts})(PostIndex);