/** @jsxImportSource theme-ui */
import { useSelector } from "react-redux";
import { Box, Container, Flex, Heading, Embed, Grid, Paragraph, Link, Image } from "@theme-ui/components";

function PopularNews() {
    const popularNews = useSelector((props) => props.popularNews);
    //console.log(popularNews);
    return (
        <Container as="section" sx={styles.container}>
            <Flex>
                <Box sx={styles.leftContent}>
                    <Flex>
                        <Heading as="h2">Video</Heading>

                    </Flex>
                    <Flex>
                        {popularNews &&
                            popularNews.popularNews.slice(0, 2).map((news, i) => {
                                return (
                                    <Box key={i} sx={styles.videos}>
                                        <Image src={news.media[0]["media-metadata"][2].url} />

                                    </Box>
                                )
                            })}



                        {/* {popularNews.videos &&
                            popularNews.videos.map((videos, i) => (
                                <Box key={i} sx={styles.videos}>
                                    <Embed src={videos.video} />
                                </Box>
                            ))} */}
                    </Flex>
                </Box>
                <Box sx={styles.rightContent}>
                    <Flex>
                        <Heading as="h2" sx={styles.head}>Opinion </Heading>
                        <Box sx={styles.seeAll}><Link href="/">See all</Link></Box>
                    </Flex>
                    <Grid gap={2} columns={[2, null, 2]}>
                        {popularNews &&
                            popularNews.popularNews.slice(0, 4).map((news, i) => (
                                <Box key={i} sx={styles.rightCard}>
                                    <Heading as="h3">{news.title}</Heading>
                                    <Paragraph as="p">{news.abstract}</Paragraph>
                                </Box>
                            ))}



                        {/* {popularNews.Opinions &&
                            popularNews.Opinions.map((option, e) => (
                                <Box key={e} sx={styles.rightCard}>
                                    <Heading as="h3">{option.name}</Heading>
                                    <Paragraph as="p">{option.detail}</Paragraph>
                                </Box>
                            ))} */}
                    </Grid>
                </Box>
            </Flex>
        </Container>
    )
}

export default PopularNews;

const styles = {
    container: {
        p: ["32px 8px 8px 219px"]
    },
    leftContent: {
        flex: ["0 0 58%"],
        flexWrap: "wrap",
        m: 0,
        h2: {
            fontSize: ["16px"],
            fontWeight: 400,
            mb: ["10px"],
        }
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
    videos: {
        flex: "0 0 47%",
        flexWrap: "wrap",
        m: ["0 auto 0 0"],
        div: {
            borderRadius: ["10px"]
        }
    },
    rightContent: {
        flex: ["0 0 40%"],
        flexWrap: "wrap",
        h2: {
            fontSize: ["16px"],
            fontWeight: 400,
            mb: ["10px"],
        }
    },
    rightCard: {
        bg: "highlight",
        borderRadius: ["10px"],
        padding: ["10px"],
        m: ["2px 10px 0 0"],
        h3: {
            fontSize: ["15px"],
            lineHeight: ["19px"],
            fontWeight: ["text"],
            color: "ash",
        },
        p: {
            fontSize: ["14px"],
            fontWeight: "light",
            lineHeight: ["19px"],
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
        }
    }
}