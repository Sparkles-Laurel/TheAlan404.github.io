import { Box, Group, Image, Stack, Text } from "@mantine/core";
import { useFetch } from "@mantine/hooks";
import { Link } from "../../components/misc/Link";
import { IconBrandDiscord } from "@tabler/icons-react";
import { useEffect } from "react";
import { OnekoInitialPosition } from "../../features/oneko/OnekoInitialPosition";

const GUILD_ID = "1197520507617153064";
const API_URL = `https://discord.com/api/guilds/${GUILD_ID}/widget.json`;
export const DiscordSection = () => {
    const {
        data,
        loading,
        refetch,
    } = useFetch<{ presence_count: number; instant_invite: string; }>(API_URL, {
        autoInvoke: true,
    });

    useEffect(() => {
        let i = setInterval(() => refetch(), 60 * 1000);
        return () => clearInterval(i);
    }, []);

    return (
        <Group justify="space-between" w="100%" ta="end">
            <Group align="center">
                {/* <Stack w="32px" h="32px" justify="center">
                    <OnekoInitialPosition />
                </Stack>
                <Stack gap={0} ta="start">
                    <Text c="dimmed">← double click</Text>
                    <Text c="dimmed" fz="xs">(custom implementation)</Text>
                </Stack> */}
                <Stack gap={0} ta="start">
                    <Text c="dimmed" fs="italic">oneko is on her way back</Text>
                    <Text c="dimmed" fz="xs">(she'll be back VERY soon:tm:)</Text>
                </Stack>
            </Group>
            <Group ta="end" justify="end" w={{ base: "100%", sm: "auto" }}>
                <Text c="dimmed">
                    {data && `${data.presence_count} online`}
                </Text>
                <Link
                    text="Discord"
                    loading={loading}
                    url={data?.instant_invite}
                    icon={<IconBrandDiscord />}
                    variant="light"
                />
            </Group>
        </Group>
    );
};
