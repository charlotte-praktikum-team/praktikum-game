type Align = 'left' | 'center';
type Type = 'h1' | 'h2' | 'h3';
type Size = 'm' | 'l' | 'xl';

export type HeadingProps = {
  children: React.ReactNode;
  align?: Align;
  type: Type;
  size: Size;
};
