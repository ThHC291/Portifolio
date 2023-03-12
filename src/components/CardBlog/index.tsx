import Image from "next/image";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { limitSizeOfString } from "../../utils";

export interface CardBlogProps {
  title: string;
  description: string;
  publisheDate: string;
  timeRead: string;
  image: string;
}

const CardBlog: React.FC<CardBlogProps> = ({
  title,
  description,
  publisheDate,
  timeRead,
  image,
}: CardBlogProps) => {
  return (
    <>
      <section className="flex rounded bg-light-color dark:bg-secondary border-t-2 border-t-primary overflow-hidden shadow-lg hover:cursor-pointer hover:scale-105 transition duration-300">
        <section className="flex flex-col px-6 py-8 lg:w-2/3">
          <section className="flex text-sm space-x-2 font-extralight">
            <section className="flex items-center space-x-1">
              <FaCalendarAlt />
              <p>{publisheDate}</p>
            </section>
            <section className="flex items-center space-x-1">
              <FaClock />
              <p>{timeRead}</p>
            </section>
          </section>

          <section>
            <p className="text-lg font-semibold pt-2 md:text-2xl">{title}</p>
          </section>

          <section className="pt-2 text-xs">
            <p>{limitSizeOfString(description, 180)}</p>
          </section>
        </section>

        <section className="hidden lg:flex translate-x-7 -skew-x-6 lg:w-1/3">
          <Image width="500" height="10" src={image} alt="Project photo" />
        </section>
      </section>
    </>
  );
};

export default CardBlog;
