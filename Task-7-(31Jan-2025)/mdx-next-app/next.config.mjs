// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
// })

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm], // Enables GitHub Flavored Markdown (tables, task lists)
    rehypePlugins: [rehypeSlug], // Adds automatic IDs to headings
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
