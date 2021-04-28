import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg", eq: "jpeg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`
const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  console.log(data)

  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const pathToImage = getImage(image)
        return (
          <article key={index} className="item">
            <GatsbyImage
              //   image={image.childImageSharp.gatsbyImageData}
              image={pathToImage}
              alt={image.name}
              className="gallery-img"
            />
            <p>{image.name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`
export default Gallery
