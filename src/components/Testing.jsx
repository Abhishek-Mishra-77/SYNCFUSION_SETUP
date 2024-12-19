import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar } from '@syncfusion/ej2-react-filemanager';

// Import Bootstrap5 theme styles for Syncfusion
import '@syncfusion/ej2-base/styles/bootstrap5.css';
import '@syncfusion/ej2-icons/styles/bootstrap5.css';
import '@syncfusion/ej2-inputs/styles/bootstrap5.css';
import '@syncfusion/ej2-popups/styles/bootstrap5.css';
import '@syncfusion/ej2-buttons/styles/bootstrap5.css';
import '@syncfusion/ej2-splitbuttons/styles/bootstrap5.css';
import '@syncfusion/ej2-navigations/styles/bootstrap5.css';
import '@syncfusion/ej2-layouts/styles/bootstrap5.css';
import '@syncfusion/ej2-grids/styles/bootstrap5.css';
import '@syncfusion/ej2-react-filemanager/styles/bootstrap5.css';


const Overview = () => {

    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
                File Manager
            </h2>
            <div
                style={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <FileManagerComponent
                    ajaxSettings={{
                        url: 'http://localhost:8000/api/scanned/get/scanned',
                    }}
                >
                    <Inject services={[NavigationPane, DetailsView, Toolbar]} />
                </FileManagerComponent>

            </div>
        </div>
    );
};

export default Overview;
