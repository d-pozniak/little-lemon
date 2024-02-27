import HeroSection from "../heroSection/HeroSection";
import Specials from "../specials/Specials";
import CustomersSay from "../customersSay/CustomersSay";
import Chicago from "../chicago/Chicago";

export default function Homepage() {
    return (
        <main>
            <HeroSection/>
            <Specials/>
            <CustomersSay/>
            <Chicago/>
        </main>
    )
}
