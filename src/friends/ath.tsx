import { BackgroundImage, Box, Stack, Text, Tooltip } from "@mantine/core";
import { Link } from "../components/Link";
import { StockFriendRenderer } from "./default";

export const FriendAthenya = () => {
    return (
        <StockFriendRenderer
            image="/img/other/ath.png"
            tooltip="^C/~ath"
            url="https://ctrl-c.club/~ath/"
        >
            <Text span c="white">
                ath
            </Text>
        </StockFriendRenderer>
    )
}
