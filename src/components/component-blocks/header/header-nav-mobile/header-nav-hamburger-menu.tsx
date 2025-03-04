import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";

type HeaderNavHamburgerMenuProps = {
  onHamburgerClick?: () => void;
};

export const HeaderNavHamburgerMenu = ({
  onHamburgerClick
}: HeaderNavHamburgerMenuProps) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (onHamburgerClick) {
      onHamburgerClick();
    }
    setActive((pv) => !pv);
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => handleClick()}
        className="relative size-10 rounded-md bg-foreground/0 transition-colors hover:bg-background/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-6 bg-foreground"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-6 bg-foreground"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-3 bg-foreground"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 5px)"
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"]
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "30%"]
    }
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"]
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"]
    }
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%"
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "30%"],
      left: "calc(50% + 6px)"
    }
  }
};
