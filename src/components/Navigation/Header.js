/** @jsxImportSource theme-ui */
import { useSelector } from "react-redux";
import { useColorMode } from 'theme-ui';
import { Box, Flex, Input, Button, Link } from "@theme-ui/components";
import Image from "next/image"

import Icons from "utils/Icons";
import ModesButton from "components/ModesButton";

function Header() {
    const oval = useSelector((props) => props.navigation.images);
    const [colorMode, setColorMode] = useColorMode();
    return (
        <Flex className="header" sx={styles.header}>
            <Box as="form" onSubmit={(e) => e.preventDefault()} className="searchArea" sx={styles.searchArea}>
                <Flex className="searchFlex" sx={styles.search}>
                    <Box className="icon">
                        <Button className="button"><Icons icon="bx:bxs-search" /></Button>
                    </Box>
                    <Box className="input">
                        <Input name="username" id="username" mb={3} type="text" placeholder="Search" />
                    </Box>
                </Flex>
            </Box>
            <Box className="logoArea" sx={styles.logoArea}>
                <Link href="/">
                    {colorMode === 'default' &&
                        <Image src={oval.Logo} width={199.91} height={27.67} />
                    }
                    {colorMode !== 'default' &&
                        <Image src={oval.whiteLogo} width={199.91} height={27.67} />
                    }
                </Link>
            </Box>
            <Box className="userArea" sx={styles.userArea}>
                <Image src={oval.User} width={39} height={39} />
            </Box>
            <Box sx={styles.modeButtons}>
                <ModesButton />
            </Box>
        </Flex>
    )
}

export default Header;

const styles = {
    header: {
        bg: "highlight",
        position: "relative",
        pt: ["18px"],
        // alignItems: "center",
    },
    searchArea: {
        flex: ["0 0 28%"],
        flexWrap: "wrap",
        textAlign: "left",
        position: "relative",
        ml: ["15px"]
    },
    search: {
        button: {
            color: "dark",
            fontSize: ["25px"],
            padding: [0],
            margin: [0],
            background: "none",
            position: "absolute",
            top: ["14%"],
            left: ["1%"]
        },
        input: {
            padding: ["8px 0 8px 30px"],
            bg: "background",
            border: "none",
            color: "look"
        }
    },
    logoArea: {
        flex: ["0 0 40%"],
        flexWrap: "wrap",
        textAlign: "center",
    },
    userArea: {
        flex: ["0 0 25%"],
        flexWrap: "wrap",
        textAlign: "right",
    },
    modeButtons: {
        flex: ["0 0 5%"],
        flexWrap: "wrap",
        textAlign: "right",
    }
}
