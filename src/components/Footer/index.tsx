import Links from "../Links";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center py-1 bg-light-color dark:bg-secondary">
      <section className="text-primary font-normal my-3">
        <a href="mailto:thiagochinen2015@gmail.com" className="hover:underline">
          thiagochinen2015@gmail.com
        </a>
      </section>
      <Links />
      <section className="text-black font-light text-xs my-3">
        @ 2024 Copyright: Thiago Chinen
      </section>
    </footer>
  );
};

export default Footer;
