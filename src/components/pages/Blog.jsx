import React from "react";
import PostList from "../posts/PostList";
import useFetch from "../../hooks/useFetch";
import loading from "../img/loading.gif";

function Blog() {
	const {
		data: blog,
		isLoading,
		error,
	} = useFetch("http://localhost:8000/blog");

	return (
		<div className="blog">
			<h2>Blog</h2>
			<p>Here is the list of all our posts.</p>
			{isLoading ? (
				<div style={{ textAlign: "center" }}>
					<img style={{ width: "120px" }} src={loading} />
					<h1>LOADING ....</h1>
					{error && <h3 style={{ color: "red" }}>{error}</h3>}
				</div>
			) : (
				<PostList blogs={blog} />
			)}
		</div>
	);
}

export default Blog;
