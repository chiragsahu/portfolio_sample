import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import nikiLogo from '../assets/nikiLogo.png';

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#18191A',
        color: '#fff',
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <Typography
                variant="h6"
                color="primary"
                sx={{ mb: 2 }}
              >
                Hi 👋, my name is
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                Nikita Verma
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                }}
              >
                I build amazing mobile apps with Flutter
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: false }}
            >
              <Typography
                variant="body1"
                sx={{
                  maxWidth: '600px',
                  mb: 4,
                  color: 'text.secondary',
                }}
              >
                I'm a Flutter developer specializing in building exceptional mobile applications.
                Currently, I'm focused on creating seamless, user-friendly cross-platform experiences at NIC Raipur.
              </Typography>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                component="a"
                href="#contact"
                sx={{
                  display: 'inline-block',
                  px: 4,
                  py: 2,
                  border: '1px solid',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  textDecoration: 'none',
                  borderRadius: 1,
                  '&:hover': {
                    bgcolor: 'rgba(100, 255, 218, 0.1)',
                  },
                }}
              >
                Get In Touch
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <motion.img
              src={nikiLogo}
              alt="Niki Logo Illustration"
              style={{ maxWidth: '90%', height: 'auto', borderRadius: '16px' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 