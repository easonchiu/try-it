import { Route, Routes } from "react-router-dom"
import PageA from "../pages/a"
import PageB from "../pages/b"

function NotFound() {
  return <div>404 not found</div>
}

function PageRoutes() {
  return (
    <>
      <h2>Title</h2>
      <Routes>
        <Route path="/a" element={<PageA />} />
        <Route path="/b" element={<PageB />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default PageRoutes