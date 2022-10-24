import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
import Terms from './Components/Terms/Terms';
import FAQ from './Components/FAQ/FAQ';
import Blog from './Components/Blog/Blog';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "home",
          element: <Home></Home>,
          loader:  ()=> {
            return fetch('https://nodejs-practise-kowcher99.vercel.app/exercise/')
          },
          errorElement: <Error></Error>
        },
        {
          path: "/",
          element: <Home/>,
          errorElement: <Error></Error>
        },
        {
          path: "/orders",
          element: <PrivateRoute><Orders></Orders></PrivateRoute>,
          errorElement: <Error></Error>
        },
        {
          path: "login",
          element: <Login></Login>,
          errorElement: <Error></Error>
        },
        {
          path: "/register",
          element: <Register></Register>,
          errorElement: <Error></Error>
        },
        {
          path: "/terms",
          element: <Terms></Terms>,
          errorElement: <Error></Error>
        },
        {
          path: "faq",
          element: <FAQ></FAQ>,
          errorElement: <Error></Error>
        },
        {
          path: "blog",
          element: <Blog></Blog>,
          errorElement: <Error></Error>
        },
        { path: '*', element: <Error/>},
      ],
    },
  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
