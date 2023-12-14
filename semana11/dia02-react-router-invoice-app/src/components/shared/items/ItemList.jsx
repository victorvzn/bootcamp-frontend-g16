import { useState } from "react"
import BaseButton from "../BaseButton"
import BaseInput from "../BaseInput"
import { TbTrashFilled } from "react-icons/tb"

const ItemList = () => {
  const DEFAULT_ITEM = {
    name: '',
    qty: 0,
    price: 0.00,
    total: 0.00,
  }

  const [items, setItems] = useState([DEFAULT_ITEM, DEFAULT_ITEM])

  const handleAddItem = () => {
    setItems([...items, DEFAULT_ITEM])
  }

  const handleChange = (event, rowIndex) => {
    const { name, value } = event.target

    // const clonedItems = [...items]

    // const selectedItem = clonedItems[rowIndex]
    
    // const { qty, price } = selectedItem

    // console.log(rowIndex, qty, price)

    // clonedItems[rowIndex][name] = value
    // clonedItems[rowIndex]['total'] = qty * price

    setItems(items => {
      const clonedItems = [...items]

      const selectedItem = clonedItems[rowIndex]
    
      const { qty, price } = selectedItem
  
      console.log(rowIndex, name, value, qty, price, items)
  
      clonedItems[rowIndex][name] = value
      clonedItems[rowIndex]['total'] = qty * price

      return clonedItems
    })
  }

  const handleDeleteIem = (rowIndex) => {
    const clonedItems = [...items]

    clonedItems.splice(rowIndex, 1)

    setItems(clonedItems)
  }

  return (
      <div className="text-white flex flex-col mb-8">
        <div className="grid grid-cols-7 gap-4 items-center">
          <div className='col-span-3'>Item Name</div>
          <div>Qty.</div>
          <div>Price</div>
          <div className="text-center">Total</div>
          <div></div>
        </div>
        {items.length === 0 && (
          <div className="bg-slate-700/10 p-4 my-4 text-center">
            <h1>No hay items</h1>
          </div>
        )}
        {items.map((item, index) => {
          return (
            <div className="grid grid-cols-7 gap-4 items-center" key={index}>
              <BaseInput
                classx='col-span-3'
                name="name"
                placeholder=""
                value={item.name}
                onChange={(event) => handleChange(event, index)}
              />
              <BaseInput
                type="number"
                name="qty"
                placeholder="0"
                value={item.qty}
                onChange={(event) => handleChange(event, index)}
              />
              <BaseInput
                type="number"
                name="price"
                placeholder="0.00"
                value={item.price}
                onChange={(event) => handleChange(event, index)}
              />
              <div className="text-center">{item.total}</div>
              <div className="text-center flex justify-center">
                <div
                  className="rounded-full p-4 duration-300 cursor-pointer hover:bg-red-800/70"
                  onClick={() => handleDeleteIem(index)}
                >
                  <TbTrashFilled className="text-lg" />
                </div>
              </div>
            </div>
        )
      })}

      <BaseButton
        classx='w-full'
        label='+ Add New Item'
        bgColor='bg-slate-800'
        onClick={handleAddItem}
      />
    </div>
  )
}

export default ItemList