import { Metadata } from 'next';
import { META_TAGS } from '@/lib/seo/meta-tags';

interface SEOWrapperProps {
  children: React.ReactNode;
  page: keyof typeof META_TAGS;
  customMeta?: Partial<Metadata>;
}

export function SEOWrapper({ children, page, customMeta }: SEOWrapperProps) {
  const pageMeta = META_TAGS[page];
  
  return (
    <>
      <title>{customMeta?.title || pageMeta.title}</title>
      <meta 
        name="description" 
        content={customMeta?.description || pageMeta.description} 
      />
      <meta 
        name="keywords" 
        content={customMeta?.keywords || pageMeta.keywords.join(', ')} 
      />
      {children}
    </>
  );
}