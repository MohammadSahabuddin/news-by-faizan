/** @jsxImportSource theme-ui */
import { useSelector } from "react-redux";
import { Box, Container, Flex, Grid, Heading, Paragraph } from "@theme-ui/components";

import Icons from "utils/Icons";

function Headlines() {
    const headline = useSelector((props) => props.headline);
    return (
        <Container as="section" sx={styles.container}>
            <Grid gap={3} columns={[1, null, 5]} className="grid">
                {headline.cards &&
                    headline.cards.map((card, i) => (
                        <Box key={i} className="gridBox" sx={styles.cards}>
                            {card.name &&
                                <Heading as="h2">{card.name}</Heading>
                            }
                            {card.detail &&
                                <Paragraph as="p">{card.detail}</Paragraph>
                            }
                            {card.city &&
                                <Heading as="h3">{card.city}</Heading>
                            }
                            {card.date &&
                                <Heading as="h3">{card.date}</Heading>
                            }
                            {card.wether &&
                                <Heading as="h3">{card.wether}</Heading>
                            }
                            {card.exemption &&
                                card.exemption.map((percentages, e) => (
                                    <Flex key={e} sx={styles.exemption}>
                                        <Box sx={styles.firstHeading}>
                                            <Heading as="h4">{percentages.topic}</Heading>
                                        </Box>
                                        <Box sx={styles.secondHeading}>
                                            <Heading as="h5">{percentages.percentage}</Heading>
                                        </Box>
                                        <Box sx={styles.icon}>
                                            <Icons icon={percentages.icon} />
                                        </Box>
                                    </Flex>
                                ))}
                        </Box>
                    ))}
            </Grid>
        </Container>
    )
}

export default Headlines;

const styles = {
    container: {
        p: ["100px 8px 8px 219px"],
    },
    cards: {
        color: "special",
        h2: {
            fontSize: ["16.06px"],
            lineHeight: ["20px"],
            mb: ["6px"]
        },
        h3: {
            fontSize: ["12px"],
            lineHeight: ["15px"]
        },
        h4: {
            fontSize: ["16px"],
            lineHeight: ["20px"],
        },
        p: {
            fontSize: ["12px"],
            lineHeight: ["15px"],
            width: ["83%"],
            mt: ["26px"]
        },
        padding: ["10px 15px"],
        borderRadius: ["10px"],
        "&:nth-of-type(1)": {
            background: 'linear-gradient(-230deg,#20BDFF,#A5FECB )',
        },
        "&:nth-of-type(2)": {
            background: 'linear-gradient(-230deg,#FFA751,#FFE259 )',
        },
        "&:nth-of-type(3)": {
            background: 'linear-gradient(-230deg,#44A08D,#093637 )',
            p: {
                m: [0]
            }
        },
        "&:nth-of-type(4)": {
            background: 'linear-gradient(-230deg,#FF512F,#DD2476 )',
            h2: {
                mb: ["25px"]
            }
        },
        "&:nth-of-type(5)": {
            background: 'linear-gradient(-230deg,#1C1C1C,#0F0F0F )',
            pt: ["20px"]
        }
    },
    exemption: {
        h5: {
            color: "pest"
        },
        svg: {
            color: "pest"
        }
    },
    firstHeading: {
        flex: ["0 0 50%"],
        flexWrap: "wrap"
    },
    secondHeading: {
        flex: ["0 0 30%"],
        flexWrap: "wrap"
    },
    icon: {
        flex: ["0 0 20%"],
        flexWrap: "wrap",
        mt: ["6px"]
    }
}
