import { Button } from "../../Button";
import { Nav } from "./styles";
import { useHomePage } from "../../../providers/HomePage";

export const Menu = () => {
    const { handleFilter } = useHomePage();
    return (
        <Nav>
            <Button onClick={() => handleFilter("Todes")}>Todes</Button>
            <Button onClick={() => handleFilter("Alien")}>Aliens</Button>
            <Button onClick={() => handleFilter("Human")}>Humanes</Button>
        </Nav>
    )
}