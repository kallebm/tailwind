export default function Home() {
  return (
    <div className="h-screen bg-slate-900 text-white">
      <div className=" container mx-auto">
        <div className="grid  grid-flow-dense gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-lg bg-blue-500 p-6 ">First Collumns</div>
          <div className="rounded-lg bg-blue-500 p-6"> Second Collumns</div>
          <div className="rounded-lg bg-blue-500 p-6 ">Third Collumns</div>
          <div className="rounded-lg bg-blue-500 p-6 ">Fourth Collumns</div>
          <div className="rounded-lg bg-blue-500 p-6 ">Fifth Collumns</div>
          <div className="rounded-lg bg-blue-500 p-6 ">Sixth Collumns</div>
        </div>
      </div>
    </div>
  );
}
