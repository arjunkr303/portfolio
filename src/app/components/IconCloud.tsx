import { IconCloud as MagicIconCloud } from "@/app/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "tailwindcss",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "mongodb",
  "firebase",
  "nginx",
  "vercel",
  "cypress",
  "docker",
  "kubernetes",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "python",
  "redux",
  "graphql",
  "vite",
  "postman",
  "pnpm",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <MagicIconCloud images={images} />
    </div>
  );
}

export { MagicIconCloud as IconCloud };
