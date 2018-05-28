import React from 'react'

export const homeDisplay = ({posts, fetchPostsWithRedux})=>(
    <div>
        <div>
          awesome
          {posts[0].title}
          <button onClick={fetchPostsWithRedux}> fetch stuff</button>
        </div>
    </div>
);
