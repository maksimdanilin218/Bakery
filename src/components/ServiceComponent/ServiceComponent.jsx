import style from "./ServiceComponent.module.css"
import ServiceBanner from "./ServiceBanner/ServiceBanner"
import ServiceSection from "./ServiceList/ServiceList"

export default function ServiceComponent(){
    return(
        <div className="">
            <ServiceBanner />
            <ServiceSection />
        </div>
    )
}