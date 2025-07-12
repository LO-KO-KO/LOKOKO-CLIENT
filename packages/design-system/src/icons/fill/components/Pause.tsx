import type { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
}
export function SvgPause(props: Props) {
  return <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 72 72" fill={props.fill || "currentColor"} xmlns="http://www.w3.org/2000/svg" {...props}><mask id="mask0_2570_42701" style={{
      maskType: "alpha"
    }} maskUnits="userSpaceOnUse" x={0} y={0} width={72} height={72}><rect width={72} height={72} fill="#D9D9D9" /></mask><g mask="url(#mask0_2570_42701)"><path d="M42 57V15H54V57H42ZM18 57V15H30V57H18Z" /></g></svg>;
}