import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { CardMe } from "../components/CardMe";
import { CardSoftSkills } from "../components/CardSoftSkills";
import { CardTech } from "../components/CardTech";

const About: NextPage = () => {
  const t = useTranslations("About");

  const tagsInText = {
    strong: (text: any) => <strong>{text}</strong>,
    strongColor: (text: any) => <strong className="font-semibold text-primary">{text}</strong>,
    italic: (text: any) => <strong className="italic">{text}</strong>,
  }

  return (
    <>
      <section className="container flex flex-col gap-x-12 p-4 mx-auto mb-10">
        <section className="flex flex-col items-center mt-4">
          <p className="text-center font-bold text-3xl mb-8">{t("about")}</p>
          <section className="flex flex-col items-center md:flex-row md:justify-center">

            <section className="flex flex-col w-full text-xl text-center md:text-start md:pr-4">
              <p>{t.rich("aboutMe.text1", tagsInText)}</p>
              <br />
              <p>{t.rich("aboutMe.text2", tagsInText)}</p>
              <br />
              <p>{t.rich("aboutMe.text4", tagsInText)}</p>
              <br />
              <p>{t.rich("aboutMe.contactMe.text1", tagsInText)}</p>
              <br />
            </section>

            <section className="flex flex-col items-center sm:mx-auto">
              <CardMe />
              <br />
              <p className="text-center font-bold text-xl">{t.rich("aboutMe.contactMe.text2", tagsInText)}</p>
            </section>

          </section>
        </section>

        <section className="flex flex-col items-center mt-10">
          <p className="text-center font-bold text-3xl mb-8">Hard Skills</p>
          <section className="flex flex-col items-start w-full text-xl text-center md:text-start">
            <p>{t.rich('hardSkills.text1', tagsInText)}</p>
            <br />
            <p>{t.rich('hardSkills.text2', tagsInText)}</p>
            <br />
            <p>{t.rich('hardSkills.text3', tagsInText)}</p>
            <br />
            <p>{t.rich("hardSkills.text4", tagsInText)}</p>
          </section>
          <section className="flex flex-wrap flex-col md:flex-row md:gap-4 justify-center w-full mb-4 mt-10">
            <CardTech icon="SiReact" techTitle="React" />
            <CardTech icon="SiVuedotjs" techTitle="VueJS" />
            <CardTech icon="SiNextdotjs" techTitle="NextJS" />
            <CardTech icon="SiReact" techTitle="React Native" />
            <CardTech icon="SiElectron" techTitle="ElectronJS" />
            <CardTech icon="SiTailwindcss" techTitle="Tailwind" />
            <CardTech icon="SiTypescript" techTitle="Typescript" />
            <CardTech icon="SiNodedotjs" techTitle="NodeJS" />
            <CardTech icon="SiNestjs" techTitle="NestJS" />
            <CardTech icon="SiPython" techTitle="Python" />
            <CardTech icon="SiDocker" techTitle="Docker" />
            <CardTech icon="SiAmazonaws" techTitle="AWS" />
            <CardTech icon="SiGit" techTitle="GIT" />
            <CardTech icon="SiDatabricks" techTitle="SQL" />
            <CardTech icon="SiLinux" techTitle="Linux" />
          </section>
        </section>

        <section className="flex flex-col items-center mt-10">
          <p className="text-center font-bold text-3xl mb-8">Soft Skills</p>
          <section className="flex flex-col items-start w-full text-xl text-center md:text-start">
            <p>{t.rich('softSkills.text1', tagsInText)}</p>
            <br />
            <p>{t.rich('softSkills.text2', tagsInText)}</p>
            <br />
            <p>{t.rich('softSkills.text3', tagsInText)}</p>
            <br />
          </section>
          <section className="flex flex-nowrap flex-col items-center md:flex-row md:justify-center md:gap-4 w-full mt-4">
            <CardSoftSkills
              title={t("softSkills.card.adaptability")}
              image="Adaptability"
            />
            <CardSoftSkills
              title={t("softSkills.card.creativity")}
              image="Creative"
            />
            <CardSoftSkills
              title={t("softSkills.card.teamWork")}
              image="TeamWork"
            />
            <CardSoftSkills
              title={t("softSkills.card.timeManagement")}
              image="TimeManagement"
            />
          </section>
        </section>

        <section className="flex flex-col items-center mt-14">
          <section className="flex flex-col items-center p-5 shadow-lg rounded-xl bg-light-color dark:bg-secondary border-b-2 border-r-2 border-primary transform md:hover:scale-105 transition duration-300">
            <p className="font-bold text-3xl mb-4">
              {t("programmingCard.title")}
            </p>
            <p className="text-center text-lg">
              {t.rich("programmingCard.text", tagsInText)}
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
