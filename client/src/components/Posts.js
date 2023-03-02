import React from "react";

const Posts = ({ posts }) => {
  return (
    <>
      <h1 className="text-start">Posts</h1>

      <div className="row m-1">
        <div className="col m-1">
          {posts.map((post, index) => (
            <div className="card m-1" key={index}>
              <div className="card-header text-start">{post.createdAt}</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h5 className="text-start">{post.title}</h5>
                  <p className="text-start">{post.content}</p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
