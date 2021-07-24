import React from "react";
import PostList from "../../components/posts/PostList";
import useFetch from "../../hooks/useFetch";
import loading from "../img/loading.gif";

function Home() {
	const {
		data: blogs,
		isLoading,
		error,
	} = useFetch("http://localhost:8000/blog");

	return (
		<div className="home">
			{isLoading ? (
				<div style={{ textAlign: "center" }}>
					<img style={{ width: "120px" }} src={loading} />
					<h1>LOADING ....</h1>
					{error && <h3 style={{ color: "red" }}>{error}</h3>}
				</div>
			) : (
				<PostList blogs={blogs} title="All Blogs" />
			)}
			{/*<PostList blogs={blogs.filter( blog => blog.author === "George")} title="George's Blogs" handleDel={handleDel}/> */}
		</div>
	);
}

export default Home;
