import WorkerCard from "./components/WorkerCard";
import { useEffect, useState } from "react";
import { getAllWorkers } from "../../services/adminService";
import { getComplaints } from "../../services/complaintService";

function WorkersPage({ onOpenWorkerTasks }) {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    const run = async () => {
      setLoading(true);
      setError("");
      try {
        const [workersRes] = await Promise.all([getAllWorkers(), getComplaints()]);
        if (!ignore) {
          setWorkers(workersRes.data || []);
        }
      } catch (e) {
        if (!ignore) setError(e.response?.data?.message || "Failed to load workers");
      } finally {
        if (!ignore) setLoading(false);
      }
    };
    run();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg">

      <h1 className="text-3xl font-bold mb-2">
        Worker Management
      </h1>

      <p className="text-gray-500 mb-8">
        Assign and monitor workers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && workers.length === 0 && (
          <p className="text-gray-500">No workers found.</p>
        )}

        {workers.map((w) => (
          <WorkerCard
            key={w._id}
            name={w.name}
            subtitle={w.email}
            statusLabel={w.isActive ? "Active" : "Inactive"}
            onViewTasks={() => onOpenWorkerTasks?.(w._id)}
          />
        ))}

      </div>

    </div>
  );
}

export default WorkersPage;
