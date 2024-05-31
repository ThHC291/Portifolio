import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Links: React.FC = () => {
  return (
    <>
      <section className="flex items-center">
        <section className="px-1">
          <Link legacyBehavior href="https://github.com/thiagochinen">
            <a target="_blank">
              <FaGithub size={25} />
            </a>
          </Link>
        </section>

        <section className="px-1">
          <Link legacyBehavior href="https://www.linkedin.com/in/thiago-chinen-bb506b26a/">
            <a target="_blank">
              <FaLinkedin size={25} />
            </a>
          </Link>
        </section>

        <section className="px-1">
          <Link legacyBehavior href="https://www.instagram.com/thiago_chinen/">
            <a target="_blank">
              <FaInstagram size={25} />
            </a>
          </Link>
        </section>
      </section>
    </>
  );
};

export default Links;
