import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Order from "@/components/Order"
import YamlPreview from "@/components/YamlPreview"

export default function Home() {
    return <>
        <Hero />
        <Features />
        <YamlPreview />
        <HowItWorks />
        <Order />
        <Footer />
    </>
}
