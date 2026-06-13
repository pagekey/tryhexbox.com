import Features from "@/components/Features"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Layout from "@/components/Layout"
import Order from "@/components/Order"
import YamlPreview from "@/components/YamlPreview"
import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
        if (window.location.hash === '#Order') {
            const element = document.getElementById('Order');
            if (element) {
                // Small timeout ensures DOM is fully painted
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    return <Layout>
        <Hero />
        <Features />
        <YamlPreview />
        <HowItWorks />
        <Order />
    </Layout>
}
