<div align="center">
  <img src="https://res.cloudinary.com/cloudinary/image/upload/v1648719225/website/cloudinary_logo_blue_0720_2x.png" alt="Cloudinary" width="200" />
  
  # 🌌 MediaForge 
  **Automated Media Transformation Platform**
  
  *A premium Next.js application for real-time Cloudinary image uploads and dynamic transformations.*

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Cloudinary-SDK-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary" />
  </p>
</div>

<br />

## 📖 Overview

MediaForge is a robust, full-stack web application designed to demonstrate the power of Cloudinary's dynamic media transformations. Built with a modern, glassmorphism UI, users can effortlessly drag-and-drop images, securely upload them to the cloud, and apply real-time URL-based transformations like Cropping and Grayscale—all tracked via a high-performance PostgreSQL database.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| 🚀 **Drag & Drop Uploads** | Smooth, intuitive upload interface with real-time file validation and progress states. |
| ☁️ **Cloudinary Integration** | Secure server-side uploading via the Node.js SDK `upload_stream`. |
| 🎨 **Dynamic Transformations** | Real-time URL manipulation for instant image edits (`w_500,h_500,c_crop`, `e_grayscale`). |
| 💎 **Premium UI/UX** | Dark mode by default, featuring glassmorphism cards, glowing accents, and smooth transitions. |
| 🗄️ **Robust Data Layer** | PostgreSQL database managed by Prisma ORM with cascading relations. |
| ⚙️ **Automated CI/CD** | GitHub Actions pipeline validating Next.js builds on every push to `main`. |

---

## 🛠️ Architecture

```mermaid
graph LR
    Client[Frontend UI] -->|FormData| API["/api/upload"]
    API -->|Node.js SDK| Cloudinary[Cloudinary Cloud]
    API -->|Prisma Client| Database[(PostgreSQL)]
    Cloudinary -->|Returns URL| API
    Client -->|Toggle Filter| Client
```

---

## 🚦 Quick Start Guide

### 1. Prerequisites
Ensure you have the following installed and configured:
* **Node.js** (v18.0.0 or higher)
* **PostgreSQL** (Running locally or hosted via Supabase/Neon)
* **Cloudinary Account** (Free tier is perfect)

### 2. Installation
Clone the repository and install the required npm packages:

```bash
git clone https://github.com/yourusername/automated-media-transform.git
cd automated-media-transform
npm install
```

### 3. Environment Configuration
Duplicate the example environment file:
```bash
cp .env.example .env
```
Populate the `.env` file with your specific database connection string and Cloudinary API credentials:
```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME?schema=public"

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Database Initialization
Push the Prisma schema to your PostgreSQL database to construct the required `User` and `Image` tables:
```bash
npx prisma db push
```

Run the seed script to generate a default demo user (required for the upload form):
```bash
npx prisma db seed
```

### 5. Launch the Application
Start the Next.js development server:
```bash
npm run dev
```
Navigate to [`http://localhost:3000`](http://localhost:3000) in your browser to start transforming media!

---

## 🤖 Continuous Integration

This project is fortified with a **GitHub Actions CI Pipeline** (`.github/workflows/main.yml`). 
Upon every `push` or `pull_request` targeting the `main` branch, the pipeline will automatically:
1. Provision a Node.js environment.
2. Install dependencies.
3. Execute `npm run build` to guarantee type safety and compilation stability before any deployment.

---

<div align="center">
  <p>Built with ❤️ using Next.js & Cloudinary</p>
</div>