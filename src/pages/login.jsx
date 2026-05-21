import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardRoot,
    CardTitle,
    Center,
    Image,
    Input,
    Text,
} from "@chakra-ui/react";

import logo from "../assets/hero.png";
const Login = () => {
    return (
        <>
            <Box 
                backgroundColor = "teal"
                width = "100dvw"
                height = "100dvh"
                display= "flex"
                flexDirection= "row"
                justifyContent="center"
                alignItems="center"
            >
                <CardRoot borderRadius = "20px" backgroundColor = "white" color = "black">
                    <CardHeader>
                        <CardTitle>
                            <Center>
                                <Image src = {logo} width = "100px" />
                            </Center>
                            <Text textAlign = "center">My Inventory</Text>
                        </CardTitle>
                        <CardBody gapY = "10px">
                            <Input placeholder = "Username" type = "text"/>
                            <Input placeholder = "Password" type = "password"/>
                            <Button backgroundColor="teal" color="white" borderRadius = "10px">
                                <Text>LOGIN</Text>
                            </Button>
                        </CardBody>
                    </CardHeader>
                </CardRoot>
            </Box>
        </>
    );
};

export default Login;