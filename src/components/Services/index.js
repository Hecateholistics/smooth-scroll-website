import React from 'react'
import Icon1 from '../../images/landing_page.svg'
import Icon2 from '../../images/landing_page.svg'
import Icon3 from '../../images/landing_page.svg'
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce</ServicesH2>
                    <ServicesP>We help reduce your...</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Reduce</ServicesH2>
                    <ServicesP>We help reduce your...</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Reduce</ServicesH2>
                    <ServicesP>We help reduce your...</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
