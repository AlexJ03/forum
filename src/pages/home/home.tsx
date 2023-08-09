import { observer } from "mobx-react-lite";
import { Container } from "@mui/material";
import Nav from "../../components/nav/Nav";

const Home = observer( () => {

    return (
        <Container maxWidth="xl" sx={{ paddingTop: "30px" }}>
            <Nav />
        </Container>
    );
} );

export default Home;