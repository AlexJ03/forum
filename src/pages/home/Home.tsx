import { observer } from "mobx-react-lite";
import { Box, Container } from "@mui/material";
import { Nav } from "@components-nav";
import mobx from "@mobx";
import { CategoriesMap } from "@components-categories";
import { UsersMap } from "@components-users";

export const Home = observer( () => {

    return (
        <Container maxWidth="lg" sx={{ paddingTop: "30px" }}>
            <Nav />

            <Box>
                { mobx.toggleHome.value === "Категории"
                    ? mobx.categories.getCategories() && <CategoriesMap/>
                    : mobx.userData.getUsers() && <UsersMap users={mobx.userData.getUsers()} />
                }
            </Box>

        </Container>
    );
} );