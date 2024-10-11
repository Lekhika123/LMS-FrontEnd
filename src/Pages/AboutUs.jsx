import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import apj from "../Assets/Images/apj.png";
import billGates from "../Assets/Images/billGates.png";
import einstein from "../Assets/Images/einstein.png";
import nelsonMandela from "../Assets/Images/nelsonMandela.png";
import steveJobs from "../Assets/Images/steveJobs.png";
import CarouselSlide from "../Components/CarouselSlide.jsx";
// import { celebrities } from "../Constants/CelebrityData";
import HomeLayout from "../Layouts/HomeLayout";

function AboutUs() {

    const celebrities = [
        {
            title: "Nelson Mandela",
            description: "Education is the most powerful tool you can use to change the world.",
            image: nelsonMandela,
            slideNumber: 1
        },
        {
            title: "APJ Abdul Kamal",
            description: "Failure will never overtake me if my determination to succeed is strong enough.",
            image: apj,
            slideNumber: 2
        },
        {
            title: "Albert Einstein",
            description: "A person who never made a mistake never tried anything new.",
            image: einstein,
            slideNumber: 3
        },
        {
            title: "Steve Jobs",
            description: "We don't get a chance to do that many things, and every one should be really excellent.",
            image: steveJobs,
            slideNumber: 4
        },
        {
            title: "Bill Gates",
            description: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
            image: billGates,
            slideNumber: 5
        },
    ]

    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide the afordable and quality education to the world.
                            We are providing the platform for the aspiring teachers and students to share
                            their skills, creativity and knowledge to each other to empower and contribute
                            in the growth and wellness of mankind.
                        </p>
                    </section>

                    <div className="w-1/2">
                        <img
                            id="test1"
                            style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"
                            }}
                            alt="about main image"
                            className="drop-shadow-2xl"
                            src={aboutMainImage}
                        />
                    </div>
                </div>

                <div className="carousel w-1/2 m-auto my-16">
                    {celebrities && celebrities.map(celebrity => (<CarouselSlide
                        {...celebrity}
                        key={celebrity.slideNumber}
                        totalSlides={celebrities.length}

                    />))}

                </div>


            </div>
        </HomeLayout>
    );
}


export default AboutUs;