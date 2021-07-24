import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import loading from "../img/loading.gif";

function PostDetails() {
	const { id } = useParams();
	const {
		data: blog,
		isLoading,
		error,
	} = useFetch("http://localhost:8000/blog/" + id);
	const history = useHistory();

	function handleClick() {
		fetch("http://localhost:8000/blog/" + blog.id, {
			method: "DELETE",
		}).then(() => {
			history.push("/");
		});
	}

	return (
		<div className="blog-details">
			{isLoading ? (
				<div style={{ textAlign: "center" }}>
					<img style={{ width: "120px" }} src={loading} />
					<h1>LOADING ....</h1>
					{error && <h3 style={{ color: "red" }}>{error}</h3>}
				</div>
			) : (
				<article>
					<Link className="back-blog" to="/blog">
						Go back to Blog
					</Link>
					<h2>{blog.title}</h2>
					<p>Published by: {blog.author}</p>
					<hr />
					<div>{blog.body}</div>
					<button onClick={handleClick}>Delete this post</button>
				</article>
			)}
		</div>
	);
}

export default PostDetails;
