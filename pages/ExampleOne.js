import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleOne() {
    const [number, setNumber] = useState(0);

    /** usually this will cause an infinite loop so it is 
     * best not to do this in case your code breaks
     * code on pages will run two times.
     * once to render what we want and another is to 
     * render strict moe to find any common bugs
     */

    useEffect(() => {
        console.log(number);
    })

    return(
        <>
            <Header/>
            <main>
                <h1>Example 1</h1>
                <div>Infinite loop</div>
                {number}
            </main>
            <Footer/>
        </>
    )
}