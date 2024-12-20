import { FileManagerComponent, Inject, NavigationPane, Toolbar, DetailsView } from '@syncfusion/ej2-react-filemanager';

const Default = () => {

    const hostUrl = "http://localhost:8000/api/scanned/";

    return (
        <div>
            <div className="control-section">
                <FileManagerComponent
                    id="api_filemanager"
                    ajaxSettings={{
                        url: hostUrl + "get/scanned",
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
                    }}
                    showFileExtension={true}
                    showThumbnail={true}
                    view={"LargeIcons"}
                >
                    <Inject services={[NavigationPane, Toolbar, DetailsView]} />
                </FileManagerComponent>

            </div>
        </div>
    );
};

export default Default;
