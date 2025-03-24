import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const success = () => toast.success('Success!')
export const failed = () => toast.error('Error!')
export const dynamicFailed = (err: string) => toast.error(err)

export const useToast = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      draggable
      pauseOnHover
      theme="light"
      limit={1}
    />
  )
}
