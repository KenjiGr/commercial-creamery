import React, { useEffect, useState } from "react";

function Home(){
    const images = ['One','Two','Three','Four'];
    const [image, setImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(image === images.length - 1){
                setImage(0)
            }
            else{
                setImage(image + 1);
            }
        }, 20000)
        return () => {
            clearInterval(interval)
        }
    },[image, images.length])

    return(
        <div>
            <div>
                <h1>Bringing flavor to the world for over a century!</h1>
                <img src={require(`../photos/top_image_${images[image]}.jpg`)} alt="Spices"/>
                <h1>Our Story</h1>
                <p>Founded in 1908, Commercial Creamery is a leading manufacturer of cheese
powder, specialty dairy powders, and seasonings. From our production facility in
Jerome, Idaho, we serve thousands of clients in the United States and throughout
the world, and currently export our products to more than 30 countries. Our
products are used in a wide range of applications such as snack foods, soups and
sauces, dressings and dips, pet foods, beverages, baking, nutraceuticals, entrees,
and flavor applications.</p>
                <p>We view our customers as partners and have built our business on our ability to
react quickly to their needs while keeping quality and safety as our highest priority</p>
            </div>
            <div>
                <img src={require("../photos/Cow_Image.jpg")} alt='cow'/>
                <h1>What Makes Us Different</h1>
                <p>We pride ourselves on being a family-owned business for four generations,
keeping the same level of quality throughout the years. Since our doors opened
in 1908 we have dedicated our company to providing quality powders for business
all across the country and even the world. We give you flexibility with your ordering,
working with two- to six-ton quantities so you get the amount you need.</p>
                <ul>
                    <li>Exceptional, Tailored Service</li>
                    <li>Unmatched Quality</li>
                    <li>SQF Certified</li>
                    <li>Organic, Kosher, Halal, Non-GMO Project Verifiable, and Conventional Options</li>
                    <li>Custom Blending and Specialty Flavors</li>
                </ul>
            </div>
            <div>
                <img src={require(`../photos/landscape_Image_${images[image]}.jpg`)} alt='landscape'/>
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
augue duis dolore te feugait nulla facilisi.</p>
                <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip </p>
            </div>
        </div>
    )
}
export default Home