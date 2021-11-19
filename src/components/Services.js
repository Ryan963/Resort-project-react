import React, { useState } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

const Services =  () => {
    const [services, setServices] = useState([
        {
            icon: <FaCocktail/>,
            title: "free cockTails",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, quae!"
        },
        {
            icon: <FaHiking/>,
            title: "Endless Hiking",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, quae!"
        },
        {
            icon: <FaShuttleVan/>,
            title: "Free Shuttle",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, quae!"
        },
        {
            icon: <FaBeer/>,
            title: "Strongest Beer",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, quae!"
        }
    ])
    return (
        <section className="services">
            <Title title="services"/>
            <div className="services-center">
                {services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>

                        </article>
                    )
                })}
            </div>
        </section>
    )

}
export default Services
