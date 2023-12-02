import { TbChevronRight } from "react-icons/tb";

const InvoiceList = ({ invoices }) => {
  return (
    <main className="w-[740px] m-auto flex flex-col gap-5">
      
      {/* {JSON.stringify(invoices)} */}

      {invoices.map(invoice => {
        return (
          <article
            className="bg-slate-700 px-4 py-4 rounded-lg flex justify-between text-white text-base items-center justify-items-center gap-3"
            key={invoice.id}
          >
            <div className="w-20">
              <span className="text-slate-400">#</span>
              <span className="font-extrabold">{invoice.code}</span>
            </div>
            <div className="w-44 font-semibold">{invoice.invoice.date}</div>
            <div className="w-44 font-semibold">{invoice.bill.to.client.name}</div>
            <div className="w-44 text-3xl font-extrabold">
              {invoice.invoice.grandTotal}
            </div>
            <div>
              {invoice.status}
            </div>
            <div className="w-10 flex justify-center">
              <TbChevronRight />
            </div>
          </article>
        )
      })}
    </main>
  )
}

export default InvoiceList