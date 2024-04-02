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

import { render, screen, fireEvent } from "@testing-library/react"