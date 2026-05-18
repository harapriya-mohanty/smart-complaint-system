function AnalyticsSection() {

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg">

      <h2 className="text-2xl font-bold mb-6">
        Complaint Distribution
      </h2>

      <div className="space-y-6">

        <div>

          <div className="flex justify-between mb-2">

            <span>Electrical</span>
            <span>70%</span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-4">

            <div className="bg-blue-600 h-4 rounded-full w-[70%]"></div>

          </div>

        </div>

        <div>

          <div className="flex justify-between mb-2">

            <span>Garbage</span>
            <span>50%</span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-4">

            <div className="bg-green-600 h-4 rounded-full w-[50%]"></div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AnalyticsSection;