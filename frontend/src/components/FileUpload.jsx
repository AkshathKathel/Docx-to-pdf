// // frontend/src/components/FileUpload.jsx
// import React, { useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';

// const FileUpload = ({ onFileUpload, loading, error }) => {
//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0];
//     if (file && file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
//       onFileUpload(file);
//     }
//   }, [onFileUpload]);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
//     },
//     multiple: false
//   });

//   return (
//     <div 
//       {...getRootProps()} 
//       className={`
//         border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
//         transition-colors duration-300
//         ${isDragActive 
//           ? 'border-blue-500 bg-blue-50' 
//           : 'border-gray-300 hover:border-blue-500'
//         }
//       `}
//     >
//       <input {...getInputProps()} />
      
//       {loading ? (
//         <div className="text-blue-600">
//           <svg 
//             className="animate-spin mx-auto h-10 w-10" 
//             xmlns="http://www.w3.org/2000/svg" 
//             fill="none" 
//             viewBox="0 0 24 24"
//           >
//             <circle 
//               className="opacity-25" 
//               cx="12" 
//               cy="12" 
//               r="10" 
//               stroke="currentColor" 
//               strokeWidth="4"
//             ></circle>
//             <path 
//               className="opacity-75" 
//               fill="currentColor" 
//               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//             ></path>
//           </svg>
//           <p className="mt-2">Uploading...</p>
//         </div>
//       ) : (
//         <>
//           <p className="text-gray-600">
//             {isDragActive 
//               ? 'Drop the .docx file here' 
//               : 'Drag and drop a .docx file, or click to select'
//             }
//           </p>
//           <p className="text-sm text-gray-500 mt-2">
//             Only .docx files are supported (max 10MB)
//           </p>
//         </>
//       )}

//       {error && (
//         <div className="mt-4 text-red-600 text-sm">
//           {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUpload;




// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';

// const FileUpload = ({ onFileUpload, loading, error }) => {
//   const [password, setPassword] = useState(''); // State for password

//   const onDrop = useCallback(
//     (acceptedFiles) => {
//       const file = acceptedFiles[0];
//       if (file && file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
//         onFileUpload(file, password); // Pass password with file
//       }
//     },
//     [onFileUpload, password]
//   );

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: {
//       'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
//     },
//     multiple: false,
//   });

//   return (
//     <div className="space-y-4">
//       <div
//         {...getRootProps()}
//         className={`
//           border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
//           transition-colors duration-300
//           ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500'}
//         `}
//       >
//         <input {...getInputProps()} />
//         {loading ? (
//           <div className="text-blue-600">
//             <svg
//               className="animate-spin mx-auto h-10 w-10"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//               ></path>
//             </svg>
//             <p className="mt-2">Uploading...</p>
//           </div>
//         ) : (
//           <>
//             <p className="text-gray-600">
//               {isDragActive
//                 ? 'Drop the .docx file here'
//                 : 'Drag and drop a .docx file, or click to select'}
//             </p>
//             <p className="text-sm text-gray-500 mt-2">
//               Only .docx files are supported (max 10MB)
//             </p>
//           </>
//         )}

//         {error && (
//           <div className="mt-4 text-red-600 text-sm">
//             {error}
//           </div>
//         )}
//       </div>

//       {/* Password Input Field */}
//       <div className="space-y-2">
//         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//           Password for PDF (optional)
//         </label>
//         <input
//           id="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)} // Update password state
//           placeholder="Enter password (optional)"
//           className="block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
//         />
//       </div>
//     </div>
//   );
// };

// export default FileUpload;

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onFileUpload, loading, error }) => {
  const [password, setPassword] = useState(''); // State for password
  const [passwordProtected, setPasswordProtected] = useState(false); // State for password checkbox
  const [isUploaded, setIsUploaded] = useState(false);  // State for upload status

  // Handles file drop
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file && file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        // Upload the file with password if checked
        onFileUpload(file, passwordProtected ? password : null);
        setIsUploaded(true);  // Mark upload as complete
      }
    },
    [onFileUpload, password, passwordProtected]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    multiple: false,
  });

  // Handles the checkbox change for password protection
  const handleCheckboxChange = () => {
    if (!isUploaded) {  // Only allow changes before upload starts
      setPasswordProtected((prevState) => !prevState);
    }
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
          transition-colors duration-300
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500'}
        `}
      >
        <input {...getInputProps()} />
        {loading ? (
          <div className="text-blue-600">
            <svg
              className="animate-spin mx-auto h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="mt-2">Uploading...</p>
          </div>
        ) : (
          <>
            <p className="text-gray-600">
              {isDragActive
                ? 'Drop the .docx file here'
                : 'Drag and drop a .docx file, or click to select'}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Only .docx files are supported (max 10MB)
            </p>
          </>
        )}

        {error && (
          <div className="mt-4 text-red-600 text-sm">
            {error}
          </div>
        )}
      </div>

      {/* Password Protection Checkbox */}
      <div className="space-y-2">
        <div>
          <input
            type="checkbox"
            id="password-protection"
            checked={passwordProtected}
            onChange={handleCheckboxChange}
            disabled={isUploaded}  // Disable checkbox after upload starts
          />
          <label htmlFor="password-protection" className="ml-2">Add password protection</label>
        </div>

        {/* Password Input Field */}
        <div>
          <input
            type="password"
            placeholder="Enter password (optional)"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            disabled={isUploaded || !passwordProtected}  // Disable input after upload starts or if checkbox is unchecked
            style={{
              backgroundColor: (isUploaded || !passwordProtected) ? '#f0f0f0' : 'white', // Grayed out when disabled
              cursor: (isUploaded || !passwordProtected) ? 'not-allowed' : 'auto'
            }}
            className="block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
