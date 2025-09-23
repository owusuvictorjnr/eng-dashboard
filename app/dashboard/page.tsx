import KpiOkr from "@/components/KpiOkr";

function Dashboard() {
  return (
    <main className="min-h-screen p-10">
      <div className="min-h-40 mb-4">
        <h1 className="uppercase text-2xl font-bold ">
          kpi / okr <span className="capitalize">cards</span>{" "}
        </h1>
        <KpiOkr />
      </div>
    </main>
  );
}

export default Dashboard;
