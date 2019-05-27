import React from "react";
import "../../../assets/styles/salesforce-lightning-design-system.css";
import Symbols from "../../../assets/icons/action-sprite/svg/symbols.svg";
import {sendDeleteRequest} from "../../../middleware/DCRMiddleware";

export default class DCRDetail extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            hardCodedDCRName: "DCR000000361"
        }

    }

    handleClickEvent(event){
        sendDeleteRequest(this.state.hardCodedDCRName);
    }   

    render(){
        return (
            <div className="slds-var-m-around_xx-small	">
                <article className="slds-card">
                    <div className="slds-card__header slds-grid">
                        <header className="slds-media slds-media_center slds-has-flexi-truncate">
                            <div className="slds-media__figure">
                                <span className="slds-icon_container slds-icon_container_circle slds-icon-action-description"
                                    title="Description of icon when needed">
                                    <svg className="slds-icon" aria-hidden="true">
                                        <use xlinkHref={`${Symbols}#description`}></use>
                                    </svg>
                                    <span className="slds-assistive-text">Description of icon when needed</span>
                                </span>
                            </div>
                            <div className="slds-media__body">
                                <h2 className="slds-card__header-title">
                                    <span>Data Change request detail</span>
                                </h2>
                            </div>
                            <div className="slds-no-flex">
                                <button id="deleteDCRButton" className="slds-button slds-button_neutral" onClick={this.handleClickEvent.bind(this)}>Delete</button>
                            </div>
                        </header>
                    </div>
                </article>
            </div>
        );
    }
    
}