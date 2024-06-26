/**
 * Probar el comportamiento de un componente denominado Like. Este componente está conformado por: 
 * (i) un párrafo que muestra el número de likes de una publicación en el formato "Likes: 0"; 
 * (ii) un botón "Likes" que incrementa en 1 el número de likes;
 * (iii) un botón "Dislike" que decrementa en 1 el número de likes.
 * 
 * Incluya, en una suite, las siguientes pruebas:
 * 1. Que por defecto, el componente muestra en el párrafo el valor "Likes: 0".
 * 2. Que cuando se hace clic en el botón Like, el número de likes se incremente en uno.
 * 3. Que cuando se hace clic en el botón Dislike el número de likes se decrementa en uno.
 */

import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../like";

describe("like", function () {

    it("El componente muestra en el parrafo el valor 'Likes: 0'.", function () {
        render(<Like />)
        expect(screen.getByText("Likes: 0")).toBeInTheDocument();
    })

    it("Cuando se hace clic en el boton Like, el numero de likes se incrementa en uno.", function () {
        render(<Like />)
        const likeButton = screen.getByText("Like")
        fireEvent.click(likeButton);
        expect(screen.getByText("Likes: 1")).toBeInTheDocument();
    })

    it("Cuando se hace clic en el boton Dislike, el numero de likes se decrementa en uno.", function () {
        render(<Like />)
        const dislikeButton = screen.getByText("Dislike")
        fireEvent.click(dislikeButton);
        expect(screen.getByText("Likes: -1")).toBeInTheDocument();
    })
});