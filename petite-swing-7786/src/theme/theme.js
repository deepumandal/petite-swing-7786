import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    components : {
        Heading : {
            sx : {
                color : "red"
            }
        }
    },
    style : {
        sx : {
            color : "red"
        }
    }
})