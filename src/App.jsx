import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  Link,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';

// 1. Personalización del tema de Material UI con la paleta orgánica de Ali.
const aliTheme = createTheme({
  palette: {
    background: {
      default: '#FAF9F6', // Blanco cálido / crema
      paper: '#FAF9F6',
    },
    primary: {
      main: '#5F8B7A', // Verde salvia institucional
      dark: '#3B574A',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#2F5A4B',
      secondary: '#57534E', // Gris piedra cálido (contraste WCAG AA)
    },
    divider: '#E5E5E0',
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 4,
  },
});

const productos = [
  {
    id: 1,
    nombre: 'Jarrón Alba',
    descripcion: 'Cerámica artesanal · Marfil',
    precio: '38,00 €',
    imagen: '/images/Jarrón-Alba.jpg',
  },
  {
    id: 2,
    nombre: 'Cojín Brisa',
    descripcion: 'Lino lavado · Terracota · 45 × 45 cm',
    precio: '32,00 €',
    imagen: '/images/Cojin-Brisa.jpg',
  },
  {
    id: 3,
    nombre: 'Taza Tierra',
    descripcion: 'Gres esmaltado · Arena · 300 ml',
    precio: '18,00 €',
    imagen: '/images/Taza-Tierra.jpg',
  },
];

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <ThemeProvider theme={aliTheme}>
      <CssBaseline />

      {/* BARRA DE NAVEGACIÓN (AppBar + Toolbar de MUI) */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: '#E8EFEA',
          color: 'text.primary',
          borderBottom: '1px solid rgba(74, 107, 93, 0.12)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
            <Typography
              variant="h5"
              sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, color: 'primary.main' }}
            >
              Ali.
            </Typography>

            <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link href="#" underline="always" color="text.primary" sx={{ fontWeight: 500, fontSize: '0.9rem' }}>
                Inicio
              </Link>
              <Link href="#productos" underline="none" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                Tienda
              </Link>
              <Link href="#productos" underline="none" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                Colecciones
              </Link>
              <Link href="#contacto" underline="none" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                Nuestra esencia
              </Link>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton aria-label="Buscar" size="small" color="inherit">
                <SearchIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="Carrito" size="small" color="inherit">
                <Badge badgeContent={cartCount} color="primary">
                  <ShoppingBagOutlinedIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* SECCIÓN HERO */}
      <Box sx={{ bgcolor: '#E8EFEA', py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="overline"
                sx={{ letterSpacing: 2, color: 'text.secondary', fontWeight: 700 }}
              >
                OBJETOS PARA HABITAR
              </Typography>
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: '2.75rem', md: '3.75rem' }, lineHeight: 1.1, my: 2, color: 'primary.main' }}
              >
                Tu casa, tu pausa.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 400 }}>
                Texturas naturales, formas sencillas y piezas que hacen de cada día un lugar donde quedarse.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                sx={{ textTransform: 'none', px: 3, py: 1.25, boxShadow: 'none' }}
              >
                Descubre la colección
              </Button>
              <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 2 }}>
                Hecho con calma. Elegido para durar.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80"
                alt="Salón minimalista Ali."
                sx={{
                  width: '100%',
                  height: { xs: 300, md: 430 },
                  objectFit: 'cover',
                  borderRadius: 1,
                  display: 'block',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SECCIÓN DE PRODUCTOS DESTACADOS (Card + CardMedia + CardContent + CardActions de MUI) */}
      <Container id="productos" maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 2,
            mb: 5,
          }}
        >
          <Box>
            <Typography variant="overline" sx={{ letterSpacing: 2, color: 'text.secondary', fontWeight: 700 }}>
              NUESTRA SELECCIÓN
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.85rem', md: '2.4rem' }, color: 'primary.main', mt: 0.5 }}>
              Pequeños placeres, cada día.
            </Typography>
          </Box>

          <Link
            href="#"
            underline="always"
            color="text.secondary"
            sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, fontSize: '0.9rem' }}
          >
            Ver todos los productos →
          </Link>
        </Box>

        <Grid container spacing={4}>
          {productos.map((producto) => (
            <Grid key={producto.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card elevation={0} sx={{ bgcolor: 'transparent', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="320"
                  image={producto.imagen}
                  alt={producto.nombre}
                  sx={{ borderRadius: 1, objectFit: 'cover' }}
                />
                <CardContent sx={{ px: 0, pt: 2, pb: 1.5, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 0.5 }}>
                    <Typography variant="h3" sx={{ fontSize: '1.25rem', color: 'text.primary' }}>
                      {producto.nombre}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {producto.precio}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {producto.descripcion}
                  </Typography>
                </CardContent>

                <Divider sx={{ my: 1.5 }} />

                <CardActions sx={{ px: 0, pt: 1, justifyContent: 'center' }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<AddIcon fontSize="small" />}
                    onClick={handleAddToCart}
                    sx={{
                      borderRadius: '999px',
                      textTransform: 'none',
                      px: 3,
                      py: 0.75,
                      borderColor: '#C8D1CC',
                      color: 'text.primary',
                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: 'rgba(74, 107, 93, 0.06)',
                      },
                    }}
                  >
                    Agregar al carrito
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* PIE DE PÁGINA (Footer de contacto) */}
      <Box id="contacto" component="footer" sx={{ bgcolor: '#E8EFEA', py: 6, mt: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontSize: '1.5rem', mb: 2, color: 'text.primary' }}>
            Contáctanos
          </Typography>
          <Stack spacing={0.75} sx={{ fontSize: '0.9rem', color: 'text.primary' }}>
            <Typography variant="body2">
              <strong>Email:</strong> hola@aliesencia.com
            </Typography>
            <Typography variant="body2">
              <strong>Teléfono:</strong> WhatsApp: +34 910 00 12 34
            </Typography>
            <Typography variant="body2">
              <strong>Horario:</strong> Lunes a Viernes, de 9:00 a 18:00 hs
            </Typography>
            <Typography variant="body2">
              <strong>Ubicación:</strong> Calle de la Calma, 14, 28004 Madrid, España
            </Typography>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}