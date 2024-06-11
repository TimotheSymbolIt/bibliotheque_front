import React from "react";
import "../styles/components/Book.css";

const Book = ({ book, action }) => {
	return (
		<div className="book_offset">
			<div className="book">
				{book.bo_url ? (
					<div className="container_image">
						<img
							src={book.bo_url}
							alt={`Première de couverture du livre ${book.bo_title}`}
						/>
					</div>
				) : (
					<p>Aucune image disponible</p>
				)}
				<p>
					<span className="bold">Titre:</span> {book.bo_title}
				</p>
				<p>
					<span className="bold">Auteur:</span> {book.author.au_name}
				</p>
				<p>
					<span className="bold">Description:</span>{" "}
					{book.bo_description
						? book.bo_description
						: "Description du livre indisponible"}
				</p>

				{book.bo_isborrow ? (
					<span className="already_borrowed">Déjà Emprunté !</span>
				) : (
					<button
						className="borrow_button"
						onClick={() => {
							action(book.bo_id);
						}}
					>
						Emprunter
					</button>
				)}
			</div>
		</div>
	);
};

export default Book;
