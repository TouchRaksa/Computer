import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to="/admin/add-product"
          className="bg-blue-600 text-white p-4 rounded text-center hover:bg-blue-800"
        >
          ➕ Add Product
        </Link>

        <Link
          to="/admin/add-category"
          className="bg-green-600 text-white p-4 rounded text-center hover:bg-green-800"
        >
          🗂 Add Category
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
