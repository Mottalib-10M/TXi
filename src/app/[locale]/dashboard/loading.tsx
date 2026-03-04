export default function DashboardLoading() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-neutral-200 rounded-lg w-48 mb-2" />
      <div className="h-4 bg-neutral-100 rounded w-64 mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white border border-neutral-200 rounded-2xl p-6">
            <div className="h-4 bg-neutral-100 rounded w-24 mb-3" />
            <div className="h-8 bg-neutral-200 rounded w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}
