// // frontend/src/App.jsx
// import React, { useState } from 'react';
// import FileUpload from './components/FileUpload';
// import FileMetadata from './components/FileMetadata';
// import axios from 'axios';

// function App() {
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [metadata, setMetadata] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileUpload = async (file) => { //working
//     const formData = new FormData();
//     formData.append('document', file);

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post('http://localhost:5000/api/documents/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       setUploadedFile(response.data);
//       setMetadata(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Upload failed');
//       setLoading(false);
//     }
//   };
  
  
  


//   const handleDownloadPDF = async () => { // working
//     if (!uploadedFile) return;

//     try {
//       const response = await axios.get(`http://localhost:5000/api/documents/${uploadedFile._id}/download`, {
//         responseType: 'blob'
//       });

//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `${uploadedFile.originalName.replace('.docx', '.pdf')}`);
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//     } catch (err) {
//       setError('Download failed');
//     }
//   };


    
  
//   return (
//     <div className="container mx-auto px-4 py-8 max-w-xl">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           DOCX to PDF Converter
//         </h1>

//         <FileUpload 
//           onFileUpload={handleFileUpload} 
//           loading={loading}
//           error={error}
//         />

//         {metadata && (
//           <div className="mt-6">
//             <FileMetadata 
//               metadata={metadata} 
//               onDownload={handleDownloadPDF}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import FileUpload from './components/FileUpload';
// import FileMetadata from './components/FileMetadata';
// import axios from 'axios';

// function App() {
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [metadata, setMetadata] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileUpload = async (file, password) => {
//     const formData = new FormData();
//     formData.append('document', file);

//     if (password) {
//       formData.append('password', password); // Include password in the request
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post('http://localhost:5000/api/documents/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setUploadedFile(response.data);
//       setMetadata(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Upload failed');
//       setLoading(false);
//     }
//   };

//   const handleDownloadPDF = async () => {
//     if (!uploadedFile) return;

//     try {
//       const response = await axios.get(`http://localhost:5000/api/documents/${uploadedFile._id}/download`, {
//         responseType: 'blob',
//       });

//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `${uploadedFile.originalName.replace('.docx', '.pdf')}`);
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//     } catch (err) {
//       setError('Download failed');
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-xl">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           DOCX to PDF Converter
//         </h1>

//         <FileUpload 
//           onFileUpload={handleFileUpload} 
//           loading={loading}
//           error={error}
//         />

//         {metadata && (
//           <div className="mt-6">
//             <FileMetadata 
//               metadata={metadata} 
//               onDownload={handleDownloadPDF}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import FileMetadata from './components/FileMetadata';
import axios from 'axios';

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null); // State for the currently selected file

  // Handle file upload (when the upload button is clicked)
  const handleFileUpload = async (file, password) => {
    const formData = new FormData();
    formData.append('document', file);

    if (password) {
      formData.append('password', password); // Include password if entered
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/documents/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadedFile(response.data); // Set the uploaded file data
      setMetadata(response.data); // Set metadata for the uploaded file
      setLoading(false);
      setFile(null); // Reset file selection after upload
    } catch (err) {
      setError(err.response?.data?.message || 'Upload failed');
      setLoading(false);
    }
  };

  // Handle file selection (show preview)
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile); // Set selected file for preview
  };

  // Handle file removal (clear preview and reset file state)
  const handleRemoveFile = () => {
    setFile(null); // Reset the selected file
  };

  // Handle PDF download
  const handleDownloadPDF = async () => {
    if (!uploadedFile) return;

    try {
      const response = await axios.get(`http://localhost:5000/api/documents/${uploadedFile._id}/download`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${uploadedFile.originalName.replace('.docx', '.pdf')}`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      setFile(null); // Reset file selection after download
    } catch (err) {
      setError('Download failed');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-xl">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          DOCX to PDF Converter
        </h1>

        {/* File Upload Component */}
        <FileUpload
          onFileUpload={handleFileUpload} 
          loading={loading}
          error={error}
          file={file}
          onFileChange={handleFileChange}
          onRemoveFile={handleRemoveFile}
        />

        {/* File Metadata and Download Button */}
        {metadata && (
          <div className="mt-6">
            <FileMetadata
              metadata={metadata} 
              onDownload={handleDownloadPDF}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


