import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Lupa = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <Path d="M448 768a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm297.344-76.992L959.936 905.6 905.6 959.936 691.008 745.344a384 384 0 1 1 54.336-54.336z" />
  </Svg>
);
export default Lupa;
