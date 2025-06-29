// NewsItem.jsx
import React from 'react'
import image from '../assets/image.png'

const NewsItem = ({ url, src, title, description }) => { // Corrected prop name 'desctiption' to 'description'
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block m-3 p-2" style={{ maxWidth: "345px" }}>
      <img src={src ? src : image} className="card-img-top img-responsive" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "No Title"}</h5> {/* Added null check */}
        <p className="card-text">{description ? description.slice(0, 90) : "To read the further details please click on the read more."}</p> {/* Corrected prop, added null check */}
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a> {/* Added target and rel for external links */}
      </div>
    </div>
  )
}

export default NewsItem