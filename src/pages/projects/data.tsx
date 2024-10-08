import { Group, Image, Stack, Text } from "@mantine/core";
import { Link } from "../../components/misc/Link";
import { Project } from "../../types";

export const Domain = "deniz.blue";
export const Pages = (s: string) => `https://${Domain}/${s}/`;
export const Subdomain = (s: string) => `https://${s}.${Domain}/`;

const Istanbus: Project = {
    name: "Istanbus",
    status: "done",
    buttons: [
        { type: "website", url: Subdomain("istanbus") },
        { type: "repo", repo: "TheAlan404/istanbus" },
    ],
    desc: "Istanbul Bus Information website (IETT)",
    tech: ["ts", "react", "nodejs"]
};

const KuirBlog: Project = {
    name: ".kuir Blog",
    desc: "Blog for r/kuir (turkish queer subreddit), using MDX and Nextjs SSG",
    buttons: [
        { type: "website", url: Subdomain("kuir"), text: "Visit .kuir" }
    ],
    status: "wip",
    tech: ["ts", "react", "nextjs"],
};

const NekoTube: Project = {
    name: "NekoTube",
    status: "wip",
    img: "/assets/img/proj/nekotube.png",
    desc: "an alternative YouTube video player",
    buttons: [
        { type: "website", url: Subdomain("tube") },
        { type: "repo", repo: "TheAlan404/nekotube" },
    ],
    color: "gray",
    tech: ["js", "react", "vite"],
};

const ZilTek: Project = {
    name: "ZilTek",
    status: "done",
    buttons: [
        { type: "website", url: Subdomain("ziltek") }
    ],
    content: (
        <Stack>
            <Text>
                The school bell app with multilanguage support.
            </Text>
            <Image src="/assets/img/proj/ziltekscreenshot.png" />
        </Stack>
    ),
    tech: ["ts", "react", "vite", "nodejs"],
};

const mcman: Project = {
    name: "mcman",
    status: "done",
    desc: "A powerful Minecraft Server Management CLI which allows you to use git and many other things",
    img: "https://github.com/ParadigmMC/mcman/raw/main/docs/mcman-3.png",
    buttons: [
        { type: "repo", repo: "ParadigmMC/mcman" },
        { type: "docs", url: Subdomain("mcman") },
    ],
    tech: ["rust"],
    color: "purple",
};

const OAALMUN: Project = {
    name: "OAALMUN",
    status: "done",
    buttons: [
        { type: "website", url: "https://mun.oaal.com.tr", text: "View OAALMUN" }
    ],
    desc: "MUN (Model United Nations) website for my school",
    img: "/assets/img/proj/oaalmun.png",
    tech: ["js", "ts", "react", "vite"],
};

const Carpanga: Project = {
    name: "Çarpanga",
    status: "done",
    buttons: [
        { type: "website", url: Subdomain("carpanga"), text: "Play Çarpanga" },
        { type: "repo", repo: "TheAlan404/carpanga" },
    ],
    content: (
        <Stack>
            <Text>A short mathematical strategy game, now in multilanguage!</Text>
            <Image src="/assets/img/proj/carpanga.png" />
        </Stack>
    ),
    tech: ["ts", "react", "vite"],
};

const WantYouGone: Project = {
    name: "Want You Gone",
    status: "done",
    desc: "Portal 2 ending credits song animation recreated using (very bad) HTML",
    img: "/assets/img/proj/wantyougone.png",
    buttons: [
        { type: "website", url: Pages("want-you-gone") },
        { type: "repo", repo: "TheAlan404/want-you-gone" },
    ],
    color: "yellow",
    tech: ["html", "css", "js"],
};

const discordjsx: Project = {
    name: "discord-jsx",
    status: "done",
    buttons: [
        { type: "repo", repo: "TheAlan404/discord-jsx" },
        { type: "website", url: "https://www.npmjs.com/package/@alan404/discordjsx", text: "NPM" },
    ],
    tech: ["ts", "react", "nodejs"],
    desc: "A library that allows you to use React/JSX inside your discord bot projects",
};

const alphamath: Project = {
    name: "alphamath",
    status: "wip",
    desc: "An experimental interactive math engine/solver",
    buttons: [
        { type: "website", url: Pages("alphamath") },
        { type: "repo", repo: "TheAlan404/alphamath" }
    ],
    tech: ["ts", "react", "vite"],
};

const tools: Project = {
    name: "tools",
    status: "done",
    desc: "Some useful, convenient tools ive made",
    buttons: [
        { type: "website", url: Pages("tools") },
        { type: "repo", repo: "TheAlan404/tools" },
    ],
    tech: ["ts", "react", "vite"],
};

const DenVis: Project = {
    name: "DenVis",
    status: "forgor",
    buttons: [
        { type: "repo", repo: "TheAlan404/DenVis" },
        { type: "website", url: "https://denvis.glitch.me/", text: "Settings Page" },
    ],
    content: (
        <Stack>
            <Text>A simple Windows Audio Visualizer with some extra features such as snow.</Text>

            <Image
                src="/assets/img/proj/denvis.png"
                bd="1px white"
            />
        </Stack>
    ),
    tech: ["cs"],
};

const FFMPEGEditor: Project = {
    name: "FFMPEG Editor",
    status: "wip",
    content: (
        <Text>
            A command editor for <Link text="FFMPEG" url="https://ffmpeg.org/" size="compact-sm" />
        </Text>
    ),
    buttons: [
        { type: "website", url: Pages("ffmpeg-editor") },
        { type: "repo", repo: "TheAlan404/ffmpeg-editor" }
    ],
    tech: ["js", "react", "vite"],
};

const nbsjs: Project = {
    name: "nbs.js",
    status: "abandoned",
    content: (
        <Stack>
            <Text>
                <Link text="NBS (note block song)" url="https://opennbs.org/nbs" size="compact-sm" /> parser in Javascript
            </Text>
            <Text>
                It's a bit abandoned though
            </Text>
        </Stack>
    ),
    buttons: [
        { type: "repo", repo: "TheAlan404/nbs.js" },
        { type: "website", url: "https://www.npmjs.com/package/nbs.js", text: "NPM" },
    ],
    tech: ["js"],
};

const DSharpPlusPaginatedSelects: Project = {
    name: "PaginatedSelects",
    status: "abandoned",
    content: (
        <Stack>
            <Text>
                A <Link text="DSharpPlus" url="https://dsharpplus.github.io/DSharpPlus/" size="compact-sm" /> extension that adds paginated select components.
            </Text>
        </Stack>
    ),
    tech: ["cs"],
    buttons: [
        { type: "repo", repo: "TheAlan404/DSharpPlus.PaginatedSelects" }
    ],
};

export const Projects: Project[] = [
    mcman,
    Istanbus,
    Carpanga,
    NekoTube,
    ZilTek,
    KuirBlog,
    OAALMUN,
    WantYouGone,
    discordjsx,
    alphamath,
    tools,
    DenVis,
    FFMPEGEditor,
    nbsjs,
    DSharpPlusPaginatedSelects,
];
