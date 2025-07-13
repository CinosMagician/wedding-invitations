import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useLocation, Outlet } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import App from './App';
import ScrollToTop from './components/tools/ScrollToTop';
import Thanks from './components/pages/Thanks';
import './fade.css';
import Wedding from './components/pages/Wedding';
import Lost from './components/pages/404';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Outlet />
      </CSSTransition>
    </TransitionGroup>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
        <>
          <ScrollToTop />
          <AnimatedRoutes />
        </>
        ),
        children: [
          {
            index: true,
            element: <Wedding />,
          },
          {
            path: '404',
            element: <Lost />
          },
          {
            path: 'thank-you',
            element: <Thanks />
          }
          // {
          //   path: 'portfolio',
          //   element: <Portfolio />,
          // },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);