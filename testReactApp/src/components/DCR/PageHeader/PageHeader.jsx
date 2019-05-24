import React from "react";
import "../../../assets/styles/salesforce-lightning-design-system.css";
import Symbols from "../../../assets/icons/action-sprite/svg/symbols.svg";
import SVG from "react-inlinesvg";

export  const PageHeader = () => {
    return (
        <div className="slds-grid slds-wrap">
            <nav className="slds-col slds-size_1-of-1 ">
                {/** <!-- Page HEADER -->**/}
                <div className="slds-page-header slds-page-header_record-home">
                    <div className="slds-page-header__row">
                        <div className="slds-page-header__col-title">
                            <div className="slds-media">
                                <div className="slds-media__figure">
                                    <span className="slds-icon_container slds-icon-action-user" title="User">
                                    <SVG className="slds-icon slds-icon-text-action" aria-hidden="true" src={`${Symbols}#user`}/>
                                    <span className="slds-assistive-text">User</span>
                                </span>
                            </div>
                            <div className="slds-media__body">
                                <div className="slds-page-header__name">
                                    <div className="slds-page-header__name-title">
                                        <h1>
                                            <span style={{color:"black"}}>Data Change Request</span>
                                            <span className="slds-page-header__title slds-truncate"
                                                title="Acme - 1,200 Widgets ">DCR000000361</span>
                                        </h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

           {/** <!-- Closing of Page HEADER-->*/ }

        </nav>
    </div >
    );
}