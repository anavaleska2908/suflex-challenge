import { Button } from "../../Button";
import { Nav } from "./styles";
import {useDashboardPage} from "../../../providers/DashboardPage";

export const Menu = () => {
    const { setFilter } = useDashboardPage();
    return (
        <Nav>
            <Button onClick={() => setFilter("Todes")}>Todes</Button>
            <Button onClick={() => setFilter("Alien")}>Aliens</Button>
            <Button onClick={() => setFilter("Human")}>Humanes</Button>
            <Button onClick={() => setFilter("Favorites")}>Favorites</Button>
        </Nav>
    )
}