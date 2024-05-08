import { useOutlet } from "react-router-dom"
import { Navbar } from "../../Navbar/Navbar";
import { Footer } from "../../Footer/Footer";

export function Layout(){
    const outlet = useOutlet();
    return (
        <div style={{ paddingBottom: '100px' }}>
        <Navbar />
        {outlet}
        <Footer/>
        </div>
    )
}