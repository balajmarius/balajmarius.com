export const scrollTransforms = {
  scale: {
    enter: [0, 1],
    exit: [1, 0.95],
  },
  borderRadius: {
    enter: [0, 1],
    exit: [0, 24],
  },
};

export const appBarAnimation = {
  container: {
    initial: { opacity: 0, height: 0, marginTop: 0 },
    animate: { opacity: 1, height: "auto" as const, marginTop: 12 },
    exit: { opacity: 0, height: 0, marginTop: 0 },
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] as const },
  },
  innerContainer: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] as const },
  },
  item: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: (index: number) => ({
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.33, 1, 0.68, 1] as const,
    }),
  },
};

export const titleAnimation = {
  letterUp: {
    rest: { y: 0, opacity: 1, filter: "blur(0px)" },
    hover: { y: -20, opacity: 0, filter: "blur(4px)" },
  },
  letterDown: {
    rest: { y: 20, opacity: 0, filter: "blur(4px)" },
    hover: { y: 0, opacity: 1, filter: "blur(0px)" },
  },
  transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] as const },
};
