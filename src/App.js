import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Main from "./components/Main.js"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from "react-router-dom"
import MiProvider from "./context/cartContext.js"

const App = () => {
    return (
        <BrowserRouter>
            <MiProvider>
                <Header/>
                <Main/>
            </MiProvider>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App