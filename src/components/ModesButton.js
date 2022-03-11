/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui'
import { Box, Button } from "@theme-ui/components";

import Icons from 'utils/Icons';

function ModesButton() {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <Box>
            <Button
                onClick={(e) => {
                    setColorMode(colorMode === 'default' ? 'dark' : 'default')
                }}
                sx={styles.button}
            >

                {colorMode === 'default' &&
                    <Icons icon="bi:moon-fill" />
                }
                {colorMode !== 'default' &&
                    <Icons icon="heroicons-solid:sun" />
                }
            </Button>
        </Box>
    )
}

export default ModesButton;

const styles = {
    button: {
        bg: "transparent",
        color: "text",
        cursor: "pointer"
    }
}