import Image from 'next/image';

type ImageWrapperProps = {
  src: string;
  alt: string;
};
const ImageWrapper = ({ src, alt }: ImageWrapperProps) => {
  return (
    <figure className="w-[530px] h-[420px] relative overflow-hidden rounded-xl">
      <Image layout="fill" className="object-cover" src={src} alt={alt} />
    </figure>
  );
};

export default function Home() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Quiénes Somos - Poí Ranch
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Poí Ranch es mucho más que un coto de caza; es un lugar donde se
              vive la esencia de la vida de campo en Argentina. Fundado por dos
              hermanos apasionados por la naturaleza y las tradiciones rurales,
              Poí Ranch se ha convertido en un destino reconocido que ofrece una
              experiencia de caza sin igual. Ubicado en los majestuosos paisajes
              de Sauce, Corrientes, nuestro coto se especializa en brindar una
              experiencia de caza auténtica, sin cercos, donde cada salida es un
              desafío que permite al cazador conectarse profundamente con el
              entorno. Nuestro objetivo es recibir cazadores de todas partes,
              ofreciéndoles no solo la oportunidad de cazar el emblemático
              ciervo Axis y otras especies como el búfalo, antílope y chancho
              salvaje, sino también una experiencia completa de vida en el
              campo. En Poí Ranch, nos enorgullecemos de combinar la adrenalina
              de la caza con la calidez de la hospitalidad argentina, creando un
              ambiente donde se disfruta de la camaradería y la tradición.
            </p>
          </div>
          <ImageWrapper
            src="/images/arroyo-reflejos-monte.jpeg"
            alt="Image Description"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <ImageWrapper
            src="/images/caballos-jinete-rifle.jpeg"
            alt="Image Description"
          />
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Una experiencia
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Nuestro equipo está compuesto por expertos que conocen cada rincón
              del coto y están comprometidos en ofrecer una estancia
              inolvidable. Contamos con guías especializados y cocineros que
              preparan platos típicos argentinos, elevando la experiencia con
              sabores locales, como el asado tradicional. En Poí Ranch, también
              somos conscientes de la importancia de la conservación y la
              sostenibilidad . A través de un plan de caza selectiva, buscamos
              preservar la fauna y el equilibrio natural del entorno para que
              futuras generaciones puedan disfrutar de esta experiencia. Poí
              Ranch es un lugar donde cada cazador vive algo más que una jornada
              de caza; se lleva una historia, un momento de conexión con la
              naturaleza y el auténtico espíritu de la vida de campo argentina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
