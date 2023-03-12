// 404.js
import { NextPage } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FourOhFour: NextPage = () => {
  const t = useTranslations("404");

  return (
    <>
      <section className="flex flex-col items-center md:flex-row md:justify-center gap-x-12">
        <section className="flex flex-col md:w-1/2 items-start text-center md:text-left">
          <section className="w-full my-3 text-9xl font-bold text-primary">
            404
          </section>
          <section className="w-full text-xl font-semibold md:text-3xl">
            {t("errorMessage")}
            <br />
            {t("funnyMessage")}
          </section>
        </section>

        <section className="flex items-center rounded-xl py-6 animate-ghost-move">
          <Image
            className="animate-ghost-visible"
            alt="Ghost"
            src="/ghost.png"
            width={700}
            height={600}
          ></Image>
        </section>
      </section>
    </>
  );
};

export default FourOhFour;
