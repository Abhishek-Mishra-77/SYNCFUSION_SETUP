import { FileManagerComponent, Inject, NavigationPane, Toolbar, DetailsView } from '@syncfusion/ej2-react-filemanager';

const Default = () => {

    return (
        <div>
            <div className="control-section">
                <div id="file-manager-container">
                    <FileManagerComponent
                        id="file_manager"
                        ajaxSettings={{
                            url: 'http://localhost:8000/api/filemanager/list',
                            uploadUrl: 'http://localhost:8000/api/filemanager/upload',
                            downloadUrl: 'http://localhost:8000/api/filemanager/download',
                            deleteUrl: 'http://localhost:8000/api/filemanager/delete',
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
                        view="LargeIcons"
                    >
                        <Inject services={[NavigationPane, Toolbar, DetailsView]} />
                    </FileManagerComponent>
                </div>
            </div>
        </div>
    );
};

export default Default;
