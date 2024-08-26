import { Text } from "@mantine/core";
import { StockFriendRenderer } from "./default";

export const FriendSparkles = () => {
    return (
        <StockFriendRenderer
            image="/img/other/sparkles.jpg"
            tooltip="namsis.gayest.systems"
            url="https://namsis.gayest.systems/"
            onClick={() => { console.log("gay gay homosexual gay 617"); }}
        >
            <Text span c="white">
                Sparkles ✨
            </Text>
        </StockFriendRenderer>
    )
}
