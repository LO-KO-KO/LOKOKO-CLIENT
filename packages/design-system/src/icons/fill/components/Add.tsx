import type { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
}
export function SvgAdd(props: Props) {
  return <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 36 36" fill={props.fill || "currentColor"} xmlns="http://www.w3.org/2000/svg" {...props}><mask id="mask0_2771_37812" style={{
      maskType: "alpha"
    }} maskUnits="userSpaceOnUse" x={0} y={0} width={36} height={36}><rect width={36} height={36} fill="#D9D9D9" /></mask><g mask="url(#mask0_2771_37812)"><path d="M16.5 19.5H7.5V16.5H16.5V7.5H19.5V16.5H28.5V19.5H19.5V28.5H16.5V19.5Z" /></g></svg>;
}