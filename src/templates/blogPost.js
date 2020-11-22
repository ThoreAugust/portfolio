import React from 'react';
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
import postStyles from './blogPost.module.scss'

export const query = graphql`
  query($slug:String!){
    contentfulBlogPost(slug: {eq: $slug}){
      title
      publishedDate(formatString: "DD.MM.YYYY")
      body{
        json
      }
    }
  }
`

const BlogComponent = (props) =>{
  const options = {
    renderNode : {
      "embedded-asset-block" : (node) =>{
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }
    return(
        <Layout bgColor="#346E6E">
            <Head title={props.data.contentfulBlogPost.title} />
            <div className={postStyles.container}>

            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p className={postStyles.publishedDate}>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            </div>
        </Layout>
    )
}

export default BlogComponent