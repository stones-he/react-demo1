import React, { Component } from 'react'

import BlogDetail from '../BlogDetail'

export default class BlogList extends Component {
    
    render() {
        const { blogList , isLoading} = this.props
        return (
            isLoading
            ?
            <div>loading...</div>
            :
            <ul>
                {
                    blogList.map(blog => {
                        return (
                            <BlogDetail key={blog.id} {...blog} />
                        )
                    })
                }
            </ul>
        )
    }
}
