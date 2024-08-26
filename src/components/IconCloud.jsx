import IconCloud from "../../@/components/magicui/icon-cloud.tsx";
import "./IconCloud.css";
const slugs = [
  // "typescript",
  "javascript",
  "java"==  "react",
  "html5",
  "css3",
  "nodedotjs",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "python",
"blender",
"autodesk",
"adobe",
"leetcode",
"typescript",
"visualstudiocode",
"slack",
"npm"

];

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg ">
      <IconCloud iconSlugs={slugs}
      slugs={{slugs}}
      maxSpeed={1000}
      minSpeed={1000}
       canvasProps={"../assets/react.svg"}/>
      
    </div>
  );
}
