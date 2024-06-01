import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdLanguage } from "react-icons/md";

const LanguageSwitch = () => {
  const router = useRouter();
  const { locale, locales, pathname, query, asPath } = router;
  const otherLocales = locales || [];

  const [selectedLocale, setSelectedLocale] = useState(locale);

  useEffect(() => {
    setSelectedLocale(locale);
  }, [locale]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <>
      <section className="flex items-center">
        <MdLanguage size={25} />
        <select
          className="text-semibold text-lg p-1 rounded bg-transparent	transition focus:outline-none"
          value={selectedLocale}
          onChange={handleChange}
        >
          {otherLocales.map((localeOption, key) => {
            return (
              <option
                key={key}
                className="dark:bg-bg-color"
                value={localeOption}
              >
                {localeOption.toUpperCase()}
              </option>
            );
          })}
        </select>
      </section>
    </>
  );
};

export default LanguageSwitch;
