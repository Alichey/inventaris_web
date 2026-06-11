import { Box } from "@chakra-ui/react"

const Home = () => {
    return (
        <>
            <Box
                width="100dvw"
                height="80dvh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Text fontSize="3xl" fontWeight="extrabold">
                    Halo Selamat Datang
                </Text>
                <Text fontSize="xl" fontWeight="bold">
                    Ini adalah aplikasi sederhanaku
                </Text>
            </Box>
        </>
    );
};

export default Home;