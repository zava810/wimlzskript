import IconCloud from "../magicui/icon-cloud";


const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "firebase",
    "vercel",
    "googleanalytics",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
    "bitbucket",
    "mapbox",
    "angular",
    "tailwindcss",
    "bootstrap",
    "shadcnui"
];

export function IconCloudDemo() {
    return (
        <div className="relative flex h-full w-full max-w-[22rem] items-center justify-center overflow-hidden rounded-lg  bg-background ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
