export type ProductImageProps = {
  width: string;
  height: string;
  src: string;
};
const ProductImage = (props: ProductImageProps) => {
  const { width, height, src } = props;
  return (
    <div
      style={{
        backgroundImage: `url('${src}')`,
        width: width,
        height: height,
        backgroundSize: "contain",
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default ProductImage;
