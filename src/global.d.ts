declare module "*.png" {
  const content: string;
  export default content;
}

type SvgComponent = React.FC<React.SVGAttributes<SVGElement>>;

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src
}

declare module "*.scss" {
  const content: { [key: string]: string };
  export default content;
}