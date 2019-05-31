import React from "react";
import "../../../assets/styles/salesforce-lightning-design-system.css";
import Symbols from "../../../assets/icons/action-sprite/svg/symbols.svg";
import { deleteDCRByName, getAllDCRNames, sendMessageToLightningContainer } from "../../../middleware/DCRMiddleware";

export default class DCRDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hardCodedDCRName: "DCR000000361"
        }

    }

    handleClick(event) {
        deleteDCRByName(this.state.hardCodedDCRName).then(response => {
            console.log("DCR delete completed successfully");
            console.log(response);
        }).catch(err => console.log(err));
    }

    componentDidMount() {
        sendMessageToLightningContainer("message from DCRDetail component did mount");

        getAllDCRNames().then(response => {
            console.log("DCR names apex request completed successfully");
            console.log(response);
        }).catch(err => console.log(err));
    }

    render() {
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
                                <button className="slds-button slds-button_neutral" onClick={this.handleClick.bind(this)}>Delete</button>
                            </div>
                        </header>
                    </div>
                    <div className="slds-card__body slds-card__body_inner">
                        <div className="slds-grid slds-gutters">
                            <div className="slds-col slds-size_1-of-2">
                                <div className="slds-region_narrow">
                                    <dl className="slds-dl_horizontal">
                                        <dt className="slds-dl_horizontal__label slds-border_bottom slds-m-top_x-small">Data Change
                                    Request Name:</dt>
                                        <dd className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small">
                                            DCR000000361</dd>
                                        <dt className="slds-dl_horizontal__label slds-border_bottom slds-margin slds-m-top_x-small">
                                            Account:</dt>
                                        <dd className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small">
                                        </dd>
                                        <dt className="slds-dl_horizontal__label slds-border_bottom slds-margin slds-m-top_x-small">
                                            Address:</dt>
                                        <dd className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small">
                                        </dd>
                                        <dt className="slds-dl_horizontal__label slds-border_bottom slds-margin slds-m-top_x-small">
                                            Child Account:</dt>
                                        <dd className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small">CA8845435
                                </dd>
                                        <dt className="slds-dl_horizontal__label slds-border_bottom slds-margin slds-m-top_x-small">
                                            Type:</dt>
                                        <dd className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small">New
                                </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="slds-col slds-size_1-of-2">
                                <div className="slds-region_narrow">
                                    <dl className="slds-dl_horizontal">
                                        <dt className="slds-dl_horizontal__label slds-border_bottom slds-m-top_x-small">Owner:</dt>
                                        <dd className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small">Description
                                    for first label</dd>
                                        <dt className="slds-dl_horizontal__label slds-border_bottom slds-margin slds-m-top_x-small">
                                            DCR External ID:</dt>
                                        <dd className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small"></dd>
                                        <dt className="slds-dl_horizontal__label slds-border_bottom slds-margin slds-m-top_x-small">
                                            Parent Data Change Request:</dt>
                                        <dd className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small">DCR000000361</dd>
                                        <dt className="slds-dl_horizontal__label slds-border_bottom slds-margin slds-m-top_x-small">
                                            Result:</dt>
                                        <dd className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small">Change Partial</dd>
                                        <dt className="slds-dl_horizontal__label slds-border_bottom slds-margin slds-m-top_x-small">
                                            Error:</dt>
                                        <dd className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small"></dd>
                                        <dt className="slds-dl_horizontal__label slds-border_bottom slds-margin slds-m-top_x-small">
                                            Resolution Note:</dt>
                                        <dd className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small">Your request has been approved however it is to another existing record. no new HCP has been created.</dd>
                                        <dt className="slds-dl_horizontal__label slds-border_bottom slds-margin slds-m-top_x-small">
                                            External Status:</dt>
                                        <dd className="slds-dl_horizontal__detail slds-border_bottom slds-m-top_x-small">Change Processed</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="slds-card__footer"></footer>
                </article>
            </div>
        );
    }
}