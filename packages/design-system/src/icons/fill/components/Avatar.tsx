import type { SVGProps } from "react";
interface Props extends SVGProps<SVGSVGElement> {
  size?: number;
  fill?: string;
}
export function SvgAvatar(props: Props) {
  return <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 44 44" fill={props.fill || "currentColor"} xmlns="http://www.w3.org/2000/svg" {...props}><g clipPath="url(#clip0_960_5918)"><rect width={44} height={44} rx={8.8} fill="#FFF1F6" /><circle cx={21.9996} cy={16.5001} r={9.9} fill="#FF80B1" /><circle cx={21.9996} cy={77.0001} r={48.4} fill="#FF80B1" /></g><defs><clipPath id="clip0_960_5918"><rect width={44} height={44} rx={8.8} fill="white" /></clipPath></defs></svg>;
}