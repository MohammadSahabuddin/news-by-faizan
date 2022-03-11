/** @jsxImportSource theme-ui */
import { useSelector } from "react-redux";
import {
    Box, Container, Flex, Heading, Paragraph
} from "@theme-ui/components";
import Link from "next/link"
import Image from "next/image"

function Today() {
    const today = useSelector((props) => props.today);
    // console.log(today.todayNews[0].multimedia[0].url);
    return (
        <Container as="section" sx={styles.container}>
            <Flex>
                <Box className="left" sx={styles.leftContent}>
                    <Heading as="h4">Today headlines</Heading>
                    <Box>
                        <Box>
                            <Image src={today.todayNews[0].multimedia[0].url} width={678} height={370} />
                        </Box>
                        <Heading as="h2">{today.todayNews[0].title} </Heading>
                        <Paragraph as="p">{today.todayNews[0].abstract} </Paragraph>
                    </Box>
                </Box>
                {/* <Box className="left" sx={styles.leftContent}>
                    <Heading as="h4">Today headlines</Heading>
                    <Box>
                        <Image src={today.image} width={678} height={292} />
                    </Box>
                    <Heading as="h2">{today.headline} </Heading>
                    <Paragraph as="p">{today.details} </Paragraph>
                </Box> */}
                <Box className="right" sx={styles.rightContent}>
                    <Flex>
                        <Box sx={styles.head}><Heading as="h4">Business</Heading></Box>
                        <Box sx={styles.seeAll}><Link href="/">See all</Link></Box>
                    </Flex>
                    {today.todayNews &&
                        today.todayNews.slice(0, 4).map((right, i) => (
                            <Box key={i}>
                                <Flex >
                                    <Box sx={styles.image}>
                                        <Image src={right.multimedia[1].url} width={93} height={100} />
                                    </Box>
                                    <Box sx={styles.text}>
                                        <Link href="/">
                                            <Heading as="h5">{right.title} </Heading>
                                        </Link>
                                        <Paragraph as="p">{right.abstract} </Paragraph>
                                    </Box>
                                </Flex>
                                <hr sx={styles.hr} />
                            </Box>
                        ))}
                </Box>
            </Flex>
        </Container>
    )
}

export default Today;

const styles = {
    container: {
        p: ["50px 8px 0 219px"]
    },
    leftContent: {
        flex: "0 0 62%",
        flexWrap: "wrap",
        h4: {
            fontSize: ["16px"],
            mb: ["10px"],
            fontWeight: 400
        },
        h2: {
            fontSize: ["24px"],
            fontWeight: 400,
            m: ["25px 0 8px"]
        },
        p: {
            fontSize: ["16px"],
            fontWeight: 300,
        },
    },
    rightContent: {
        flex: "0 0 38%",
        flexWrap: "wrap",
        h4: {
            fontSize: ["16px"],
            mb: ["10px"],
            fontWeight: 400
        },
    },
    head: {
        flex: "0 0 50%",
        flexWrap: "wrap",
    },
    seeAll: {
        flex: "0 0 50%",
        flexWrap: "wrap",
        textAlign: "end",
        a: {
            textDecoration: "none",
            color: "text"
        }
    },
    image: {
        flex: "0 0 25%",
        flexWrap: "wrap",
    },
    text: {
        flex: "0 0 75%",
        flexWrap: "wrap",
        a: {
            textDecoration: "none",
        },
        h5: {
            fontSize: ["15px"],
            color: "ash",
            fontWeight: 400,
            cursor: "pointer"
        },
        p: {
            fontSize: ["15px"],
            fontWeight: "light",
            lineHeight: ["20px"],
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
        }
    },
    hr: {
        color: "hr",
    }
}
