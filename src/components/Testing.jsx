import { useState, useRef } from 'react';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { FileManagerComponent, Inject, NavigationPane, Toolbar } from '@syncfusion/ej2-react-filemanager';

const defaultcss = `
    #all-property-table .property-panel-section .property-panel-content table#property tr {
        height: 50px;
    }`;

const Default = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isShowFileExtension, setIsShowFileExtension] = useState(true);
    const [isShowThumbnail, setShowThumbnail] = useState(true);

    // Use your backend API base URL
    let hostUrl = "http://localhost:8000/api/scanned/";
    let fmObj = useRef(null);
    let disableDropDownList = useRef(null);
    let enableDropDownList = useRef(null);
    let items = ['NewFolder', 'Cut', 'Copy', 'Paste', 'Download', 'Delete', 'Refresh', 'Selection', 'View', 'Details'];

    const toolCheck = (args, id) => {
        if (id === "toolbar") {
            setIsVisible(args.checked);
        }
        if (id === "fileExtension") {
            setIsShowFileExtension(args.checked);
        }
        if (id === "thumbnail") {
            setShowThumbnail(args.checked);
        }
    };

    const onDisableItemChange = (args) => {
        if (args.itemData != null) {
            fmObj.current.disableToolbarItems([args.itemData.value]);
            if (args.value === enableDropDownList.current.value) {
                enableDropDownList.current.value = null;
            }
        }
    };

    const onEnableItemChange = (args) => {
        if (args.itemData != null) {
            fmObj.current.enableToolbarItems([args.itemData.value]);
            if (args.value === disableDropDownList.current.value) {
                disableDropDownList.current.value = null;
            }
        }
    };

    return (
        <div>
            <style>{defaultcss}</style>
            <div className="col-lg-8 control-section">
                <FileManagerComponent
                    id="api_filemanager"
                    ref={fmObj}
                    ajaxSettings={{
                        url: hostUrl + "get/scanned",
                        getImageUrl: hostUrl + "get-image", // Update this if you have an API for image previews
                        uploadUrl: hostUrl + "upload/scanned",
                        downloadUrl: hostUrl + "download/scanned",
                        createUrl: hostUrl + "create/scanned",
                        deleteUrl: hostUrl + "remove/scanned",
                        renameUrl: hostUrl + "rename/scanned",
                    }}
                    toolbarSettings={{
                        items: [
                            'NewFolder',
                            'SortBy',
                            'Cut',
                            'Copy',
                            'Paste',
                            'Delete',
                            'Refresh',
                            'Download',
                            'Rename',
                            'Selection',
                            'View',
                            'Details',
                        ],
                        visible: isVisible,
                    }}
                    contextMenuSettings={{
                        file: ['Cut', 'Copy', '|', 'Delete', 'Download', 'Rename', '|', 'Details'],
                        layout: [
                            'SortBy',
                            'View',
                            'Refresh',
                            '|',
                            'Paste',
                            '|',
                            'NewFolder',
                            '|',
                            'Details',
                            '|',
                            'SelectAll',
                        ],
                        visible: true,
                    }}
                    view={"LargeIcons"}
                    navigationPaneSettings={{ visible: false }}
                    showFileExtension={isShowFileExtension}
                    showThumbnail={isShowThumbnail}
                >
                    <Inject services={[NavigationPane, Toolbar]} />
                </FileManagerComponent>
            </div>
            <div id="all-property-table" className="col-lg-4 property-section">
                <table id="property" title="Properties" className="property-panel-table" style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: '50%' }}>
                                <div style={{ fontSize: '14px', paddingLeft: '0px' }}>Enable Range Selection</div>
                            </td>
                            <td style={{ width: '50%', paddingRight: '10px' }}>
                                <div>
                                    <CheckBoxComponent
                                        id="rangeSelection"
                                        checked={true}
                                        change={(args) => toolCheck(args, "rangeSelection")}
                                    ></CheckBoxComponent>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '50%' }}>
                                <div style={{ fontSize: '14px', paddingLeft: '0px' }}>Toolbar</div>
                            </td>
                            <td style={{ width: '50%', paddingRight: '10px' }}>
                                <div>
                                    <CheckBoxComponent
                                        id="toolbar"
                                        checked={true}
                                        change={(args) => toolCheck(args, "toolbar")}
                                    ></CheckBoxComponent>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '50%' }}>
                                <div style={{ fontSize: '14px', paddingLeft: '0px' }}>Show File Extension</div>
                            </td>
                            <td style={{ width: '50%', paddingRight: '10px' }}>
                                <div>
                                    <CheckBoxComponent
                                        id="fileExtension"
                                        checked={true}
                                        change={(args) => toolCheck(args, "fileExtension")}
                                    ></CheckBoxComponent>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '50%' }}>
                                <div style={{ fontSize: '14px', paddingLeft: '0px' }}>Show Thumbnail</div>
                            </td>
                            <td style={{ width: '50%', paddingRight: '10px' }}>
                                <div>
                                    <CheckBoxComponent
                                        id="thumbnail"
                                        checked={true}
                                        change={(args) => toolCheck(args, "thumbnail")}
                                    ></CheckBoxComponent>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '50%' }}>
                                <div style={{ fontSize: '14px', paddingLeft: '0px' }}>Disable Toolbar Item</div>
                            </td>
                            <td style={{ width: '50%', paddingLeft: '10px' }}>
                                <div>
                                    <DropDownListComponent
                                        ref={disableDropDownList}
                                        id="disable"
                                        dataSource={items}
                                        change={onDisableItemChange.bind(this)}
                                    ></DropDownListComponent>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '50%' }}>
                                <div style={{ fontSize: '14px', paddingLeft: '0px' }}>Enable Toolbar Item</div>
                            </td>
                            <td style={{ width: '50%', paddingLeft: '10px' }}>
                                <div>
                                    <DropDownListComponent
                                        ref={enableDropDownList}
                                        id="enable"
                                        dataSource={items}
                                        change={onEnableItemChange.bind(this)}
                                    ></DropDownListComponent>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Default;
