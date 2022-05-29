import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const IconLoader = () => (
  <StaticImage
    className="img"
    src="../../images/logo.png"
    width={500}
    quality={95}
    formats={['AUTO', 'WEBP', 'AVIF']}
    alt="Logo"
  />
);

export default IconLoader;
