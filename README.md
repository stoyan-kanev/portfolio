# Stoyan Kanev - Portfolio Website

This is my personal portfolio website showcasing my skills, projects, and certifications as a Junior Web Developer.

🌐 **Live Demo**: [https://stoyan-kanev.com](https://stoyan-kanev.com)

## About

The portfolio includes:
- An "About Me" section
- My technical skills and tech stack
- Certifications and diplomas
- Projects with links to GitHub
- Contact information

Built with:
- **React** + **Vite**
- **Docker** + **NGINX**
- **Cloudflare** (for SSL and CDN)

## Technologies Used

- **React** (Frontend Framework)
- **Vite** (Frontend Build Tool)
- **NGINX** (Web Server inside Docker)
- **Docker Compose** (Deployment)
- **Cloudflare** (SSL, Domain & Proxy)

## Deployment

The portfolio is containerized with Docker and served via NGINX behind Cloudflare's proxy for additional security and performance.

### How to run locally

```bash
# Clone the repository
$ git clone https://github.com/yourusername/your-portfolio-repo.git

# Navigate into the project folder
$ cd portfolio

# Build the frontend (optional if you have source code)
$ cd front-end
$ npm install
$ npm run build

# Go back and start the container
$ cd ..
$ docker compose up -d --force-recreate
```

Then open `https://localhost` (with SSL warning if using self-signed certs).

## 📂 Project Structure

```
portfolio/
├── build/          # Compiled frontend files
├── certs/          # SSL certificates (optional for local testing)
├── front-end/      # Frontend source code (React + Vite)
├── docker-compose.yml
├── nginx.conf
└── README.md
```

---

## Contact

If you would like to get in touch, feel free to connect with me:

- **LinkedIn**: [Stoyan Kanev](https://www.linkedin.com/in/stoyan-kanev-042386207)
- **GitHub**: [Stoyan Kanev](https://github.com/LazyPotato02)
- **Email**: stoyan.kanev178@gmail.com

---

## License

This project is open for reference purposes.  
All rights reserved © 2025 Stoyan Kanev.

---

## 📸 Preview

*(You can add screenshots if you want later)*

