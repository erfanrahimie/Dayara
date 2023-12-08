// Import the react-toastify package
import { ToastContainer, toast } from 'react-toastify';

// Create a ToastContainer component
export const toastContainer = (
  <ToastContainer
    position="top-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover={false}
    theme="dark"
  />
);

// Define the default properties for toasts
const TOAST_STYLE = {
  position: 'top-left',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

// Export functions to display toasts of different types
export const toastInfo = (message) => { toast.info(message, TOAST_STYLE) };

export const toastSuccess = (message) => { toast.success(message, TOAST_STYLE) };

export const toastWarning = (message) => { toast.warning(message, TOAST_STYLE) };

export const toastError = (message) => { toast.error(message, TOAST_STYLE); };

export const toastDefault = (message) => { toast(message, TOAST_STYLE) };
