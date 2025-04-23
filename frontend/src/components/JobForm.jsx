import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  TextField,
  Grid,
  Typography,
  CircularProgress,
} from '@mui/material';

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  requirements: Yup.string().required('Requirements are required'),
  location: Yup.string().required('Location is required'),
  salary_range: Yup.string().required('Salary range is required'),
});

const JobForm = ({ initialValues, onSubmit, loading }) => {
  const formik = useFormik({
    initialValues: initialValues || {
      title: '',
      description: '',
      requirements: '',
      location: '',
      salary_range: '',
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Job Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Job Description"
            multiline
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="requirements"
            name="requirements"
            label="Requirements"
            multiline
            rows={4}
            value={formik.values.requirements}
            onChange={formik.handleChange}
            error={formik.touched.requirements && Boolean(formik.errors.requirements)}
            helperText={formik.touched.requirements && formik.errors.requirements}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="location"
            name="location"
            label="Location"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="salary_range"
            name="salary_range"
            label="Salary Range"
            value={formik.values.salary_range}
            onChange={formik.handleChange}
            error={formik.touched.salary_range && Boolean(formik.errors.salary_range)}
            helperText={formik.touched.salary_range && formik.errors.salary_range}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              initialValues ? 'Update Job' : 'Create Job'
            )}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobForm; 