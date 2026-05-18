function WorkerCard({ name, subtitle, statusLabel, onViewTasks }) {

  return (
    <div className="border border-gray-200 rounded-2xl p-4 md:p-6 hover:shadow-lg transition">

      <h2 className="text-2xl font-semibold">
        {name}
      </h2>

      <p className="text-gray-500 mt-1">
        {subtitle}
      </p>

      <div className="mt-4 flex justify-between items-center">

        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full">
          {statusLabel}
        </span>

        <button
          type="button"
          onClick={onViewTasks}
          className="bg-slate-900 text-white px-4 py-2 rounded-xl"
        >
          View Tasks
        </button>

      </div>

    </div>
  );
}

export default WorkerCard;
