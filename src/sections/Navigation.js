/** @jsxImportSource theme-ui */
import { Box, Container } from "@theme-ui/components";

import NavRight from "components/Navigation/NavRight";
import Header from "components/Navigation/Header";

function Navigation() {
    return (
        <Container as="section" sx={styles.container}>
            <Box sx={styles.header}>
                <Header />
            </Box>
            <Box sx={styles.navRight}>
                <NavRight />
            </Box>
        </Container>
    )
}

export default Navigation;

const styles = {
    container: {
        p: [0],
        color: "look",
        position: "fixed",
        zIndex: "9999"
    },
    header: {
        position: "relative"
    },
    navRight: {
        position: "fixed",
        backgroundColor: "highlight",
        top: ["11%"],
        left: [0],
        height: ["100%"],
        width: ["15.5%"],
        p: ["0 15px"]
    },
}
