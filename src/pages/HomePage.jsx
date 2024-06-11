import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import instance from "../api/instance";
import Book from "../components/Book";
import "../styles/pages/HomePage.css";
import { toast } from "react-toastify";

const HomePage = () => {
	const [books, setBooks] = useState([]);
	const [refresh, setRefresh] = useState(false);

	const getAllBooks = () => {
		instance
			.get("/books")
			.then((response) => {
				setBooks(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const borrowABook = (bookId) => {
		instance
			.patch(`/books/borrow-book/${bookId}`)
			.then((response) => {
				toast.success(response.data.message);
				setRefresh(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getAllBooks();
		setRefresh(false);
	}, [refresh]);

	return (
		<div className="">
			<Navbar />
			<div className="homepage_body">
				<h2>Livres disponibles:</h2>
				<div className="books">
					{books.length > 0 ? (
						books.map((livre, id) => {
							return <Book key={id} book={livre} action={borrowABook} />;
						})
					) : (
						<p>Il n'y aucun livre dans cette bibliothèque</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
