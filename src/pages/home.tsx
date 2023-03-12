import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { CardMe } from "../components/CardMe";

const Home: NextPage = () => {
  const t = useTranslations("Home");

  return (
    <>
      <section className="flex flex-col items-center p-4 md:flex-row gap-x-12 mb-12">
        <section className="flex flex-col items-start text-center m-10 md:text-left">
          <section className="w-full font-semibold text-xl md:text-3xl">
            {t("helloMessage")}
          </section>
          <section className="w-full my-3 text-4xl font-bold text-primary md:text-8xl">
            Thiago Chinen
          </section>
          <section className="w-full text-xl font-semibold md:text-3xl">
            {t("desecription")}
            <br />
            {t("slogan")}
          </section>
        </section>

        <section className="flex basis-1/3 sm:py-12">
          <CardMe />
        </section>
      </section>
    </>
  );
};

export default Home;
