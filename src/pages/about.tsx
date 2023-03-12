import { NextPage } from "next";
import { useTranslations } from "next-intl";
import { CardMe } from "../components/CardMe";
import { CardSoftSkills } from "../components/CardSoftSkills";
import { CardTech } from "../components/CardTech";

const About: NextPage = () => {
  const t = useTranslations("About");

  return (
    <>
      <section className="container flex flex-col gap-x-12 p-4 mx-auto mb-10">
        <section className="flex flex-col items-center mt-4">
          <p className="text-center font-bold text-3xl mb-8">{t("about")}</p>
          <section className="flex flex-col items-center md:flex-row md:justify-center">
            <section className="flex flex-col w-full text-xl text-center md:text-start md:pr-4">
              <p>
                {t("aboutMe.saudation")}
                <strong className="font-semibold text-primary">
                  {" "}
                  Thiago Hiroaki Chinen
                </strong>
                {t("aboutMe.whoami")}
                <strong> {t("aboutMe.graduation")} </strong>
              </p>
              <br />
              <p>{t("aboutMe.particulars")}</p>
              <br />
              <p>{t("aboutMe.slogan")}</p>
              <br />
              <p>{t("aboutMe.thingsILike")}</p>
              <br />
            </section>
            <section className="flex flex-col items-center sm:mx-auto">
              <CardMe />
            </section>
          </section>
        </section>

        <section className="flex flex-col items-center mt-14">
          <p className="text-center font-bold text-3xl mb-8">Hard Skills</p>
          <section className="flex flex-col items-start w-full text-xl text-center md:text-start">
            <p>
              {t("hardSkills.text1")}
              <strong className="font-semibold text-primary">{t("hardSkills.text2")}</strong>
              {t("hardSkills.text3")}
            </p>
            <br />
            <p>
            {t("hardSkills.text4")}
              <strong className="font-semibold text-primary">{t("hardSkills.text5")}</strong>
              {t("hardSkills.text6")}
              <strong className="font-semibold text-primary">{t("hardSkills.text7")}</strong>
              {t("hardSkills.text8")}
              <strong className="font-semibold text-primary">{t("hardSkills.text9")}</strong>
              {t("hardSkills.text10")}
            </p>
            <br />
            <p>
            {t("hardSkills.text11")}
              <strong className="font-semibold text-primary">{t("hardSkills.text12")}</strong>
              {t("hardSkills.text13")}
            </p>
            <br />
            <p>{t("hardSkills.text14")}</p>
          </section>
          <section className="flex flex-wrap flex-col md:flex-row md:gap-4 justify-center w-full mb-4 mt-10">
            <CardTech icon="SiReact" techTitle="React" />
            <CardTech icon="SiVuedotjs" techTitle="VueJS" />
            <CardTech icon="SiNextdotjs" techTitle="NextJS" />
            <CardTech icon="SiReact" techTitle="React Native" />
            <CardTech icon="SiIonic" techTitle="Ionic" />
            <CardTech icon="SiElectron" techTitle="ElectronJS" />
            <CardTech icon="SiTailwindcss" techTitle="Tailwind" />
            <CardTech icon="SiTypescript" techTitle="Typescript" />
            <CardTech icon="SiNodedotjs" techTitle="NodeJS" />
            <CardTech icon="SiPython" techTitle="Python" />
            <CardTech icon="SiDocker" techTitle="Docker" />
            <CardTech icon="SiGit" techTitle="GIT" />
            <CardTech icon="SiDatabricks" techTitle="SQL" />
            <CardTech icon="SiLinux" techTitle="Linux" />
          </section>
        </section>

        <section className="flex flex-col items-center mt-14">
          <p className="text-center font-bold text-3xl mb-8">Soft Skills</p>
          <section className="flex flex-col items-start w-full text-xl text-center md:text-start">
            <p>
              {t("softSkills.text1")}
              <strong className="text-primary">{t("softSkills.text2")}</strong>
              {t("softSkills.text3")}
              <strong className="text-primary">{t("softSkills.text4")}</strong>
              {t("softSkills.text5")}
              <strong className="text-primary">{t("softSkills.text6")}</strong>
              {t("softSkills.text7")}
              <strong className="text-primary">{t("softSkills.text8")}</strong>
              {t("softSkills.text9")}
              <strong className="text-primary">{t("softSkills.text10")}</strong>
              {t("softSkills.text11")}
            </p>
            <br />
            <p>
              {t("softSkills.text12")}
              <strong className="text-primary">{t("softSkills.text13")}</strong>
              {t("softSkills.text14")}
            </p>
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
              <strong className="italic">"{t("programmingCard.text1")}"</strong>
              {t("programmingCard.text2")}
              <strong className="italic">"{t("programmingCard.text3")}"</strong>
              {t("programmingCard.text4")}
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
