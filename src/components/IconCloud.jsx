import IconCloud from "../../@/components/magicui/icon-cloud.tsx";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "python",
  "MATLAB"
];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs}
      maxSpeed={1000}
      minSpeed={1000} />
    </div>
  );
}
