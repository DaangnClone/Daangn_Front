// import React, { lazy, Suspense } from 'react';
// import { createBrowserRouter } from 'react-router-dom';

// // const Main = lazy(() => import('../page/main'));

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: 'login',
//         element: (
//           <Suspense fallback={<Loading />}>
//             <Login />
//           </Suspense>
//         ),
//       },
//       {
//         path: '',
//         element: (
//           <Suspense fallback={<Loading />}>
//             <Main />
//           </Suspense>
//         ),
//       },
//       {
//         path: 'achievement',
//         element: (
//           <Suspense fallback={<Loading />}>
//             <Achievement />
//           </Suspense>
//         ),
//       },
//       {
//         path: 'community',
//         element: (
//           <CommunityProvider>
//             <Suspense fallback={<Loading />}>
//               <Community />
//             </Suspense>
//           </CommunityProvider>
//         ),
//         children: communityRouter,
//       },
//       {
//         path: 'mypage',
//         element: (
//           <Suspense fallback={<Loading />}>
//             <Mypage />
//           </Suspense>
//         ),
//         children: mypageRouter,
//       },
//     ],
//   },
// ]);

// export default router;
