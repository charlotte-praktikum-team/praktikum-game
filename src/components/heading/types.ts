type Align = 'start' | 'center' | 'end';
type Type = 'h1' | 'h2' | 'h3';
type Size = 'm' | 'l' | 'xl' | 'xxl';

export type HeadingProps = {
  children: React.ReactNode;
  align?: Align;
  type: Type;
  size: Size;
  className?: string;
};
