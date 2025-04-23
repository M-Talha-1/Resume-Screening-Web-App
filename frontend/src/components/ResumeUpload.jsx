import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Alert,
  Paper,
} from '@mui/material';
import { Upload as UploadIcon } from '@mui/icons-material';

const ResumeUpload = ({ onUpload, loading, error }) => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (isValidFile(droppedFile)) {
        setFile(droppedFile);
      }
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (isValidFile(selectedFile)) {
        setFile(selectedFile);
      }
    }
  };

  const isValidFile = (file) => {
    const validTypes = ['.pdf', '.docx', '.doc'];
    const fileType = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    return validTypes.includes(fileType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onUpload(file);
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          border: dragActive ? '2px dashed #1976d2' : '2px dashed #ccc',
          borderRadius: 2,
          backgroundColor: dragActive ? 'rgba(25, 118, 210, 0.04)' : 'transparent',
        }}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <UploadIcon sx={{ fontSize: 48, color: 'primary.main' }} />
          <Typography variant="h6" component="div">
            Drag and drop your resume here
          </Typography>
          <Typography variant="body2" color="text.secondary">
            or
          </Typography>
          <input
            accept=".pdf,.docx,.doc"
            style={{ display: 'none' }}
            id="resume-upload"
            type="file"
            onChange={handleChange}
          />
          <label htmlFor="resume-upload">
            <Button variant="outlined" component="span">
              Browse Files
            </Button>
          </label>
          {file && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              Selected file: {file.name}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!file || loading}
            sx={{ mt: 2 }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Upload Resume'
            )}
          </Button>
        </Box>
      </Paper>
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default ResumeUpload; 