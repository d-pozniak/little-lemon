import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Reservation from "./reservation/Reservation";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/booking" element={<Reservation />} />
        </Routes>
    );
}
