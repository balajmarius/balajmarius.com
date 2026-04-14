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
    item: (hovered: boolean) => ({
      variants: previewVariants,
      initial: "rest" as const,
      animate: hovered ? "hover" : "rest",
      transition: { duration: 0.2, ease: "easeOut" as const },
    }),
    custom: (folderIndex: number, index: number) => {
      const rotations =
        previewRotationSets[folderIndex % previewRotationSets.length];

      return {
        rotate: rotations?.[index],
        delay: previewDelays[index],
      };
    },
  },
};

const previewRotationSets = [
  [-6, 0, 8],
  [-8, 2, 6],
  [-4, -1, 7],
  [-7, 3, 5],
  [-5, -2, 9],
] as const;

const previewDelays = [0.15, 0.2, 0.25] as const;

const previewVariants = {
  rest: { opacity: 0, y: 64, scale: 0.95, rotate: 0 },
  hover: ({ rotate, delay }: { rotate: number; delay: number }) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate,
    transition: { duration: 0.2, ease: "easeOut" as const, delay },
  }),
};
