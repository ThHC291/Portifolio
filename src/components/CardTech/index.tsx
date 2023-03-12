import * as icons from "react-icons/si";

export type IconName = keyof typeof icons;

interface CardTechProps {
  icon: IconName;
  techTitle: string;
}

export const CardTech: React.FC<CardTechProps> = ({
  icon,
  techTitle,
}: CardTechProps) => {
  const Icon = icons[icon];
  return (
    <>
      <section className="flex justify-center items-center p-5 md:w-52 rounded bg-light-color dark:bg-secondary overflow-hidden shadow-lg border-b-2 border-primary transform md:hover:scale-105 transition duration-300">
        <section className="flex justify-center">
          <Icon className="text-secondary dark:text-light-color" size={40} />
        </section>
        <section className="flex pl-5 flex-col items-center">
          <section className="text-lg font-semibold">{techTitle}</section>
        </section>
      </section>
    </>
  );
};
