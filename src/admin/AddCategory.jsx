import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function AddCategory() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "categories"), {
        name,
        createdAt: new Date(),
      });

      alert("Category added");
      setName("");
    } catch (err) {
      alert("Error adding category");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Add Category</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Category name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-800"
        >
          {loading ? "Saving..." : "Add Category"}
        </button>
      </form>
    </div>
  );
}

export default AddCategory;
