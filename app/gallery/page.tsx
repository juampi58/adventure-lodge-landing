import Image from 'next/image';

type ImageWrapperProps = {
  src: string;
  alt: string;
};
const ImageWrapper = ({ src, alt }: ImageWrapperProps) => {
  return (
    <figure className="w-[350px] h-[350px] relative overflow-hidden rounded-xl">
      <Image layout="fill" className="object-cover" src={src} alt={alt} />
    </figure>
  );
};
export default function Page() {
  return (
    <section
      className="flex justify-between align-items-center flex-wrap gap-5 p-5"
      id="gallery-page"
    >
      <ImageWrapper
        src="/images/entrada-tranquera-molino.jpeg"
        alt="Image Description"
      />
      <ImageWrapper
        src="/images/arroyo-playa-cazador.jpeg"
        alt="Image Description"
      />
      <ImageWrapper
        src="/images/caballos-jinete-rifle.jpeg"
        alt="Image Description"
      />
      <ImageWrapper
        src="/images/arroyo-piragua-remeros.jpeg"
        alt="Image Description"
      />
      <ImageWrapper
        src="/images/arroyo-reflejos-monte.jpeg"
        alt="Image Description"
      />
      <ImageWrapper
        src="/images/casa-comedor-ventanal.jpeg"
        alt="Image Description"
      />
      <ImageWrapper
        src="/images/ciervo-preza-encharcado.jpeg"
        alt="Image Description"
      />
      <ImageWrapper
        src="/images/salon-comedor-ventanal-hogar.jpeg"
        alt="Image Description"
      />
      <ImageWrapper
        src="/images/monte-caminata-cazador-atardecer.jpeg"
        alt="Image Description"
      />
      <ImageWrapper src="/images/gorras-logo.jpeg" alt="Image Description" />
      <ImageWrapper
        src="/images/ciervo-preza-horizonte.jpeg"
        alt="Image Description"
      />
      <ImageWrapper
        src="/images/ciervo-preza-monte.jpeg"
        alt="Image Description"
      />
      <ImageWrapper
        src="/images/cazador-ciervo-preza.jpeg"
        alt="Image Description"
      />
    </section>
  );
}
