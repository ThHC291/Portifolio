import Image from "next/image";

interface CardSoftSkillsProps {
  image: string;
  title: string;
}

export const CardSoftSkills: React.FC<CardSoftSkillsProps> = ({
  image,
  title,
}: CardSoftSkillsProps) => {
  return (
    <>
      <section className="flex flex-col justify-center m-5 overflow-hidden transform md:hover:scale-105 transition duration-300">
        <section className="flex flex-col items-center justify-center relative shadow-lg rounded-xl sm:mx-auto border-b-2 border-r-2 border-primary">
          <Image
            alt="Me"
            className="relative bg-light-color dark:bg-secondary shadow-lg rounded-xl"
            src={`/${image}.svg`}
            width={250}
            height={250}
          />
        </section>

        <section className="flex flex-nowrap justify-center mt-3">
          <p className="text-center font-bold text-xl">{title}</p>
        </section>
      </section>
    </>
  );
};
