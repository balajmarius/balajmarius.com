import createMdxConfig from "@next/mdx";

const mdxConfig = createMdxConfig();

export default mdxConfig({
  output: "export",
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
});
