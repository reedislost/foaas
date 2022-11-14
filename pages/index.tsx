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
  Text,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";

export default function Home() {
  const [response, setResponse] = useState<any>();
  const [from, setFrom] = useState<any>("");
  const [to, setTo] = useState<any>("");
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

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
    if (response) {
      setValue(response.message + response.subtitle);
    }
  }, [response]);

  return (
    <div className={styles.container}>
      <Head>
        <title>FOAAS</title>
        <meta name="description" content="frig off" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center mt={24} flexDirection={"column"}>
        <VStack bg="gray.200" p={5} boxShadow="lg" borderRadius={"lg"}>
          <HStack>
            <Text>FE built by reed, uses</Text>
            <Link href={"https://foaas.com/"} target="_blank">
              <HStack>
                <Text textDecoration={"underline"}>foaas api</Text>
                <ExternalLinkIcon />
              </HStack>
            </Link>
          </HStack>

          <Link href="https://github.com/reedislost/foaas" target={"_blank"}>
            <HStack>
              <Text>send a PR, idc what u do</Text>
              <ExternalLinkIcon />
            </HStack>
          </Link>

          <Link
            href={"https://app.splitbee.io/public/foaas.vercel.app"}
            target="_blank"
          >
            <HStack>
              {" "}
              <Text>analytics</Text>
              <ExternalLinkIcon />
            </HStack>
          </Link>
        </VStack>
        <VStack mt={12} p={5}>
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
        {response && (
          <Box
            mt={12}
            mb={12}
            fontSize={"2xl"}
            maxW={"500px"}
            bg="gray.200"
            p={5}
            borderRadius={"lg"}
            boxShadow={"lg"}
          >
            <Center>
              <Button onClick={onCopy}>
                {hasCopied ? <Text>copied</Text> : <CopyIcon />}
              </Button>
            </Center>
            <Text>
              {response?.message} {response?.subtitle}
            </Text>
          </Box>
        )}
      </Center>
    </div>
  );
}
