import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  VStack,
  InputLeftAddon,
  useClipboard,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [response, setResponse] = useState<any>();
  const [from, setFrom] = useState<any>("");
  const [to, setTo] = useState<any>("");
  const { onCopy, hasCopied } = useClipboard("");
  const [value, setValue] = useState<any>("");

  const baseUrl = "https://foaas.com";

  const endpoints = [
    `${baseUrl}/bday/${to}/${from}`,
    `${baseUrl}/bus/${to}/${from}`,
    `${baseUrl}/blackadder/${to}/${from}`,
    `${baseUrl}/bm/${to}/${from}`,
    `${baseUrl}/chainsaw/${to}/${from}`,
    `${baseUrl}/cocksplat/${to}/${from}`,
    `${baseUrl}/deraadt/${to}/${from}`,
    `${baseUrl}/donut/${to}/${from}`,
    `${baseUrl}/equity/${to}/${from}`,
    `${baseUrl}/fts/${to}/${from}`,
    `${baseUrl}/gfy/${to}/${from}`,
    `${baseUrl}/legend/${to}/${from}`,
    `${baseUrl}/linus/${to}/${from}`,
    `${baseUrl}/look/${to}/${from}`,
    `${baseUrl}/madison/${to}/${from}`,
    `${baseUrl}/nugget/${to}/${from}`,
    `${baseUrl}/off/${to}/${from}`,
    `${baseUrl}/outside/${to}/${from}`,
    `${baseUrl}/problem/${to}/${from}`,
    `${baseUrl}/rockstar/${to}/${from}`,
    `${baseUrl}/shakespeare/${to}/${from}`,
    `${baseUrl}/shutup/${to}/${from}`,
    `${baseUrl}/think/${to}/${from}`,
    `${baseUrl}/thinking/${to}/${from}`,
    `${baseUrl}/thumbs/${to}/${from}`,
    `${baseUrl}/understand/${to}/${from}`,
    `${baseUrl}/xmas/${to}/${from}`,
    `${baseUrl}/yoda/${to}/${from}`,
    `${baseUrl}/you/${to}/${from}`,
  ];
  const number = Math.floor(Math.random() * 28);
  console.log(number);

  const frig = async () => {
    const response = await fetch(endpoints[number], {
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
    });
    setResponse(await response.json());
  };

  useEffect(() => {
    setValue(response.message);
  }, [response]);

  return (
    <div className={styles.container}>
      <Head>
        <title>FOAAS</title>
        <meta name="description" content="frig off" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center mt={24} flexDirection={"column"}>
        <VStack>
          <InputGroup>
            <InputLeftAddon>From</InputLeftAddon>
            <Input onChange={(e) => setFrom(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon>To</InputLeftAddon>
            <Input onChange={(e) => setTo(e.target.value)} />
          </InputGroup>

          <Button onClick={frig}>frig off</Button>
        </VStack>

        <Box mt={24} fontSize={"2xl"} maxW={"500px"}>
          {response?.message} {response?.subtitle}
        </Box>
      </Center>
    </div>
  );
}
