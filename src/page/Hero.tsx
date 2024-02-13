import { Group, Stack, Title, Text, Space, Code, Accordion, Anchor, Paper, Tooltip, Center, Flex, Image } from '@mantine/core';
import { PersonalIcons } from "../components/PersonalIcons";
import { MantineLogo } from "@mantinex/mantine-logo";
import React from "react";

export const Hero = () => {
    return (
        <Stack justify="space-between" gap={0}>
            <Stack gap={0} align="center" w="100%">
                <Space h="xl" />
                <Stack align="center">
                    <Title>
                        dennis
                    </Title>
                    <PersonalIcons />
                    <Code>
                        {"{love && hate && <Relationship with=\"webDev\" />}"}
                    </Code>
                </Stack>

                <Space h="xl" />

                <Stack>
                    <Text>
                        Hi! I'm
                        {" "}
                        <Text
                            span
                            fw={900}
                            variant="gradient"
                            gradient={{ from: 'blue.4', to: 'indigo.3', deg: 90 }}
                        >
                            deniz
                        </Text>
                        {" "}
                        <Text span c="dimmed">
                            (turkish for sea)
                        </Text>
                        , known as
                        {" "}
                        <Text
                            span
                            fw={900}
                            variant="gradient"
                            gradient={{ from: 'blue.4', to: 'indigo.3', deg: 90 }}
                        >
                            dennis
                        </Text>
                        {" "}
                        online.
                        {" "}
                        <Tooltip label="mrow~" position="right" withArrow>
                            <Text
                                span
                                c="blue"
                                fw="bolder"
                            >
                                :3
                            </Text>
                        </Tooltip>
                    </Text>
                    <Text>
                        I call myself a <Text span c="indigo">full stack developer</Text> since I can do both frontend and backend
                        <Text>
                            ...but I mainly love working on backends.
                        </Text>
                    </Text>
                    <Text>
                        I only do frontend because
                        {"   "}
                        <Anchor
                            href="https://mantine.dev/"
                            target="_blank"
                        >
                            <MantineLogo size={"1em"} style={{ alignSelf: "center" }} type="mark" />
                            {" "}
                            Mantine
                        </Anchor> exists
                        {" "}
                        <Text span c="dimmed">(best UI lib ever btw)</Text>
                    </Text>
                    <Group gap={"xs"} justify="center">
                        <Text>My timezone is</Text>
                        {" "}
                        <Tooltip label="or, UTC+3" withArrow>
                            <Text span fw="bold">
                                GMT+3
                            </Text>
                        </Tooltip>
                        {" "}
                        <Text>and I live in</Text>
                        {" "}
                        <Text span fw="bold">
                            Istanbul, Turkey
                        </Text>
                        <Image
                            src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f9-1f1f7.svg"
                            height="22"
                            width="100"
                            fit="contain"
                            style={{
                                display: "inline"
                            }}
                        />
                    </Group>
                </Stack>

            </Stack>
        </Stack>
    );
};
