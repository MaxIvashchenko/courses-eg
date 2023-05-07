import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { IconComponent } from '../IconComponent';
import { Loader } from '../Loader';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfWrapper = styled(Box)(({ theme }) => ({
  margin: '16px 0',
  '& canvas': {
    margin: '0 auto'
  },

  [theme.breakpoints.down('md')]: {
    '& canvas': {
      width: '400px !important',
      height: '480px !important',
      margin: 0
    }
  }
}));

interface PdfViewerProps {
  file_url: string;
}

const PdfViewer = ({ file_url }: PdfViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const backButtonDisabled = pageNumber === 1;
  const nextButtonDisabled = !!numPages && pageNumber >= numPages;

  const backPage = () => setPageNumber((prev) => prev - 1);

  const nextPage = () => setPageNumber((prev) => prev + 1);

  return (
    <PdfWrapper>
      <Document
        loading={<Loader isFullPage />}
        file={file_url}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <Stack
        flexDirection='row'
        justifyContent='space-around'
        alignItems='center'
        my={2}
      >
        <IconButton disabled={backButtonDisabled} onClick={backPage}>
          <IconComponent isMirror name='arrow' width={32} height={32} />
        </IconButton>
        <Typography>
          Слайд {pageNumber} из {numPages}
        </Typography>
        <IconButton onClick={nextPage} disabled={nextButtonDisabled}>
          <IconComponent name='arrow' width={32} height={32} />
        </IconButton>
      </Stack>
    </PdfWrapper>
  );
};

export default PdfViewer;
