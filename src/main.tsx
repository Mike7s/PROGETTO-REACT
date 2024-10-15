import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RecipeDetail from './components/recipesDetails.tsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: '/recipe/:recipeId', 
    element: <RecipeDetail />,
  },
])
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
