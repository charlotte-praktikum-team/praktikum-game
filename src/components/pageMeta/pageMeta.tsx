import Helmet from 'react-helmet';

import { PageMetaProps } from './types';

export const PageMeta = ({ title }: PageMetaProps) => {
  const titleText = title.replace(/<\/?.+?>/gi, '');

  return (
    <Helmet>
      <title>{titleText}</title>
    </Helmet>
  );
};
