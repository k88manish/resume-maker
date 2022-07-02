import Header from "~/Components/Header";
import Modal from "~/Components/Modal";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className="flex h-full min-h-screen flex-col bg-slate-100 py-10">
        <div className="mx-auto h-full w-2/3 bg-white p-16">
          <div data-id="personal-info" className="hover:bg-violet-50">
            <p className="text-4xl font-bold">Manish Kumar</p>
            <p>k88.manish@gmail.com</p>
            <p>+66 840875768</p>
            <p>Bangchak</p>
            <p>Bangkok, Thailand</p>
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
}
