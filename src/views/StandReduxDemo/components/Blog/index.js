import React, { Component } from 'react'
import { connect } from 'react-redux'
import BlogList from './BlogList'
import {fetchBlogList} from '../../actions/blog'

 class Blog extends Component {
    componentDidMount() {
        this.props.fetchBlogList()
    }
    render() {
        return (
            <div>
                <BlogList {...this.props}/>
            </div>
        )
    }
}
const  mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        blogList: state.blog.listData,
        isLoading: state.blog.isLoading
    }
}
export default connect(mapStateToProps,{fetchBlogList})(Blog) 