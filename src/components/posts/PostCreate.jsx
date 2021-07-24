import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PostCreate() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("George");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	function handleSubmit(e) {
		e.preventDefault();
		const blog = { title, body, author };
		setIsPending(true);

		fetch("http://localhost:8000/blog", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("New Post Added");
			setIsPending(false);
			history.push("/");
		});
	}

	return (
		<div className="create">
			<h2>Add a new Post</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title: </label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label>Blog Body: </label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>

				<label>Blog Author: </label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="George">George</option>
					<option value="Nick">Nick</option>
				</select>

				{!isPending ? (
					<button type="submit">Publish</button>
				) : (
					<button disable type="submit">
						Adding Post....
					</button>
				)}
			</form>
		</div>
	);
}

export default PostCreate;
