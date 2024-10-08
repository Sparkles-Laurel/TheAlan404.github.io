import { Stack, Box, ScrollArea, Image, Tooltip, Text, Container, SegmentedControl, Space, Loader } from '@mantine/core'
import React, { useEffect, useState, useTransition } from 'react';
import { ProjectsList } from "./pages/projects/ProjectsList";
import { GodDrinksJava } from "./features/events/GodDrinksJava";
import { About } from "./pages/about/About";
import { Header } from "./pages/Header";
import { BlogPage } from "./pages/blog/BlogPage";

export type Page = "projects" | "mili" | "about" | "blog";

export const App = () => {
    const [page, setPage] = useState<Page>("about");
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        // @ts-ignore
        window.me = "@me";
        // @ts-ignore
        window.world = {
            execute() {
                setPage("mili");
            }
        };
    }, []);

    return (
        <ScrollArea
            id="scroller-global"
            className="app"
            h="100vh"
            w="100vw"
            offsetScrollbars="y"
            ta="center"
        >
            <Container size="sm">
                {page == "mili" ? (
                    <Box h="100vh">
                        <GodDrinksJava close={() => setPage("about")} />
                    </Box>
                ) : (
                    <Stack>
                        <Header />

                        <Stack gap={0}>
                            <SegmentedControl
                                fullWidth
                                data={[
                                    { value: "about", label: "About" },
                                    { value: "projects", label: "Projects" },
                                    { value: "blog", label: "Blog" },
                                ]}
                                defaultValue={page}
                                onChange={(v) => {
                                    startTransition(() => {
                                        setPage(v as Page);
                                    });
                                }}
                            />
                        </Stack>

                        {isPending ? (
                            <Stack align="center" pt="md">
                                <Loader />
                            </Stack>
                        ) : (
                            <Stack>
                                {page == "projects" && (
                                    <ProjectsList />
                                )}

                                {page == "about" && (
                                    <About />
                                )}

                                {page == "blog" && (
                                    <BlogPage />
                                )}
                            </Stack>
                        )}

                        <Stack h="100vh" justify="end">
                            <Text>beautiful, isnt it?</Text>
                        </Stack>
                    </Stack>
                )}
            </Container>

            <Box
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 30,
                    width: "8px",
                    height: "8px",
                    zIndex: "999",
                }}
            >
                <Tooltip label={(
                    <Text fz={10}>:3</Text>
                )} withArrow>
                    <Image
                        src="/assets/img/cats/kuylars.png"
                        draggable={false}
                    />
                </Tooltip>
            </Box>
        </ScrollArea>
    )
}

