type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
  root?: string;
};

const imgLoader = ({ src, width, quality }: ImageLoaderProps) =>
  `${src}?w=${width}&q=${quality || 75}`;

export default imgLoader;
