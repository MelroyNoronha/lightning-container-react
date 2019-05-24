import React ,{useState} from "react";
import "../../../assets/styles/salesforce-lightning-design-system.css";
import Symbols from "../../../assets/icons/utility-sprite/svg/symbols.svg";
import SVG from "react-inlinesvg";

export const Notes = () => {
    const [expanded,setExpanded] = useState(false);

    return (
        <div className="slds-var-m-around_xx-small">
            <article className="slds-card">
            <div className="slds-card__body slds-card__body_inner">
                <ul className="slds-accordion">
                    <li className="slds-accordion__list-item">
                        <section className={`slds-accordion__section ${expanded===true?"slds-is-open":null}`}>
                            <div className="slds-accordion__summary">
                                <h3 className="slds-accordion__summary-heading">
                                    <button onClick={()=>setExpanded(!expanded)} aria-controls="accordion-details-01" aria-expanded="true"
                                        className="slds-button slds-button_reset slds-accordion__summary-action">
                                        <SVG className="slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left"
                                            aria-hidden="true" src={`${Symbols}#switch`}/>
                                        <span className="slds-truncate" title="Accordion summary">Notes</span>
                                    </button>
                                </h3>

                            </div>
                             {expanded===true&&<div className="slds-grid slds-gutters">
                                <div className="slds-col slds-size_1-of-2">
                                    <div className="slds-region_narrow">
                                        <dl className="slds-dl_horizontal">
                                            <dt className="slds-dl_horizontal__label slds-border_bottom slds-m-top_x-small">
                                                Notes:</dt>
                                            <dd
                                                className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small">
                                                Mira is a pharm D at cedar</dd>

                                        </dl>
                                    </div>
                                </div>
                                <div className="slds-col slds-size_1-of-2">
                                    <div className="slds-region_narrow">
                                        <dl className="slds-dl_horizontal">
                                            <dt className="slds-dl_horizontal__label slds-border_bottom slds-m-top_x-small">
                                                Created By:</dt>
                                            <dd
                                                className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small">
                                                Andrea DeMont, 5/10/2017 12:02</dd>
                                            <dt
                                                className="slds-dl_horizontal__label slds-border_bottom slds-margin slds-m-top_x-small">
                                                Last Modified By:</dt>
                                            <dd
                                                className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small">
                                                LOREM IPSUM
                                            </dd>

                                        </dl>
                                    </div>
                                </div>
                            </div>}
                        </section>
                    </li>
                </ul>


            </div>
        </article>
        </div>
        

    
    );
}