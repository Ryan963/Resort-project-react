import React, { Fragment } from 'react'
import {Hero} from "../components/Hero"
import {Banner} from '../components/Banner'
import FeaturedRooms from '../components/FeaturedRooms'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
export const Home = () => {
    return (
        <Fragment>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms/>
        </Fragment>
    )
}
