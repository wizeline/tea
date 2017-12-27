import React from 'react';

export default ([
    <defs key={0}>
      <filter id="a" width="110.9%" height="104.6%" x="-4.1%" y="-1.7%" filterUnits="objectBoundingBox">
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1"/>
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="1"/>
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"/>
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>,
    <g
      key={1}
      fill="none"
      fillRule="evenodd"
      filter="url(#a)"
      transform="translate(-15 -244)"
    >
      <path fill="#E2E8EA"
        d="M33 246c8.836 0 16 7.164 16 16 0 8.837-7.164 16-16 16s-16-7.163-16-16c0-8.836 7.164-16 16-16"/>
      <path
        fill="#C3CBCF"
        d={'M37.16 266.8h-8.32a6.4 6.4 0 0 0-6.4 6.4v.815A15.935 15.935 0 0 0 33 278c4.048 0 ' +
      '7.742-1.506 10.56-3.985v-.815a6.4 6.4 0 0 0-6.4-6.4'}/>
      <path fill="#A2ABAF"
        d={'M22.44 273.123v.892c.507.446 1.04.863 1.6 1.243v-1.505c0-3.48 2.865-6.3 ' +
           '6.4-6.3v-.63h-1.6c-3.535 0-6.4 2.82-6.4 6.3'}/>
      <path fill="#A2ABAF"
        d={'M33 262.32c3.181 0 5.76 1.862 5.76 4.16s-2.579 4.16-5.76 4.16c-3.181 ' +
           '0-5.76-1.862-5.76-4.16s2.579-4.16 5.76-4.16'}/>
      <path fill="#F5F8F9"
        d={'M33 253.68a6.4 6.4 0 0 1 6.4 6.4v2.56a6.4 6.4 0 1 1-12.8 0v-2.56a6.4 6.4 0 0 1 6.4-6.4'}/>
      <path fill="#EAF2F4"
        d={'M32.36 264.24a.64.64 0 0 1 .64-.64v-7.04h-5.342a6.368 6.368 0 0 0-1.058 3.52v2.56a6.4 ' +
           '6.4 0 0 0 6.4 6.4v-4.16a.64.64 0 0 1-.64-.64'}/>
      <path fill="#768288"
        d={'M26.595 259.116c.367.004 1.936-.076 3.483-1.6.635.625.99 1.598 2.927 1.598.405 0 2.921-.96 ' +
           '3.542-.96 1.476 0 2.55.677 2.856.893-.5-3.042-3.17-5.367-6.399-5.367-3.253 0-5.94 2.36-6.41 ' +
           '5.436zm3.365 1.924a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6zm6.08 0a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6z'}/>
    </g>
]);