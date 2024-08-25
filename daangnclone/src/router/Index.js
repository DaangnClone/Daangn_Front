import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../layout/Layout"));
const Loading = lazy(() => import("../component/Loading"));
const Cardirect = lazy(() => import("../page/cardirect"));
const Chat = lazy(() => import("../page/chat"));
const Localbusiness = lazy(() => import("../page/localbusiness"));
const Main = lazy(() => import("../page/main"));
const Partjob = lazy(() => import("../page/partjob"));
const Realty = lazy(() => import("../page/realty"));
const Trade = lazy(() => import("../page/trade"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "cardirect",
        element: (
          <Suspense fallback={<Loading />}>
            <Cardirect />
          </Suspense>
        ),
      },
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "chat",
        element: (
          <Suspense fallback={<Loading />}>
            <Chat />
          </Suspense>
        ),
      },
      {
        path: "localbusiness",
        element: (
          <Suspense fallback={<Loading />}>
            <Localbusiness />
          </Suspense>
        ),
      },
      {
        path: "partjob",
        element: (
          <Suspense fallback={<Loading />}>
            <Partjob />
          </Suspense>
        ),
      },
      {
        path: "realty",
        element: (
          <Suspense fallback={<Loading />}>
            <Realty />
          </Suspense>
        ),
      },
      {
        path: "trade",
        element: (
          <Suspense fallback={<Loading />}>
            <Trade />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
