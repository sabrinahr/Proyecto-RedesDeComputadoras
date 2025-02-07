// import React from "react"
import { Routes, Route } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import ListUsers from "../components/ListUsers"
import "bootstrap/dist/css/bootstrap.min.css"

function Users() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="users" element={<ListUsers />} />
        </Routes>
      </div>
    </div>
  )
}

export default Users