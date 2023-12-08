import Header from "../components/Header"
import InvoiceList from "../components/invoices/InvoiceList"

const Invoices = ({ invoices }) => {
  return (
    <>
      <Header title='Invoices' />

      <InvoiceList invoices={invoices} />
    </>
  )
}

export default Invoices