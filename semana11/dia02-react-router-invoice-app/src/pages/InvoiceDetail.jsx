import { Link, useParams } from "react-router-dom"

import { TbChevronLeft } from "react-icons/tb";

import BaseTag from "../components/shared/BaseTag";
import { useEffect, useState } from "react";
import { getInvoice } from "../services/invoices";

const InvoiceDetail = () => {
  const { id } = useParams()
  const [invoice, setInvoice] = useState({})
  
  useEffect(() => {
    getInvoice(id)
      .then(setInvoice)
      // .then(invoice => setInvoice(invoice))
  }, [])

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
          {/* TODO: Crear un componente llamado BaseButton que puede ser reutilizado más abajo */}
          <button className="rounded-full px-5 py-4 font-semibold text-white bg-slate-600">
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

      <section
        className="bg-slate-700 rounded-lg text-white p-10 mt-5 flex flex-col gap-10"
      >
        <div className="flex justify-between w-full">
          <div className="text-3cl">
            <span className="text-slate-400">#</span>
            <span className="font-extrabold">CODE</span>
            <div className="text-xl mt-1">DESCRIPTION</div>
          </div>
          <div className="text-sm text-right">
            <div>ADDRESS</div>
            <div>CITY</div>
            <div>POSTCODE</div>
            <div>ADDRESCOUNTRY</div>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-center w-full">
          <div className="flex flex-col gap-10">
            <div>
              <div className="text-lg">Invoice Date</div>
              <div className="text-xl font-extrabold">DATE</div>
            </div>
            <div>
              <div className="text-lg">Invoice Due</div>
              <div className="text-xl font-extrabold">INVOICE DUE</div>
            </div>
          </div>
          <div>
            <div className="text-lg">Bill to</div>
            <div className="text-xl font-extrabold">CLIENT NAME</div>
            <div className="text-sm">ADDRESS</div>
            <div className="text-sm">CITY</div>
            <div className="text-sm">POSTCODE</div>
            <div className="text-sm">COUNTRY</div>
          </div>
          <div>
            <div className="text-lg">Send to</div>
            <div className="text-xl font-extrabold">EMAIL</div>
          </div>
        </div>

        <table className="bg-slate-600 w-full rounded-lg overflow-hidden">
          <thead>
            <tr>
              <td className="p-4 text-lg font-normal">Item Name</td>
              <td className="p-4 text-lg font-normal text-center w-44">QTY</td>
              <td className="p-4 text-lg font-normal text-center w-44">Price</td>
              <td className="p-4 text-lg font-normal text-right w-44">Total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 text-lg font-bold">ITEM_NAME</td>
              <td className="p-4 text-lg font-bold text-center w-44">QTY</td>
              <td className="p-4 text-lg font-bold text-center w-44">PRICE</td>
              <td className="p-4 text-lg font-bold text-right w-44">TOTAL</td>
            </tr>
            <tr>
              <td className="p-4 text-lg font-bold">ITEM_NAME</td>
              <td className="p-4 text-lg font-bold text-center w-44">QTY</td>
              <td className="p-4 text-lg font-bold text-center w-44">PRICE</td>
              <td className="p-4 text-lg font-bold text-right w-44">TOTAL</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-black">
              <td className="p-4 text-lg font-normal" colSpan={2}>Amount Due</td>
              <td className="p-4 text-4xl font-bold text-right" colSpan={2}>
                556.00
              </td>
            </tr>
          </tfoot>
        </table>
      </section>

      <pre className="text-white">{JSON.stringify(invoice, null, 2)}</pre>

    </main>
  )
}

export default InvoiceDetail