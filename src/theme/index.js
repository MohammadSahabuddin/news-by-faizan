export default {
    fonts: {
        body: "'Open Sans', sans-serif",
        heading: "'Source Sans Pro', sans-serif",
    },
    fontWeights: {
        text: 400,
        body: 500,
        heading: 600,
        bold: 700,
        light: 300
    },
    config: {
        initialColorModeName: 'light',
    },
    colors: {
        text: '#000000', //black
        background: "#F7F8F9",
        primary: '#44A08D', //green
        heading: "#FF512F", //red
        secondary: "#FFE259", //yellow
        back: "#0F0F0F", //light black
        hr: "#D6E0E714",
        blue: "#20BDFF",//gradient
        dark: "#8E8E8E",
        darker: "#D8D8D8",
        look: "#707070",
        pest: "#6ECA95",
        highlight: "#fff",
        special: "#fff",
        ash: "#414E5B",
        modes: {
            dark: {
                text: '#fff',
                background: '#1C1E1F',
                look: "#979797",
                highlight: "#232526"
            }
        },
    },
    text: {
        caps: {
            textTransform: 'capitalize',
            letterSpacing: '0.1em',
            lineHeight: "24px",
            fontWeight: "text"
        },
    },
    buttons: {
        primary: {
            color: 'white',
            bg: 'secondary',
        },
    },
    lineHeights: {
        body: "24px",
        heading: "24px",
    },
    styles: {
        root: {
            p: 0,
            m: 0,
            cursor: 'default',
            position: 'relative',
            overflowX: "hidden"
        },
    },
    //breakpoints: ['361px', '376px', '415px', '481px', '769px', '801px', '1025px', '1221px', '1281px', '1365px'],
}
