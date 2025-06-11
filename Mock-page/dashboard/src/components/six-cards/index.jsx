import React from 'react'
import Section from '../section';

const SixCards = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-3">
        <Section 
            imageLink={"https://www.apple.com/v/home/cf/images/promos/wwdc25-os/promo_wwdc25_os__fag35zt85taq_medium.jpg"}
            sectionTitle={"iPHONE"} 
            secondHeader={"Meet the iPhone 16 Family."}
            buttons={["Learn More", "Shop iPhone"]}
            subText={"Built for Apple Intelligence"}
        />
        <Section 
            imageLink={"https://www.apple.com/v/home/cf/images/promos/college-students/promo_college_students__bxqdcoxgjzw2_medium.jpg"}
            sectionTitle={"iPHONE"} 
            secondHeader={"Meet the iPhone 16 Family."}
            buttons={["Learn More", "Shop iPhone"]}
            subText={"Built for Apple Intelligence"}
        />
        <Section 
            imageLink={"https://www.apple.com/v/home/cf/images/promos/fathers-day-2025/promo_fd25__d71460jqkas2_medium.png"}
            sectionTitle={"iPHONE"} 
            secondHeader={"Meet the iPhone 16 Family."}
            buttons={["Learn More", "Shop iPhone"]}
            subText={"Built for Apple Intelligence"}
        />
        <Section 
            imageLink={"https://www.apple.com/v/home/cf/images/promos/ipad-air/promo_ipad_air__bfbxzvw65c02_medium.jpg"}
            sectionTitle={"iPHONE"} 
            secondHeader={"Meet the iPhone 16 Family."}
            buttons={["Learn More", "Shop iPhone"]}
            subText={"Built for Apple Intelligence"}
        />
        <Section 
            imageLink={"https://www.apple.com/v/home/cf/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_medium.jpg"}
            sectionTitle={"iPHONE"} 
            secondHeader={"Meet the iPhone 16 Family."}
            buttons={["Learn More", "Shop iPhone"]}
            subText={"Built for Apple Intelligence"}
        />
        <Section 
            imageLink={"https://www.apple.com/v/home/cf/images/promos/apple-card/promo_apple_card__5cm7draujpey_medium.jpg"}
            sectionTitle={"iPHONE"} 
            secondHeader={"Meet the iPhone 16 Family."}
            buttons={["Learn More", "Shop iPhone"]}
            subText={"Built for Apple Intelligence"}
        />
    </div>
  )
}

export default SixCards;