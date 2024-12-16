import React, { useState } from 'react';


const Weather = ({posts}) => {

    const [searchTerm, setSearchTerm] = useState(''); // State for search input

    // Filter posts based on the search term
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className='card'>
      <div className="card-header">
        <h3>Weather </h3>
      </div>
      <div className="card-body">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

        <div>
           
        <div>
      <h3>Post List</h3>
      <ul>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </ul>
    </div>


    </div>
    </div>
    </div>
  )
}

export default Weather