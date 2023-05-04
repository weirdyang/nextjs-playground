import Layout from '../../components/Layout/Layout'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

let seed = [1, 2, 3]
let x = seed.length

function Todo({ item, editItem, removeItem, index }) {
  return (
    <>
      <div
        className="flex-grow h-8 text-left text-ellipsis pt-1"
        onClick={() => editItem(index)}
      >
        {item.text}
      </div>
      <button
        onClick={() => removeItem(item)}
        className="border rounded w-8 h-8"
      >
        &times;
      </button>
    </>
  )
}
function TodoEdit({ item, updateItem, updateText, index, editItem }) {
  return (
    <>
      <motion.input
        className="flex-grow h-8 text-left leading-tight pb-0.5"
        type={'text'}
        value={item.preview}
        initial={{
          fontWeight: 500,
        }}
        animate={{
          fontWeight: 'inherit',
          transition: {
            delay: 0.6,
            duration: 1,
          },
        }}
        onChange={(ex) => updateText(index, ex)}
      />
      <div className="inline-flex">
        <button
          onClick={() => updateItem(index)}
          className="border rounded w-8 h-8 mx-1"
        >
          &crarr;
        </button>
        <button
          onClick={() => editItem(index)}
          className="border rounded w-8 h-8"
        >
          &times;
        </button>
      </div>
    </>
  )
}
export default function () {
  const [items, setItems] = useState([
    { id: '1', text: 'one', edit: false, preview: '' },
    { id: '2', text: 'two', edit: false, preview: '' },
    { id: '3', text: 'three', edit: false, preview: '' },
  ])
  function updateText(index, event) {
    setItems((items) => {
      items[index].preview = event.target.value
      return [...items]
    })
  }
  function addItem() {
    x++
    setItems((items) => [
      ...items,
      {
        id: `${x}`,
        text: 'edit',
        edit: false,
        preview: '',
      },
    ])
  }

  function removeItem(item) {
    setItems((items) => items.filter((i) => i != item))
  }

  function editItem(index) {
    setItems((items) => {
      items[index].edit = !items[index].edit
      items[index].preview = items[index].edit ? items[index].text : ''
      return [...items]
    })
  }
  function updateItem(index) {
    setItems((items) => {
      items[index].text = items[index].preview
      items[index].preview = ''
      items[index].edit = false
      return [...items]
    })
  }
  return (
    <Layout>
      <div className="p-20 container w-4/5">
        <div className="flex justify-between">
          <button onClick={addItem} className="border rounded px-2 py-1">
            Add
          </button>
        </div>

        <ul className="mt-8 border rounded overflow-hidden p-8">
          <AnimatePresence initial={false}>
            {items.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: 'auto',
                  transition: {
                    type: 'spring',
                    bounce: 0.8,
                    opacity: { delay: 0.2 },
                  },
                }}
                exit={{ opacity: 0, height: 0 }}
                layout
                transition={{
                  type: 'spring',
                  bounce: 0.8,
                  opacity: { duration: 0.2 },
                }}
              >
                <div className="border-b flex items-center justify-between py-2">
                  {item.edit ? (
                    <TodoEdit
                      item={item}
                      updateItem={updateItem}
                      updateText={updateText}
                      index={index}
                      editItem={editItem}
                    ></TodoEdit>
                  ) : (
                    <Todo
                      item={item}
                      removeItem={removeItem}
                      editItem={editItem}
                      index={index}
                    ></Todo>
                  )}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </Layout>
  )
}
