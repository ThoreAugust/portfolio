import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const Blog = () =>{
    const data = useStaticQuery(graphql`
    query{
        allContentfulBlogPost(sort:{fields:publishedDate, order: DESC}){
          edges{
            node{
              title
              slug
              publishedDate(formatString: "DD.MM.YYYY")
              abstract
            }
          }
        }
      }
    `)
    return(
        <Layout bgColor="#0E4343">
            <Head title="Blog" />
            <div className={blogStyles.container}>
                <h1>My Latest Blog Posts</h1>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge)=> {
                        return(
                            <li className={blogStyles.post} key={edge.node.slug}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.abstract}</p>
                                    <p className={blogStyles.publishedDate}>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    }
                    )
                }
                </ol>
            </div>
        </Layout>
    )
}

export default Blog