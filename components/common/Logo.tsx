import { FC } from "react";

interface Props {
  className?: string;
}
const Logo: FC<Props> = ({ className }) => (
  // <svg
  //   width="32"
  //   height="32"
  //   viewBox="0 0 32 32"
  //   xmlns="http://www.w3.org/2000/svg"
  //   className={className}
  // >
  //   <path d="M30.72 0H1.28C0.572 0 0 0.572 0 1.28V30.72C0 31.428 0.572 32 1.28 32H30.72C31.428 32 32 31.428 32 30.72V1.28C32 0.572 31.428 0 30.72 0ZM16.044 16.244L8.364 22.684C8.156 22.86 7.84 22.712 7.84 22.44V19.932C7.84 19.84 7.884 19.748 7.956 19.688L12.348 16L7.956 12.312C7.91923 12.283 7.88965 12.2458 7.86954 12.2035C7.84941 12.1612 7.83931 12.1148 7.84 12.068V9.56C7.84 9.288 8.156 9.14 8.364 9.316L16.044 15.752C16.2 15.88 16.2 16.116 16.044 16.244ZM24.16 22.44C24.16 22.616 24.024 22.76 23.86 22.76H16.46C16.296 22.76 16.16 22.616 16.16 22.44V20.52C16.16 20.344 16.296 20.2 16.46 20.2H23.86C24.024 20.2 24.16 20.344 24.16 20.52V22.44Z" />
  // </svg>
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="52.000000pt"
    height="67.000000pt"
    viewBox="0 0 52.000000 67.000000"
    preserveAspectRatio="xMidYMid meet"
    className={className}
  >
    <g
      transform="translate(0.000000,67.000000) scale(0.100000,-0.100000)"
      // fill="#666666"
      stroke="none"
    >
      <path
        d="M94 654 c-62 -30 -87 -68 -92 -136 -7 -89 10 -114 135 -199 135 -92
165 -140 131 -213 -14 -33 -35 -19 -44 30 l-6 34 -109 0 -109 0 0 -34 c0 -96
129 -168 220 -121 25 13 33 13 66 -1 106 -44 221 22 231 133 8 81 -18 118
-142 202 -112 77 -135 105 -135 168 0 70 32 83 48 20 l8 -32 112 -3 112 -3 0
29 c0 33 -33 86 -71 115 -39 28 -106 33 -150 9 -36 -18 -38 -18 -70 -1 -42 22
-94 23 -135 3z m115 -25 c36 -13 36 -11 15 -51 -20 -38 -15 -115 9 -152 9 -13
62 -56 118 -95 56 -39 111 -83 121 -98 35 -54 18 -138 -38 -182 -31 -24 -110
-29 -137 -9 -15 12 -15 17 -1 57 19 57 10 114 -25 152 -14 17 -66 58 -115 92
-109 76 -129 101 -129 161 0 97 87 158 182 125z m209 -3 c33 -17 57 -44 66
-73 7 -23 6 -23 -77 -23 l-84 0 -16 42 c-9 23 -16 42 -14 43 37 28 85 32 125
11z m-210 -528 c18 -39 18 -44 4 -56 -9 -6 -38 -12 -65 -12 -42 0 -54 5 -83
34 -19 19 -34 43 -34 55 0 20 5 21 80 21 l79 0 19 -42z"
      />
    </g>
  </svg>
);

export default Logo;
