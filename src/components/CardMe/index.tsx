import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const CardMe: React.FC = () => {
  const x = useMotionValue(250);
  const y = useMotionValue(150);

  const centeredX = useSpring(
    useTransform(x, (n) => n - 600),
    {
      bounce: 1,
      stiffness: 800,
      damping: 80,
    }
  );
  const centeredY = useSpring(
    useTransform(y, (n) => n - 600),
    {
      bounce: 1,
      stiffness: 800,
      damping: 80,
    }
  );

  const hoverState = useMotionValue(0);
  const hoverOpacity = useSpring(hoverState);

  const rotateX = useSpring(useTransform(y, [0, 300], [-5, 5]), {
    bounce: 1,
    stiffness: 800,
    damping: 80,
  });
  const rotateY = useSpring(useTransform(x, [0, 500], [5, -5]), {
    bounce: 1,
    stiffness: 800,
    damping: 80,
  });

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();

    hoverState.set(1);
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function mouseLeave(event: any) {
    hoverState.set(0);
    x.set(250);
    y.set(150);
  }

  return (
    <>
      <section className="flex flex-col items-center relative sm:mx-auto">
        <section className="absolute inset-0 bg-primary shadow-lg transform-rotate-45 rotate-3 rounded-3xl"></section>
        <section
          style={{
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            perspective: 400,
          }}
        >
          <motion.div
            style={{
              background: "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 20,
              rotateX: rotateX,
              rotateY: rotateY,
              overflow: "hidden",
            }}
            onMouseLeave={mouseLeave}
            onMouseMove={handleMouse}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              alt="Me"
              className="w-auto rounded-3xl shadow-lg bg-light-color dark:bg-main-color"
              src="/me.png"
              width={400}
              height={400}
            />

            <motion.div
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,255,255,0.2), rgba(255,255,255,0)) 60%",
                opacity: hoverOpacity,
                x: centeredX,
                y: centeredY,
              }}
            ></motion.div>
          </motion.div>
        </section>
      </section>
    </>
  );
};
