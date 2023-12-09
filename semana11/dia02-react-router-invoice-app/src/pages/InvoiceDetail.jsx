import { Link, useParams, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

import { TbChevronLeft } from "react-icons/tb";

import BaseTag from "../components/shared/BaseTag";
import { useEffect, useState } from "react";
import { deleteInvoice, getInvoice, updateInvoiceStatus } from "../services/invoices";
import BaseButton from "../components/shared/BaseButton";

const InvoiceDetail = () => {
  const navigate = useNavigate()

  const { id } = useParams()
  const [invoice, setInvoice] = useState(null)
  const [refresh, setRefresh] = useState(0)
  
  useEffect(() => {
    getInvoice(id)
      .then(setInvoice)
      // .then(invoice => setInvoice(invoice))
  }, [refresh])

  if (!invoice) {
    return (
      <h1>No hay data</h1>
    )
  }

  const handleMarkAsPaid = async () => {
    console.log('mark as paid clicked...')

    const res = await updateInvoiceStatus(id, 'paid')

    if (res) {
      setRefresh(refresh + 1) 
    }
  }

  const handleInvoiceDelete = async () => {
    console.log('deleting invoice...', id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí vamos a hacer la petición para eliminar el invoice con su id
        deleteInvoice(id)
          .then(res => {
            if (res) {
              Swal.fire({
                title: "Deleted!",
                text: "Your invoice has been deleted.",
                icon: "success"
              });
              navigate('/invoices')
            }
          })
      }
    });
  }

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
          {invoice.status === 'paid'
            && <BaseTag label={invoice.status} bgColor='bg-emerald-400/20' dotColor='text-emerald-400'  />
          }
          {invoice.status === 'pending'
            && <BaseTag label={invoice.status} bgColor='bg-orange-400/20' dotColor='text-orange-400'  />
          }
          {invoice.status === 'draft'
            && <BaseTag label={invoice.status} bgColor='bg-slate-400/20' dotColor='text-slate-400'  />
          }
        </div>

        <div className="flex items-center gap-3">
          {/* TODO: Crear un componente llamado BaseButton que puede ser reutilizado más abajo */}
          <Link to={`/invoices/${id}/edit`}>
            <BaseButton
              label='Edit'
              bgColor='bg-slate-600'
            />
          </Link>

          <BaseButton
            label='Delete'
            bgColor='bg-red-500'
            onClick={handleInvoiceDelete}
          />

          <BaseButton
            label='Mark as Paid'
            bgColor='bg-violet-500'
            onClick={handleMarkAsPaid}
          />
        </div>
      </header>

      <section
        className="bg-slate-700 rounded-lg text-white p-10 mt-5 flex flex-col gap-10"
      >
        <div className="flex justify-between w-full">
          <div className="text-3cl">
            <span className="text-slate-400">#</span>
            <span className="font-extrabold">{invoice?.code}</span>
            <div className="text-xl mt-1">{invoice?.invoice?.project?.description}</div>
          </div>
          <div className="text-sm text-right">
            <div>{invoice?.bill.from.streetAddress}</div>
            <div>{invoice?.bill.from.city}</div>
            <div>{invoice?.bill.from.postCode}</div>
            <div>{invoice?.bill.from.country}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-center w-full">
          <div className="flex flex-col gap-10">
            <div>
              <div className="text-lg">Invoice Date</div>
              <div className="text-xl font-extrabold">{invoice?.invoice.date}</div>
            </div>
            <div>
              <div className="text-lg">Invoice Due</div>
              <div className="text-xl font-extrabold">{invoice?.invoice.date}</div>
            </div>
          </div>
          <div>
            <div className="text-lg">Bill to</div>
            <div className="text-xl font-extrabold">{invoice?.bill.to.client.name}</div>
            <div className="text-sm">{invoice?.bill.to.streetAddress}</div>
            <div className="text-sm">{invoice?.bill.to.city}</div>
            <div className="text-sm">{invoice?.bill.to.postCode}</div>
            <div className="text-sm">{invoice?.bill.to.country}</div>
          </div>
          <div>
            <div className="text-lg">Send to</div>
            <div className="text-xl font-extrabold">
              {invoice?.bill.to.client.email}
            </div>
          </div>
        </div>

        <table className="bg-slate-600 w-full rounded-lg overflow-hidden">
          <thead>
            <tr>
              <td className="p-4 text-base font-normal">Item Name</td>
              <td className="p-4 text-base font-normal text-center w-44">QTY</td>
              <td className="p-4 text-base font-normal text-center w-44">Price</td>
              <td className="p-4 text-base font-normal text-right w-44">Total</td>
            </tr>
          </thead>
          <tbody>
            {invoice?.invoice.items.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="p-4 text-sm font-bold">{item.name}</td>
                  <td className="p-4 text-sm font-bold text-center w-44">{item.qty}</td>
                  <td className="p-4 text-sm font-bold text-center w-44">{item.price}</td>
                  <td className="p-4 text-sm font-bold text-right w-44">
                    {invoice?.invoice.currency?.symbol}
                    {item.total}
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr className="bg-black">
              <td className="p-4 text-lg font-normal" colSpan={2}>Amount Due</td>
              <td className="p-4 text-4xl font-bold text-right" colSpan={2}>
                {invoice?.invoice.currency?.symbol}
                {invoice?.invoice?.grandTotal}
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