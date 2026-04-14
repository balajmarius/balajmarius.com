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

const previewRotationSets = [
  [-6, 0, 8],
  [-8, 2, 6],
  [-4, -1, 7],
  [-7, 3, 5],
  [-5, -2, 9],
] as const;

const previewContainerVariants = {
  rest: {},
  hover: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const previewVariants = {
  rest: { opacity: 0, y: 64, scale: 0.95, rotate: 0 },
  hover: ({ rotate }: { rotate: number }) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate,
    transition: { duration: 0.15, ease: "easeOut" as const },
  }),
};

export const foldersListAnimation = {
  overlay: (hovered: boolean) => ({
    initial: false as const,
    animate: { y: hovered ? -32 : 0 },
    transition: { duration: 0.3, ease: "easeOut" as const },
  }),
  overlayBorder: (hovered: boolean) => ({
    initial: false as const,
    animate: { opacity: hovered ? 1 : 0 },
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
      delay: hovered ? 0 : 0.075,
    },
  }),
  preview: {
    container: (hovered: boolean) => ({
      initial: "rest" as const,
      animate: hovered ? "hover" : "rest",
      variants: previewContainerVariants,
    }),
    item: {
      variants: previewVariants,
    },
    custom: (folderIndex: number, index: number) => {
      const rotations =
        previewRotationSets[folderIndex % previewRotationSets.length];

      return {
        rotate: rotations?.[index],
      };
    },
  },
};
