import type { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
}
export function SvgPlayArrow(props: Props) {
  return <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 72 72" fill={props.fill || "currentColor"} xmlns="http://www.w3.org/2000/svg" {...props}><mask id="mask0_2570_42707" style={{
      maskType: "alpha"
    }} maskUnits="userSpaceOnUse" x={0} y={0} width={72} height={72}><rect width={72} height={72} fill="#D9D9D9" /></mask><g mask="url(#mask0_2570_42707)"><path d="M24 57V15L57 36L24 57Z" /></g></svg>;
}