import React from 'react'
import './faqs.css'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Faqs = () => {
  return (
    <>
        <section className="faqs__container container">
            <div className="faqs">
                <Accordion className='acc'>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Why Taka?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur laboriosam hic. Nemo doloribus ratione perferendis odit? Unde reiciendis accusantium voluptatibus eveniet? Placeat perspiciatis omnis laudantium corrupti facilis eius! Tenetur?
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                How do I get a Taka package?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur laboriosam hic. Nemo doloribus ratione perferendis odit? Unde reiciendis accusantium voluptatibus eveniet? Placeat perspiciatis omnis laudantium corrupti facilis eius! Tenetur?
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What areas does Taka offer its services?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur laboriosam hic. Nemo doloribus ratione perferendis odit? Unde reiciendis accusantium voluptatibus eveniet? Placeat perspiciatis omnis laudantium corrupti facilis eius! Tenetur?
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    </>
  )
}

export default Faqs