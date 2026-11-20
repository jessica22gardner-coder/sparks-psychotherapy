import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  // Basepath comes from the Vite build base (import.meta.env.BASE_URL):
  // "/" on Hostinger (domain root), "/sparks-psychotherapy/" for the GitHub Pages
  // preview. A trailing slash is stripped; "/" stays "/".
  const basepath = import.meta.env.BASE_URL.replace(/\/+$/, "") || "/";

  const router = createRouter({
    routeTree,
    basepath,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
