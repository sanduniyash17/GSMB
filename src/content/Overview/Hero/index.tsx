import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Container, TextField, Typography } from '@mui/material';
import Link from 'src/components/Link';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if (username === 'admin' && password === 'password') {
      // Redirect to /dashboards/crypto on successful login
      router.push('/dashboards/crypto');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        border: '2px solid #29818a',
        marginTop: '100px',
        borderRadius: '10px',
        padding: '100px',
        marginBottom: '20px' // Add margin bottom for spacing
      }}
    >
      <Typography variant="h2" align="center">
        LOGIN
      </Typography>

      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          component={Link}
          href="/dashboards/crypto"
          variant="contained"
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '20px',
            justifyContent: 'center'
          }}
        >
          LOGIN
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
