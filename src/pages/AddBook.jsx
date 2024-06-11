import React, { useEffect, useState } from "react";
import instance from "../api/instance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
	const [newBook, setNewBook] = useState({
		bo_title: "",
		bo_description: "",
		bo_isborrow: false,
		bo_url: "",
		au_id: null,
	});
	const [authors, setAuthors] = useState([]);

	const navigate = useNavigate();

	const addBook = () => {
		console.log(newBook);
		instance
			.post("/books", newBook)
			.then((response) => {
				toast.success(response.data.message);
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getAuthors = () => {
		instance
			.get("/authors")
			.then((response) => {
				// console.log(response.data.authors);
				setAuthors(response.data.authors);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getAuthors();
	}, []);

	return (
		<div className="addbook_page">
			<div className="form">
				<h2>Ajouter un livre :</h2>
				<div className="input_block">
					<label>Nom du livre:</label>
					<input
						type="text"
						required
						onChange={(e) => {
							setNewBook({ ...newBook, bo_title: e.target.value });
						}}
					/>
				</div>
				<div className="input_block">
					<label>Description:</label>
					<textarea
						onChange={(e) => {
							setNewBook({ ...newBook, bo_description: e.target.value });
						}}
					/>
				</div>
				<div className="input_block">
					<label htmlFor="">Auteur :</label>
					<select
						name=""
						id=""
						onChange={(e) => {
							setNewBook({ ...newBook, au_id: parseInt(e.target.value) });
						}}
					>
						{authors.map((author, id) => {
							return (
								<option value={author.au_id} key={id}>
									{author.au_name}
								</option>
							);
						})}
					</select>
				</div>
				<div className="input_block">
					<label htmlFor="">Url de l'IMG du livre:</label>
					<input
						type="text"
						onChange={(e) => {
							setNewBook({ ...newBook, bo_url: e.target.value });
						}}
					/>
				</div>
				<button
					className="addbook_button"
					onClick={() => {
						addBook();
					}}
				>
					Ajouter un livre
				</button>
			</div>
		</div>
	);
};

export default AddBook;
