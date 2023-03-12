import { useTranslations } from "next-intl";
import Image from "next/image";

export const WorkingInfo: React.FC = () => {
  const t = useTranslations("WorkingOn");

  return (
    <>
      <section className="flex">
        <Image
          alt="Working On Image"
          className="rounded-full"
          src="/gif.gif"
          width={200}
          height={200}
        ></Image>
      </section>
      <br />
      <section className="flex text-center font-semibold text-5xl">
        {t('text')} <section className="inline animate-pulse"> ...</section>
      </section>
    </>
  );
};
