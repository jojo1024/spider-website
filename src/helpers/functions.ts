import store from "../store";
import { IAppState } from "../store/appSlice";
import { useEffect, useState } from 'react'
import fileDownload from 'js-file-download';


export const getServerUrl = () => {
  const appState = store?.getState()?.application as IAppState;
  return appState.serverUrl;
};

// fonction pour définir si on est en mode dev ou prod
export const isDev = () => !process.env.NODE_ENV || process.env.NODE_ENV === "development";




//Pour télécharger des fichiers

export const handleDownload = (url: string, fileName: string) => {
  fetch(url)
      .then(response => response.blob())
      .then(blob => {
          fileDownload(blob, fileName);
      });
};

// export const handleDownload = (blob: any, fileName: string) => {
//   const url = window.URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = fileName;
//   a.click();
//   window.URL.revokeObjectURL(url);
// };


// export const downloadChunks = async (FILE_URL: string, FILE_NAME: string) => {
//  console.log("🚀 ~ file: functions.ts:39 ~ downloadChunks ~ FILE_NAME:", FILE_NAME)
//  console.log("🚀 ~ file: functions.ts:39 ~ downloadChunks ~ FILE_URL:", FILE_URL)
 
//   // const FILE_URL = '/path/to/file.exe'; // URL du fichier à télécharger
//   // const FILE_NAME = 'file.exe'; // nom du fichier à télécharger
  
//   const CHUNK_SIZE = 10 * 1024 * 1024;
//   const response = await fetch(FILE_URL);
//   const totalSize:any = response.headers.get('content-length');
//   const chunkCount = Math.ceil(totalSize / CHUNK_SIZE);

//   for (let i = 0; i < chunkCount; i++) {
//     const start = i * CHUNK_SIZE;
//     const end = start + CHUNK_SIZE - 1;
//     const range = `bytes=${start}-${end}`;
//     const chunkResponse = await fetch(FILE_URL, {
//       headers: { Range: range }
//     });
//     const chunkBlob = await chunkResponse.blob();
//     const chunkName = `${FILE_NAME}.part${i + 1}`;
//     handleDownload(chunkBlob, chunkName);
//     console.log("🚀 ~ file: functions.ts:60 ~ downloadChunks ~ chunkName:", chunkName)
//   }
// };

export const downloadFile = async (url: string, fileName: string) => {
  const response = await fetch(url);
  const contentLength = response.headers.get('Content-Length');
  console.log("🚀 ~ file: functions.ts:31 ~ downloadFile ~ contentLength:", contentLength)
  // @ts-ignore
  const fileSize = parseInt(contentLength, 10);
  if (!fileSize) {
    throw new Error('Unable to determine file size');
  }

  let loadedSize = 0;
  const chunks = [];
  // @ts-ignore

  const reader = response.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    loadedSize += value.length;
    chunks.push(value);
  }

  if (loadedSize !== fileSize) {
    throw new Error('Downloaded file is incomplete');
  }

  const blob = new Blob(chunks);
  fileDownload(blob, fileName);
};
