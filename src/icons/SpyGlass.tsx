import { createElement } from "react";

interface Props {
  size?: string;
  color?: string;
  height?: string;
}

export function SpyGlass(props: Props) {
  return createElement(
    "svg",
    {
      viewBox: "0 0 512 512",
      width: props.size || "1em",
      length: props.height || "auto",
      ...props,
    },
    createElement("path", {
      fill: props.color,
      fillRule: "evenodd",
      d: "M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z",
    })
  );
}
export default SpyGlass;
