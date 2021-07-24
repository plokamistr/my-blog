import React from "react";
import { Link } from "react-router-dom";

function PostList({ blogs, title }) {
	return (
		<div className="blog-list">
			<h1>{title}</h1>
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<Link to={`/blog/${blog.id}`}>
						<h2>{blog.title}</h2>
						<p>Published by: {blog.author}</p>
					</Link>
				</div>
			))}
		</div>
	);
}

export default PostList;
