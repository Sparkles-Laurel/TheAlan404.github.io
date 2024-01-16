import { Center, Code, Group, Space, Stack, Text, Title } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

const STARTDATE = new Date(2024, 0, 1, 0, 0, 0, 0);
const PLAY_OFFSET_SECONDS = 3*60+43;

export const NewYearEvent = ({
    playOn = STARTDATE,
}: {
    playOn: Date,
}) => {
    let [isNewYear, setIsNewYear] = useState(false);
    let [hour, setHour] = useState("");
    let [min, setMin] = useState("");
    let [sec, setSec] = useState("");
    let ref = useRef(new Audio("Opus.mp4"));

    useEffect(() => {
        let int = setInterval(() => {
            let past = new Date().getTime() > playOn;
            setIsNewYear(past);

            if(past) {
                setHour(new Date().getHours());
                setMin(new Date().getMinutes());
                setSec(new Date().getSeconds());
            } else {
                setHour(23 - new Date().getHours());
                setMin(59 - new Date().getMinutes());
                setSec(59 - new Date().getSeconds());

                if((playOn.getTime()-(PLAY_OFFSET_SECONDS*1000)-1000) < new Date().getTime()) {
                    // should already be playing
                    if (ref.current.paused)
                        ref.current.play();
                    
                    let approxTime = (new Date().getTime() - playOn.getTime() + (PLAY_OFFSET_SECONDS * 1000)) / 1000;
                    if(Math.floor(Math.abs(ref.current.currentTime - approxTime)) >= 2) {
                        ref.current.currentTime = approxTime;
                    } 
                }
            }
        }, 500);

        return () => {
            ref.current.pause();
            clearInterval(int);
        };
    }, []);

    return (
        <Center h="100vh">
            <Stack m="xl" p="xl" ta="center" align="center">
                <Title order={2}>{isNewYear ? "Welcome to 2024!" : "Time until 2024:"}</Title>
                <Group>
                    <Code fz="xl">{[
                        hour,
                        min,
                        sec,
                    ].map(x => (x+"").padStart(2, "0")).join(":")}</Code>
                </Group>
                {!ref.current.paused || isNewYear ? (
                    <Stack>
                        {isNewYear && <Text>happy new year everyone. thanks for watching this little show i made in an hour :3 ily all</Text>}
                        {!ref.current.paused && <Text>Now Playing: "Opus" by Eric Prydz</Text>}
                        {!ref.current.paused && <Text>(Beat drop synced to new year)</Text>}
                    </Stack>
                ) : (
                    <Text>Time until suprise: {(() => {
                        let d = new Date((PLAY_ON.getTime()-(PLAY_OFFSET_SECONDS*1000)-1000));

                        let formatter = new Intl.RelativeTimeFormat();
                        let f = automaticRelativeDifference(d);
                        return formatter.format(f.duration, f.unit);
                    })()}</Text>
                )}
                <Space h="xl" />
                <Text>Scroll down for my personal website lol</Text>
            </Stack>
        </Center>
    )
}

function automaticRelativeDifference(d) {
	const diff = -((new Date().getTime() - d.getTime())/1000)|0;
	const absDiff = Math.abs(diff);
	if (absDiff > 86400*30*10) {
		return { duration: Math.round(diff/(86400*365)), unit: 'years' };
	}
	if (absDiff > 86400*25) {
		return { duration: Math.round(diff/(86400*30)), unit: 'months' };
	}
	if (absDiff > 3600*21) {
		return { duration: Math.round(diff/86400), unit: 'days' };
	}
	if (absDiff > 60*44) {
		return { duration: Math.round(diff/3600), unit: 'hours' };
	}
	if (absDiff > 30) {
		return { duration: Math.round(diff/60), unit: 'minutes' };
	}
	return { duration: diff, unit: 'seconds' };
}
