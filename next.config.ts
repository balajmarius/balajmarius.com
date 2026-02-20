import createMdxConfig from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const withMdx = createMdxConfig();
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(
  withMdx({
    output: "export",
    trailingSlash: true,
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    images: {
      unoptimized: true,
    },
  })
);
