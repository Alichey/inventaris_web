import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import person from "../assets/icons/kucing-menjulur-kucing-lidah.png"

const Profil = () => {
    const [nama, setNama] = useState("");

    useEffect(() => {
        setNama(localStorage.getItem("namaLS"));
    }, []);
    return (
        <>
            <Heading size="2xl" textAlign="center">
                Profil Saya
            </Heading>
            <Box display="flex" flexDirection="row" justifyContent="center">
                <image src={person} width="30dvw"/>
            </Box>
            <Text fontWeight="bold" textAlign="center" padding="10px">
                Nama Saya {nama}
            </Text>
            <Text fontWeight="bold" textAlign="center" padding="10px">
                Saya adalah seorang programer amatir yang suka belajar
            </Text>
        </>
    );
};

export default Profil;