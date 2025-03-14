export const headerNavMenuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1
    }
  }
};

export const headerNavMenuLinkVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: -10,
    opacity: 0
  }
};
