/** @jsxImportSource theme-ui */
import { useSelector } from "react-redux";
import { Box, Flex, NavLink } from "@theme-ui/components";
import Image from "next/image"

function NavRight() {
    const navigations = useSelector((props) => props.navigation);
    return (
        <Box>
            <Box className="parent" sx={styles.parent}>
                <Box className="Navigation" sx={styles.nav}>
                    {navigations.Navigation1st &&
                        navigations.Navigation1st.map((nave, i) => (
                            <Box key={i}>
                                <NavLink href={nave.url} >{nave.name} </NavLink>
                            </Box>
                        ))}
                </Box>
                <hr sx={styles.hr} />
                <Box className="Navigation" sx={styles.nav}>
                    {navigations.Navigation2nd &&
                        navigations.Navigation2nd.map((nave, e) => (
                            <Box key={e}>
                                <NavLink href={nave.url} >{nave.name} </NavLink>
                            </Box>
                        ))}
                </Box>
            </Box>
            <hr sx={styles.hr} />
            <Flex className="more">
                <NavLink url="/" sx={styles.more}>More</NavLink>
                <Box className="image" sx={styles.Img}>
                    <Image src={navigations.images.Language} width={32} height={32} />
                </Box>
            </Flex>
        </Box>
    )
}

export default NavRight;

const styles = {
    parent: {
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        height: "522px"
    },
    nav: {
        a: {
            fontSize: "16px",
            fontWeight: "text",
            lineHeight: "24px",
            color: "look"
        }
    },
    hr: {
        color: "hr"
    },
    more: {
        mt: "7px"
    },
    Img: {
        m: "0 0 0 auto"
    }
}
