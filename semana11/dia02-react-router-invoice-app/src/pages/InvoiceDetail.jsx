import { Link } from "react-router-dom"

import { TbChevronLeft } from "react-icons/tb";

import BaseTag from "../components/shared/BaseTag";

const InvoiceDetail = () => {
  return (
    <main className="w-[740px] m-auto flex flex-col gap-5">
      <Link
        to='/invoices'
        className="text-white font-bold flex gap-5 items-center"
      >
        <TbChevronLeft className="text-slate-400" />
        Go back
      </Link>

      <header
        className="flex justify-between items-center bg-slate-700 py-4 px-8 mt-10 rounded-lg"
      >
        <div className="flex items-center text-white gap-3">
          <h3>Status</h3>
          <BaseTag
            label='Pending'
            bgColor='bg-orange-400/20'
            dotColor='text-orange-400'
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-full px-5 py-4 font-semibold text-white bg-slate-800">
            Edit
          </button>

          <button className="rounded-full px-5 py-4 font-semibold text-white bg-red-500">
            Delete
          </button>

          <button className="rounded-full px-5 py-4 font-semibold text-white bg-violet-500">
            Mark as Paid
          </button>
        </div>
      </header>

      <section>
        
      </section>
    </main>
  )
}

export default InvoiceDetail