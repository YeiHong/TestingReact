import { render, screen , fireEvent } from "@testing-library/react"
import Checkbox from "../checkbox"

// Prueba de componente: Cuando el componente se renderiza, el contenido del label, sera por defecto "Inactive"
test("Defaults to Inactive label", () => {
    render(<Checkbox labelActive="Active" labelInactive="Inactive"/>);
    expect(screen.getByLabelText("Inactive")).toBeInTheDocument();
})

// Prueba de componente: Verifica que el _Checkbox_ este desmarcado por defecto
test("Checkbox inactive by default", () => {
    render(<Checkbox labelActive="Active" labelInactive="Inactive" />);
    const cb = screen.getByTestId("cb");
    expect(cb).toBeInTheDocument();
    expect(cb).not.toBeChecked();
})

// Prueba de evento: Cuando se haga clic en el __label__ el estado del __checkbox__ y del texto del __label__ tambien cambian:
test("Checkbox status and label changes when clicked", () => {
    render(<Checkbox labelActive="Active" labelInactive="Inactive" />);
    fireEvent.click(screen.getByLabelText("Inactive"))

    expect(screen.getByLabelText("Active")).toBeInTheDocument();

    const cb = screen.getByTestId("cb");
    expect(cb).toBeInTheDocument();
    expect(cb).toBeChecked();
})

