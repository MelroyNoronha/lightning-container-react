import React,{useState} from "react";
import Symbols from "../../../assets/icons/utility-sprite/svg/symbols.svg";
import "../../../assets/styles/salesforce-lightning-design-system.css";
import SVG from "react-inlinesvg";

export const DCRLines = () => {
    const editObject = {
        1:{
            1:false,
            2:false,
            3:false,
            4:false,
            5:false,
            6:false,
            7:false,
            8:false,
            9:false,
        },
        2:{
            1:false,
            2:false,
            3:false,
            4:false,
            5:false,
            6:false,
            7:false,
            8:false,
            9:false,
        },
        3:{
            1:false,
            2:false,
            3:false,
            4:false,
            5:false,
            6:false,
            7:false,
            8:false,
            9:false,
        }
    }

    const valueObject = {
        1:{
            1:"",
            2:"",
            3:"",
            4:"",
            5:"",
            6:"",
            7:"",
            8:"",
            9:"",

        },
        2:{
            1:"",
            2:"",
            3:"",
            4:"",
            5:"",
            6:"",
            7:"",
            8:"",
            9:"",
        },
        3:{
            1:"",
            2:"",
            3:"",
            4:"",
            5:"",
            6:"",
            7:"",
            8:"",
            9:"",
        }
    }

    const [edit,updateEdit] = useState(editObject);
    const [value,updateValue]=useState(valueObject);
    let tempValue;
    const handleUpdate = ()=>{
        let tempObj=null;
        let tempKey=null;
        for( tempObj in edit){
            // eslint-disable-next-line
             tempKey=Object.keys(edit[tempObj]).find(key => edit[tempObj][key] === true);
             if(tempKey!==undefined&&tempKey!==null)
             break;
        }
        updateValue({...value,[tempObj]:{...value[tempObj],[tempKey]:tempValue}});
 
        updateEdit(editObject);
    }
    
    
    
    

    return (
        <div className="slds-var-m-around_xx-small	">
            <article className="slds-card">
                <div className="slds-card__header slds-grid">
                    <header className="slds-media slds-media_center slds-has-flexi-truncate">
                        <div className="slds-media__figure">
                            <span className="slds-icon_container slds-icon-utili
                            ty-table" title="Table">
                                <SVG className="slds-icon slds-icon-text-default slds-icon_small" aria-hidden="true" src={`${Symbols}#table`}/>
                                <span className="slds-assistive-text">Data Change Request Lines</span>
                            </span>
                        </div>
                        <div className="slds-media__body">
                            <h2 className="slds-card__header-title">
                                <span>Data Change Request Lines</span>
                            </h2>
                        </div>
                        <div className="slds-no-flex">
                            <button className="slds-button slds-button_neutral">New</button>
                        </div>
                    </header>
                </div>
                <div className="slds-card__body">
                    <div style={{ overflow: "auto" }}>
                        <div className="slds-table_edit_container slds-var-p-around_xxx-small slds-table_col-bordered slds-is-relative">
                            <table aria-multiselectable="true"
                                className="slds-table slds-table_bordered slds-table_edit slds-table_fixed-layout slds-table_resizable-cols"
                                role="grid" >
                                <thead>
                                    <tr className="slds-line-height_reset">

                                        <th aria-label="DCR Line ID" aria-sort="none" className="slds-is-resizable slds-is-sortable"
                                            scope="col" style={{ width: "10.0rem" }}>
                                            <span className="slds-assistive-text">Sort by: </span>
                                            <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                <span className="slds-truncate" title="DCR Line ID">DCR Line ID</span>
                                                <span className="slds-icon_container slds-icon-utility-arrowdown">
                                                    <SVG className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                        aria-hidden="true" src={`${Symbols}#arrowdown`}/>
                                                </span>
                                            </div>

                                        </th>
                                        <th aria-label="Field Name" aria-sort="none"
                                            className="slds-is-resizable slds-is-sortable" scope="col" style={{ width: "10.0rem" }}>
                                            <span className="slds-assistive-text">Sort by: </span>
                                            <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                <span className="slds-truncate" title="Field Name">Field Name</span>
                                                <span className="slds-icon_container slds-icon-utility-arrowdown">
                                                    <SVG className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                        aria-hidden="true" src={`${Symbols}#arrowdown`}/>
                                                </span>
                                            </div>

                                        </th>
                                        <th aria-label="Field API Name" aria-sort="none" className="slds-is-resizable slds-is-sortable"
                                            scope="col" style={{ width: "10.0rem" }}>
                                            <span className="slds-assistive-text">Sort by: </span>
                                            <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                <span className="slds-truncate" title="Field API Name">Field API Name</span>
                                                <span className="slds-icon_container slds-icon-utility-arrowdown">
                                                    <SVG className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                        aria-hidden="true" src={`${Symbols}#arrowdown`}/>
                                                </span>
                                            </div>

                                        </th>
                                        <th aria-label="New Value" aria-sort="none" className="slds-is-resizable slds-is-sortable"
                                            scope="col" style={{ width: "10.0rem" }}>
                                            <span className="slds-assistive-text">Sort by: </span>
                                            <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                <span className="slds-truncate" title="New Value">New Value</span>
                                                <span className="slds-icon_container slds-icon-utility-arrowdown">
                                                    <SVG className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                        aria-hidden="true" src={`${Symbols}#arrowdown`}/>
                                                </span>
                                            </div>
                                        </th>
                                        <th aria-label="Old Value" aria-sort="none" className="slds-is-resizable slds-is-sortable"
                                            scope="col" style={{ width: "10.0rem" }}>
                                            <span className="slds-assistive-text">Sort by: </span>
                                            <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                <span className="slds-truncate" title="Old Value">Old Value</span>
                                                <span className="slds-icon_container slds-icon-utility-arrowdown">
                                                    <SVG className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                        aria-hidden="true" src={`${Symbols}#arrowdown`}/>
                                                </span>
                                            </div>
                                        </th>
                                        <th aria-label="Resolution Note" aria-sort="none" className="slds-is-resizable slds-is-sortable"
                                            scope="col" style={{ width: "12.0rem" }}>
                                            <span className="slds-assistive-text">Sort by: </span>
                                            <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                <span className="slds-truncate" title="Resolution Note">Resolution Note</span>
                                                <span className="slds-icon_container slds-icon-utility-arrowdown">
                                                    <SVG className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                        aria-hidden="true" src={`${Symbols}#arrowdown`}/>
                                                </span>
                                            </div>


                                        </th>
                                        <th aria-label="Result" aria-sort="none" className="slds-is-resizable slds-is-sortable"
                                            scope="col" style={{ width: "10.0rem" }}>
                                            <span className="slds-assistive-text">Sort by: </span>
                                            <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                <span className="slds-truncate" title="Result">Result</span>
                                                <span className="slds-icon_container slds-icon-utility-arrowdown">
                                                    <SVG className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                        aria-hidden="true" src={`${Symbols}#arrowdown`}/>
                                                </span>
                                            </div>

                                        </th>
                                        <th aria-label="Final Value" aria-sort="none" className="slds-is-resizable slds-is-sortable"
                                            scope="col" style={{ width: "10.0rem" }}>
                                            <span className="slds-assistive-text">Sort by: </span>
                                            <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                <span className="slds-truncate" title="Final Value">Final Value</span>
                                                <span className="slds-icon_container slds-icon-utility-arrowdown">
                                                    <SVG className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                        aria-hidden="true" src={`${Symbols}#arrowdown`}/>
                                                </span>
                                            </div>

                                        </th>
                                        <th aria-label="Last Modified By" aria-sort="none" className="slds-is-resizable slds-is-sortable"
                                            scope="col" style={{ width: "10.0rem" }}>
                                            <span className="slds-assistive-text">Sort by: </span>
                                            <div className="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                                                <span title="Last Modified By">Last Modified By</span>
                                                <span className="slds-icon_container slds-icon-utility-arrowdown">
                                                    <SVG className="slds-icon slds-icon-text-default slds-is-sortable__icon "
                                                        aria-hidden="true" src={`${Symbols}#arrowdown`} />
                                                </span>
                                            </div>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr aria-selected="false" className="slds-hint-parent">

                                        <th className="slds-cell-edit" scope="row">
                                            <span className="slds-grid slds-grid_align-spread">
                                                {value[1][1]}
                                                <button
                                                onClick={()=>(Object.values(edit[1]).includes(true)===false&&Object.values(edit[2]).includes(true)===false&&Object.values(edit[3]).includes(true)===false)&&updateEdit({...edit,1:{...edit[1],1:!edit[1][1]}})}
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title={`Edit ${value[1][1]}`}>
                                                    <svg className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true">
                                                        <use xlinkHref={`${Symbols}#edit`}></use>
                                                    </svg>
                                                    <span className="slds-assistive-text">{value[1][1]}</span>
                                                </button>
                                            </span>
                                            {
                                                edit[1][1]===true&& <section aria-describedby="dialog-body-id-14" className="slds-popover slds-popover slds-popover_edit" role="dialog" style={{position:"absolute",top:"0",left:"0.0625rem"}}>
                                                <div className="slds-popover__body" id="dialog-body-id-14">
                                                  <div className="slds-form-element slds-grid slds-wrap">
                                                    <label className="slds-form-element__label slds-form-element__label_edit slds-no-flex" htmlFor="company-01">
                                                      <span className="slds-assistive-text">Company</span>
                                                    </label>
                                                    <div className="slds-form-element__control slds-grow">
                                                      <input onChange={(e)=>tempValue=e.currentTarget.value} type="text" className="slds-input" id="company-01"  />
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            }
                                        </th>
                                        <td className="slds-cell-edit " role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title={value[1][2]}>{value[1][2]}</span>
                                                <button
                                                     onClick={()=>(Object.values(edit[1]).includes(true)===false&&Object.values(edit[2]).includes(true)===false&&Object.values(edit[3]).includes(true)===false)&&updateEdit({...edit,1:{...edit[1],2:!edit[1][2]}})}
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit Account Name of Acme - 1,200 Widgets">
                                                    <svg className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true">
                                                        <use xlinkHref={`${Symbols}#edit`}></use>

                                                    </svg>
                                                    <span className="slds-assistive-text">{value[1][2]}</span>
                                                </button>
                                            </span>
                                            {
                                                edit[1][2]===true&& <section aria-describedby="dialog-body-id-14" className="slds-popover slds-popover slds-popover_edit" role="dialog" style={{position:"absolute",top:"0",left:"0.0625rem"}}>
                                                <div className="slds-popover__body" id="dialog-body-id-14">
                                                  <div className="slds-form-element slds-grid slds-wrap">
                                                    <label className="slds-form-element__label slds-form-element__label_edit slds-no-flex" htmlFor="company-01">
                                                      <span className="slds-assistive-text">Company</span>
                                                    </label>
                                                    <div className="slds-form-element__control slds-grow">
                                                      <input onChange={(e)=>tempValue=e.currentTarget.value} type="text" className="slds-input" id="company-01"  />
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            }
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title={value[1][3]}>{value[1][3]}</span>
                                                <button
                                                    onClick={()=>(Object.values(edit[1]).includes(true)===false&&Object.values(edit[2]).includes(true)===false&&Object.values(edit[3]).includes(true)===false)&&updateEdit({...edit,1:{...edit[1],3:!edit[1][3]}})}
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit Parent_account_void_c">
                                                    <svg className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true">
                                                        <use xlinkHref={`${Symbols}#edit`}></use>

                                                    </svg>
                                                    <span className="slds-assistive-text">Edit Parent_account_void_c</span>
                                                </button>
                                            </span>
                                            {
                                                edit[1][3]===true&& <section aria-describedby="dialog-body-id-14" className="slds-popover slds-popover slds-popover_edit" role="dialog" style={{position:"absolute",top:"0",left:"0.0625rem"}}>
                                                <div className="slds-popover__body" id="dialog-body-id-14">
                                                  <div className="slds-form-element slds-grid slds-wrap">
                                                    <label className="slds-form-element__label slds-form-element__label_edit slds-no-flex" htmlFor="company-01">
                                                      <span className="slds-assistive-text">Company</span>
                                                    </label>
                                                    <div className="slds-form-element__control slds-grow">
                                                      <input onChange={(e)=>tempValue=e.currentTarget.value} type="text" className="slds-input" id="company-01"  />
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            }
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title={value[1][4]}>{value[1][4]}</span>
                                                <button
                                                    onClick={()=>(Object.values(edit[1]).includes(true)===false&&Object.values(edit[2]).includes(true)===false&&Object.values(edit[3]).includes(true)===false)&&updateEdit({...edit,1:{...edit[1],4:!edit[1][4]}})}
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit 02450043500000435">
                                                    <svg className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true">
                                                        <use xlinkHref={`${Symbols}#edit`}></use>

                                                    </svg>
                                                    <span className="slds-assistive-text">Edit 02450043500000435</span>
                                                </button>
                                            </span>
                                            {
                                                edit[1][4]===true&& <section aria-describedby="dialog-body-id-14" className="slds-popover slds-popover slds-popover_edit" role="dialog" style={{position:"absolute",top:"0",left:"0.0625rem"}}>
                                                <div className="slds-popover__body" id="dialog-body-id-14">
                                                  <div className="slds-form-element slds-grid slds-wrap">
                                                    <label className="slds-form-element__label slds-form-element__label_edit slds-no-flex" htmlFor="company-01">
                                                      <span className="slds-assistive-text">Company</span>
                                                    </label>
                                                    <div className="slds-form-element__control slds-grow">
                                                      <input onChange={(e)=>tempValue=e.currentTarget.value} type="text" className="slds-input" id="company-01"  />
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            }
                                        </td>
                                        <td aria-readonly="true" className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title={value[1][5]}>{value[1][5]}</span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    disabled="" tabIndex="-1" title="Edit Old Value">
                                                    <svg className="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small"
                                                        aria-hidden="true">
                                                        <use xlinkHref={`${Symbols}#lock`}></use>

                                                    </svg>
                                                    <span className="slds-assistive-text">Edit OldValue</span>
                                                </button>
                                            </span>
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="" style={{wordBreak:"break-all"}} title={value[1][6]}>{value[1][6]}</span>
                                                <button
                                                    onClick={()=>(Object.values(edit[1]).includes(true)===false&&Object.values(edit[2]).includes(true)===false&&Object.values(edit[3]).includes(true)===false)&&updateEdit({...edit,1:{...edit[1],6:!edit[1][6]}})}
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit ">
                                                    <svg className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true">
                                                        <use xlinkHref={`${Symbols}#edit`}></use>

                                                    </svg>
                                                    <span className="slds-assistive-text">Edit </span>
                                                </button>
                                            </span>
                                            {
                                                edit[1][6]===true&& <section aria-describedby="dialog-body-id-14" className="slds-popover slds-popover slds-popover_edit" role="dialog" style={{position:"absolute",top:"0",left:"0.0625rem"}}>
                                                <div className="slds-popover__body" id="dialog-body-id-14">
                                                  <div className="slds-form-element slds-grid slds-wrap">
                                                    <label className="slds-form-element__label slds-form-element__label_edit slds-no-flex" htmlFor="company-01">
                                                      <span className="slds-assistive-text">Company</span>
                                                    </label>
                                                    <div className="slds-form-element__control slds-grow">
                                                      <input onChange={(e)=>tempValue=e.currentTarget.value} type="text" className="slds-input" id="company-01"  />
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            }
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title={value[1][7]}>{value[1][7]}</span>
                                                <button
                                                    onClick={()=>(Object.values(edit[1]).includes(true)===false&&Object.values(edit[2]).includes(true)===false&&Object.values(edit[3]).includes(true)===false)&&updateEdit({...edit,1:{...edit[1],7:!edit[1][7]}})}
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit ">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`}/>
                                                    <span className="slds-assistive-text"></span>
                                                </button>
                                            </span>
                                            {
                                                edit[1][7]===true&& <section aria-describedby="dialog-body-id-14" className="slds-popover slds-popover slds-popover_edit" role="dialog" style={{position:"absolute",top:"0",left:"0.0625rem"}}>
                                                <div className="slds-popover__body" id="dialog-body-id-14">
                                                  <div className="slds-form-element slds-grid slds-wrap">
                                                    <label className="slds-form-element__label slds-form-element__label_edit slds-no-flex" htmlFor="company-01">
                                                      <span className="slds-assistive-text">Company</span>
                                                    </label>
                                                    <div className="slds-form-element__control slds-grow">
                                                      <input onChange={(e)=>tempValue=e.currentTarget.value} type="text" className="slds-input" id="company-01"  />
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            }
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title={value[1][8]}>{value[1][8]}</span>
                                                <button
                                                    onClick={()=>(Object.values(edit[1]).includes(true)===false&&Object.values(edit[2]).includes(true)===false&&Object.values(edit[3]).includes(true)===false)&&updateEdit({...edit,1:{...edit[1],8:!edit[1][8]}})}
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit ">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`}/>
                                                    <span className="slds-assistive-text"></span>
                                                </button>
                                            </span>
                                            {
                                                edit[1][8]===true&& <section aria-describedby="dialog-body-id-14" className="slds-popover slds-popover slds-popover_edit" role="dialog" style={{position:"absolute",top:"0",left:"0.0625rem"}}>
                                                <div className="slds-popover__body" id="dialog-body-id-14">
                                                  <div className="slds-form-element slds-grid slds-wrap">
                                                    <label className="slds-form-element__label slds-form-element__label_edit slds-no-flex" htmlFor="company-01">
                                                      <span className="slds-assistive-text">Company</span>
                                                    </label>
                                                    <div className="slds-form-element__control slds-grow">
                                                      <input onChange={(e)=>tempValue=e.currentTarget.value} type="text" className="slds-input" id="company-01"  />
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            }
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title={value[1][9]}>{value[1][9]}</span>
                                                <button
                                                    onClick={()=>(Object.values(edit[1]).includes(true)===false&&Object.values(edit[2]).includes(true)===false&&Object.values(edit[3]).includes(true)===false)&&updateEdit({...edit,1:{...edit[1],9:!edit[1][9]}})}
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit ">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`} />
                                                    <span className="slds-assistive-text"></span>
                                                </button>
                                            </span>
                                        </td>
                                        {
                                                edit[1][9]===true&& <section aria-describedby="dialog-body-id-14" className="slds-popover slds-popover slds-popover_edit" role="dialog" style={{position:"absolute",top:"0",left:"75.0425rem"}}>
                                                <div className="slds-popover__body" id="dialog-body-id-14">
                                                  <div className="slds-form-element slds-grid slds-wrap">
                                                    <label className="slds-form-element__label slds-form-element__label_edit slds-no-flex" htmlFor="company-01">
                                                      <span className="slds-assistive-text">Company</span>
                                                    </label>
                                                    <div className="slds-form-element__control slds-grow">
                                                      <input onChange={(e)=>tempValue=e.currentTarget.value} type="text" className="slds-input" id="company-01"  />
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            }
                                    </tr>

                                    <tr aria-selected="false" className="slds-hint-parent">

                                        <th className="slds-cell-edit" scope="row">
                                            <span className="slds-grid slds-grid_align-spread">
                                                DCRL000001678
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`}/>
                                                    <span className="slds-assistive-text">Edit </span>
                                                </button>
                                            </span>
                                        </th>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title="Child Account">Child Account</span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`}/>
                                                    <span className="slds-assistive-text">Edit</span>
                                                </button>
                                            </span>
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title="Child_account_vod__c">Child_account_vod__c</span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`} />
                                                    <span className="slds-assistive-text">Edit </span>
                                                </button>
                                            </span>
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title="0123123424243">032424214617423</span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`} />
                                                    <span className="slds-assistive-text">Edit </span>
                                                </button>
                                            </span>
                                        </td>
                                        <td aria-readonly="true" className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title=""></span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    disabled="" tabIndex="-1" title="Edit ">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small"
                                                        aria-hidden="true" src={`${Symbols}#lock`} />

                                                    <span className="slds-assistive-text">Edit </span>
                                                </button>
                                            </span>
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title=""></span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit ">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`} />
                                                    <span className="slds-assistive-text">Edit </span>
                                                </button>
                                            </span>
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title=""></span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true"src={`${Symbols}#edit`} />
                                                    <span className="slds-assistive-text">Edit </span>
                                                </button>
                                            </span>
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title=""></span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`}/>
                                                    <span className="slds-assistive-text">Edit </span>
                                                </button>
                                            </span>
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title="">Andrea De Mont</span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`} />
                                                    <span className="slds-assistive-text">Edit </span>
                                                </button>
                                            </span>
                                        </td>

                                    </tr>
                                    <tr aria-selected="false" className="slds-hint-parent">

                                        <th className="slds-cell-edit" scope="row">
                                            <span className="slds-grid slds-grid_align-spread">
                                                DCRL0000016789
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit ">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`} />
                                                    <span className="slds-assistive-text">Edit </span>
                                                </button>
                                            </span>
                                        </th>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title="customer master status">Customer Master Status</span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`} />
                                                    <span className="slds-assistive-text">Customer Master Status</span>
                                                </button>
                                            </span>
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title="customer_master_status_vod__c">Customer_Master_status_vod__c</span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`}/>
                                                    <span className="slds-assistive-text"></span>
                                                </button>
                                            </span>
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title="staging_void">Staging_void</span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`}/>
                                                    <span className="slds-assistive-text"></span>
                                                </button>
                                            </span>
                                        </td>
                                        <td aria-readonly="true" className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title=""></span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    disabled="" tabIndex="-1"
                                                    title="">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small"
                                                        aria-hidden="true" src={`${Symbols}#lock`} />
                                                    <span className="slds-assistive-text"></span>
                                                </button>
                                            </span>
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate" title=""></span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`} />
                                                    <span className="slds-assistive-text"></span>
                                                </button>
                                            </span>
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate"
                                                    title=""></span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`} />
                                                    <span className="slds-assistive-text"></span>
                                                </button>
                                            </span>
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate"
                                                    title=""></span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`} />
                                                    <span className="slds-assistive-text"></span>
                                                </button>
                                            </span>
                                        </td>
                                        <td className="slds-cell-edit" role="gridcell">
                                            <span className="slds-grid slds-grid_align-spread">
                                                <span className="slds-truncate"
                                                    title="Andrea De Mont">Andrea DeMont</span>
                                                <button
                                                    className="slds-button slds-button_icon slds-cell-edit__button slds-m-left_x-small"
                                                    tabIndex="-1" title="Edit Contact of salesforce.com - 1,000 Widgets">
                                                    <SVG className="slds-button__icon slds-button__icon_hint slds-button__icon_edit"
                                                        aria-hidden="true" src={`${Symbols}#edit`} />
                                                    <span className="slds-assistive-text">Edit Contact of salesforce.com - 1,000
                                                            Widgets</span>
                                                </button>
                                            </span>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <footer className="slds-card__footer ">

                   {(Object.values(edit[1]).includes(true)===true||Object.values(edit[2]).includes(true)===true||Object.values(edit[3]).includes(true)===true)&& <button onClick={()=>updateEdit(editObject)} type="button" className="slds-button slds-button_neutral">Cancel</button>}
                   {(Object.values(edit[1]).includes(true)===true||Object.values(edit[2]).includes(true)===true||Object.values(edit[3]).includes(true)===true)&&  <button onClick={()=>handleUpdate()} type="button" className="slds-button slds-button_brand">Save</button>}
                </footer>
            </article>
        </div>
    );
}