import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { Link } from "@tanstack/react-router";
import { projects, type Project } from "@/data/projects";
import { ArrowRight, ExternalLink, X, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/cn";

// Rich Morocco leather & buckram cloth palettes (Color Graded)
const LEATHER_PALETTES = [
  { main: "#0d0f13", light: "#1a1d26", dark: "#050608", gold: "#F5C869", accent: "#E44C1F" }, // Deep Onyx
  { main: "#08111c", light: "#122236", dark: "#03070d", gold: "#EAB957", accent: "#E44C1F" }, // Midnight Sapphire
  { main: "#160d08", light: "#28170f", dark: "#070402", gold: "#EEBE5F", accent: "#E44C1F" }, // Havana Chestnut
  { main: "#07140f", light: "#10261b", dark: "#030806", gold: "#E5B656", accent: "#E44C1F" }, // Forest Spruce
  { main: "#160a12", light: "#291222", dark: "#070206", gold: "#F0C164", accent: "#E44C1F" }, // Vintage Bordeaux
  { main: "#101216", light: "#1c1f27", dark: "#060709", gold: "#E8B755", accent: "#E44C1F" }, // Smoked Charcoal
];

// Global in-memory image cache for fast instant canvas texture drawing
const imageCache = new Map<string, HTMLImageElement>();

function preloadProjectImages() {
  if (typeof window === "undefined") return;
  projects.forEach((p) => {
    if (p.image && !imageCache.has(p.image)) {
      const img = new Image();
      img.onload = () => {
        imageCache.set(p.image, img);
      };
      img.src = p.image;
    }
  });
}
preloadProjectImages();

// 1. Dark American Walnut Wood Texture
function createWalnutWoodTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const grad = ctx.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, "#1c1612");
  grad.addColorStop(0.5, "#261e18");
  grad.addColorStop(1, "#17120e");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 256);

  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  for (let i = 0; i < 80; i++) {
    const y = Math.random() * 256;
    ctx.fillRect(0, y, 512, 1 + Math.random() * 2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 1);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// 2. Realistic Contact Drop Shadow
function createContactShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const grad = ctx.createRadialGradient(64, 64, 4, 64, 64, 58);
  grad.addColorStop(0, "rgba(0, 0, 0, 0.95)");
  grad.addColorStop(0.3, "rgba(0, 0, 0, 0.65)");
  grad.addColorStop(0.7, "rgba(0, 0, 0, 0.18)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// 3. Realistic 5-Rib Gold Foil Leather Spine Texture (128x1024)
function createSpineTexture(project: Project, index: number): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const palette = LEATHER_PALETTES[index % LEATHER_PALETTES.length];

  // Base leather texture with realistic spine curvature
  const baseGrad = ctx.createLinearGradient(0, 0, 128, 0);
  baseGrad.addColorStop(0, palette.dark);
  baseGrad.addColorStop(0.2, palette.main);
  baseGrad.addColorStop(0.5, palette.light);
  baseGrad.addColorStop(0.8, palette.main);
  baseGrad.addColorStop(1, palette.dark);
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, 128, 1024);

  // Micro leather grain
  ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
  for (let y = 0; y < 1024; y += 3) {
    ctx.fillRect(0, y, 128, 1);
  }

  // 5 Classic Raised Gold Ribs with 3D bevel shading
  const ribPositions = [110, 300, 500, 700, 890];
  ribPositions.forEach((y) => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
    ctx.fillRect(0, y + 10, 128, 6);

    const ribGrad = ctx.createLinearGradient(0, y, 0, y + 10);
    ribGrad.addColorStop(0, "rgba(255, 255, 255, 0.3)");
    ribGrad.addColorStop(0.4, palette.light);
    ribGrad.addColorStop(1, "rgba(0, 0, 0, 0.55)");
    ctx.fillStyle = ribGrad;
    ctx.fillRect(0, y, 128, 10);

    ctx.fillStyle = palette.gold;
    ctx.fillRect(16, y + 3, 96, 3);
  });

  // Volume Numbering Box (Crisp 24K Gold)
  ctx.save();
  ctx.translate(64, 205);
  ctx.rotate(-Math.PI / 2);
  ctx.font = "bold 26px 'Space Grotesk', sans-serif";
  ctx.fillStyle = palette.gold;
  ctx.shadowColor = "rgba(0, 0, 0, 0.95)";
  ctx.shadowBlur = 6;
  ctx.textAlign = "center";
  ctx.fillText(`VOL. ${String(index + 1).padStart(2, "0")}`, 0, 0);
  ctx.restore();

  // Vertical Project Title (Large, Bold White - Ultra Readable)
  ctx.save();
  ctx.translate(64, 500);
  ctx.rotate(-Math.PI / 2);
  ctx.font = "bold 38px 'Playfair Display', Georgia, serif";
  ctx.fillStyle = "#FFFFFF";
  ctx.shadowColor = "rgba(0, 0, 0, 0.95)";
  ctx.shadowBlur = 8;
  ctx.shadowOffsetY = 2;
  ctx.textAlign = "center";

  let title = project.title.toUpperCase();
  if (title.length > 15) {
    title = title.slice(0, 13) + "..";
  }
  ctx.fillText(title, 0, 0);
  ctx.restore();

  // Studio Monogram at bottom
  ctx.save();
  ctx.translate(64, 795);
  ctx.rotate(-Math.PI / 2);
  ctx.font = "bold 18px 'Space Grotesk', sans-serif";
  ctx.fillStyle = palette.gold;
  ctx.textAlign = "center";
  ctx.fillText("CODEWITHABBY", 0, 0);
  ctx.restore();

  ctx.fillStyle = "#E44C1F";
  ctx.fillRect(24, 955, 80, 5);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// 4. Ultra-Crisp 2K Leather Cover Texture (1024x1400)
function createCoverTexture(project: Project, index: number, image?: HTMLImageElement): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1400;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const palette = LEATHER_PALETTES[index % LEATHER_PALETTES.length];

  ctx.fillStyle = palette.main;
  ctx.fillRect(0, 0, 1024, 1400);

  const coverVignette = ctx.createRadialGradient(512, 700, 200, 512, 700, 720);
  coverVignette.addColorStop(0, "rgba(255, 255, 255, 0.02)");
  coverVignette.addColorStop(0.7, "rgba(0, 0, 0, 0.28)");
  coverVignette.addColorStop(1, "rgba(0, 0, 0, 0.85)");
  ctx.fillStyle = coverVignette;
  ctx.fillRect(0, 0, 1024, 1400);

  // Debossed Outer Border Frame
  ctx.strokeStyle = "rgba(0, 0, 0, 0.95)";
  ctx.lineWidth = 8;
  ctx.strokeRect(36, 36, 952, 1328);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
  ctx.lineWidth = 3;
  ctx.strokeRect(44, 44, 936, 1312);

  ctx.strokeStyle = palette.gold;
  ctx.lineWidth = 3;
  ctx.strokeRect(60, 60, 904, 1280);

  // Top Header Tag
  ctx.font = "bold 26px 'Space Grotesk', -apple-system, sans-serif";
  ctx.fillStyle = palette.gold;
  ctx.letterSpacing = "4px";
  ctx.fillText(`CODEWITHABBY ARCHIVE // VOL. ${String(index + 1).padStart(2, "0")}`, 88, 120);

  // Massive Project Screenshot Plate
  const imgX = 88;
  const imgY = 160;
  const imgW = 848;
  const imgH = 580;

  if (image && image.naturalWidth > 0) {
    try {
      ctx.save();
      ctx.shadowColor = "rgba(0, 0, 0, 0.95)";
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 8;
      ctx.fillStyle = "#000000";
      ctx.fillRect(imgX, imgY, imgW, imgH);
      ctx.shadowColor = "transparent";

      ctx.beginPath();
      ctx.roundRect(imgX, imgY, imgW, imgH, 12);
      ctx.clip();

      // Crop top hero section for tall screenshots to avoid blank middle areas
      const srcW = image.naturalWidth;
      const targetAspect = imgH / imgW;
      const srcH = Math.min(image.naturalHeight, Math.round(srcW * targetAspect * 1.15));
      ctx.drawImage(image, 0, 0, srcW, srcH, imgX, imgY, imgW, imgH);

      const grad = ctx.createLinearGradient(0, imgY + imgH - 160, 0, imgY + imgH);
      grad.addColorStop(0, "rgba(0, 0, 0, 0)");
      grad.addColorStop(1, "rgba(6, 7, 10, 0.9)");
      ctx.fillStyle = grad;
      ctx.fillRect(imgX, imgY, imgW, imgH);
      ctx.restore();

      ctx.strokeStyle = "rgba(228, 76, 31, 0.8)";
      ctx.lineWidth = 3;
      ctx.strokeRect(imgX - 1, imgY - 1, imgW + 2, imgH + 2);
    } catch {
      drawFallbackPlate(ctx, project, palette, imgX, imgY, imgW, imgH);
    }
  } else {
    drawFallbackPlate(ctx, project, palette, imgX, imgY, imgW, imgH);
  }

  // Category Tag
  ctx.font = "bold 26px 'Space Grotesk', sans-serif";
  ctx.fillStyle = palette.gold;
  ctx.fillText(project.category.toUpperCase(), 88, 805);

  // Project Title (White & Bold)
  ctx.font = "bold 68px 'Playfair Display', Georgia, serif";
  ctx.fillStyle = "#FFFFFF";
  ctx.shadowColor = "rgba(0, 0, 0, 0.95)";
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 4;
  ctx.fillText(project.title, 88, 890);
  ctx.shadowColor = "transparent";

  // Tagline
  ctx.font = "500 30px -apple-system, BlinkMacSystemFont, sans-serif";
  ctx.fillStyle = "rgba(245, 245, 240, 0.85)";
  const words = project.tagline.split(" ");
  let line = "";
  let y = 960;
  for (let n = 0; n < words.length && y < 1140; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    if (metrics.width > 830 && n > 0) {
      ctx.fillText(line, 88, y);
      line = words[n] + " ";
      y += 46;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, 88, y);

  // Bottom Verified Impact Plate
  ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
  ctx.fillRect(88, 1200, 848, 96);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
  ctx.lineWidth = 2;
  ctx.strokeRect(88, 1200, 848, 96);

  ctx.font = "bold 28px 'Space Grotesk', sans-serif";
  ctx.fillStyle = "#E44C1F";
  ctx.fillText(project.impact || "Production Build", 116, 1260);

  ctx.font = "bold 24px 'Space Grotesk', sans-serif";
  ctx.fillStyle = "rgba(240, 240, 235, 0.6)";
  ctx.textAlign = "right";
  ctx.fillText(`YEAR // ${project.year}`, 900, 1260);
  ctx.textAlign = "left";

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function drawFallbackPlate(
  ctx: CanvasRenderingContext2D,
  project: Project,
  palette: typeof LEATHER_PALETTES[0],
  imgX: number,
  imgY: number,
  imgW: number,
  imgH: number
) {
  ctx.fillStyle = palette.dark;
  ctx.fillRect(imgX, imgY, imgW, imgH);

  ctx.strokeStyle = palette.gold;
  ctx.lineWidth = 3;
  ctx.strokeRect(imgX + 16, imgY + 16, imgW - 32, imgH - 32);

  ctx.font = "bold 48px 'Playfair Display', Georgia, serif";
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "center";
  ctx.fillText(project.title, imgX + imgW / 2, imgY + imgH / 2);
  ctx.textAlign = "left";
}

// 5. Archival Paper Edge Texture
function createPageEdgeTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.fillStyle = "#ded6c4";
  ctx.fillRect(0, 0, 64, 256);

  ctx.fillStyle = "rgba(0, 0, 0, 0.09)";
  for (let y = 0; y < 256; y += 3) {
    ctx.fillRect(0, y, 64, 1);
  }

  const edgeGrad = ctx.createLinearGradient(0, 0, 64, 0);
  edgeGrad.addColorStop(0, "rgba(0, 0, 0, 0.25)");
  edgeGrad.addColorStop(0.15, "rgba(0, 0, 0, 0.05)");
  edgeGrad.addColorStop(1, "rgba(220, 180, 100, 0.1)");
  ctx.fillStyle = edgeGrad;
  ctx.fillRect(0, 0, 64, 256);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function ProjectShelf3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredProjectTitle, setHoveredProjectTitle] = useState<string | null>(null);

  const activeIndexRef = useRef<number | null>(null);
  const hoveredIndexRef = useRef<number | null>(null);
  const bookMeshesRef = useRef<THREE.Mesh[]>([]);
  const bookGroupsRef = useRef<THREE.Group[]>([]);
  const shadowMeshesRef = useRef<THREE.Mesh[]>([]);

  // Camera Target
  const targetCameraPosRef = useRef(new THREE.Vector3(0, 0.2, 9.8));
  const currentCameraPosRef = useRef(new THREE.Vector3(0, 0.2, 9.8));
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const startCameraXRef = useRef(0);

  const totalProjects = projects.length; // 13 projects
  const spacing = 0.72; // Bold, spacious layout

  const handleSelectBook = useCallback((index: number) => {
    activeIndexRef.current = index;
    setActiveIndex(index);
    setActiveProject(projects[index]);
  }, []);

  const handleCloseDetail = useCallback(() => {
    activeIndexRef.current = null;
    setActiveIndex(null);
    setActiveProject(null);
  }, []);

  const handleNextBook = useCallback(() => {
    const current = activeIndexRef.current ?? -1;
    const next = (current + 1) % totalProjects;
    handleSelectBook(next);
  }, [totalProjects, handleSelectBook]);

  const handlePrevBook = useCallback(() => {
    const current = activeIndexRef.current ?? 0;
    const prev = (current - 1 + totalProjects) % totalProjects;
    handleSelectBook(prev);
  }, [totalProjects, handleSelectBook]);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseDetail();
      } else if (e.key === "ArrowRight") {
        handleNextBook();
      } else if (e.key === "ArrowLeft") {
        handlePrevBook();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleCloseDetail, handleNextBook, handlePrevBook]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 650;

    // 1. SCENE & CAMERA
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#08090c");
    scene.fog = new THREE.FogExp2("#08090c", 0.03);

    const initialZ = width < 768 ? 12.2 : (width < 1200 ? 10.8 : 9.8);
    targetCameraPosRef.current.set(0, 0.2, initialZ);
    currentCameraPosRef.current.set(0, 0.2, initialZ);

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 80);
    camera.position.copy(targetCameraPosRef.current);

    // 2. HIGH-PERFORMANCE WEBGL RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    // 3. ARCHITECTURAL LIGHTING (Optimized 60 FPS)
    const ambientLight = new THREE.AmbientLight("#dcd2c4", 0.6);
    scene.add(ambientLight);

    const keySpot = new THREE.DirectionalLight("#fff5e6", 2.2);
    keySpot.position.set(3, 8, 6);
    scene.add(keySpot);

    const amberRimLight = new THREE.PointLight("#E44C1F", 2.6, 16);
    amberRimLight.position.set(0, -1.8, 3.2);
    scene.add(amberRimLight);

    const fillLight = new THREE.DirectionalLight("#50627a", 0.7);
    fillLight.position.set(-6, 4, 4);
    scene.add(fillLight);

    // 4. ARCHITECTURAL LUXURY BOOKCASE
    const shelfWidth = totalProjects * spacing + 1.6;
    const bookcaseGroup = new THREE.Group();

    const woodTexture = createWalnutWoodTexture();
    const woodMat = new THREE.MeshStandardMaterial({
      map: woodTexture,
      roughness: 0.38,
      metalness: 0.12,
    });

    const brassTrimMat = new THREE.MeshStandardMaterial({
      color: "#d4af37",
      roughness: 0.25,
      metalness: 0.85,
    });

    // Bottom Shelf
    const shelfGeo = new THREE.BoxGeometry(shelfWidth, 0.35, 3.6);
    const bottomShelfMesh = new THREE.Mesh(shelfGeo, woodMat);
    bottomShelfMesh.position.set(0, -1.95, 0);
    bookcaseGroup.add(bottomShelfMesh);

    // Bottom Brass Trim
    const bottomBrassGeo = new THREE.BoxGeometry(shelfWidth, 0.05, 0.08);
    const bottomBrass = new THREE.Mesh(bottomBrassGeo, brassTrimMat);
    bottomBrass.position.set(0, -1.8, 1.76);
    bookcaseGroup.add(bottomBrass);

    // Top Shelf Canopy
    const topShelfGeo = new THREE.BoxGeometry(shelfWidth, 0.35, 3.6);
    const topShelfMesh = new THREE.Mesh(topShelfGeo, woodMat);
    topShelfMesh.position.set(0, 2.15, 0);
    bookcaseGroup.add(topShelfMesh);

    // Top Brass Trim
    const topBrassGeo = new THREE.BoxGeometry(shelfWidth, 0.05, 0.08);
    const topBrass = new THREE.Mesh(topBrassGeo, brassTrimMat);
    topBrass.position.set(0, 2.0, 1.76);
    bookcaseGroup.add(topBrass);

    // Left Upright Wall
    const uprightGeo = new THREE.BoxGeometry(0.45, 4.45, 3.6);
    const leftUpright = new THREE.Mesh(uprightGeo, woodMat);
    leftUpright.position.set(-shelfWidth / 2 - 0.22, 0.1, 0);
    bookcaseGroup.add(leftUpright);

    // Right Upright Wall
    const rightUpright = new THREE.Mesh(uprightGeo, woodMat);
    rightUpright.position.set(shelfWidth / 2 + 0.22, 0.1, 0);
    bookcaseGroup.add(rightUpright);

    // Back Panel
    const backWallGeo = new THREE.BoxGeometry(shelfWidth + 1.0, 4.4, 0.2);
    const backWallMat = new THREE.MeshStandardMaterial({
      color: "#0c0d10",
      roughness: 0.85,
      metalness: 0.05,
    });
    const backWall = new THREE.Mesh(backWallGeo, backWallMat);
    backWall.position.set(0, 0.1, -1.7);
    bookcaseGroup.add(backWall);

    scene.add(bookcaseGroup);

    // 5. BIGGER GRAND BOOKS WITH 5 RAISED GOLD RIBS & REALISTIC LEATHER
    const bookWidth = 0.44;
    const bookHeight = 3.2;
    const bookDepth = 2.2;
    const sharedBookGeo = new THREE.BoxGeometry(bookWidth, bookHeight, bookDepth);

    const pageEdgeTexture = createPageEdgeTexture();
    const sharedPageEdgeMat = new THREE.MeshStandardMaterial({
      map: pageEdgeTexture,
      roughness: 0.8,
      metalness: 0.05,
    });

    const contactShadowTexture = createContactShadowTexture();
    const shadowGeo = new THREE.PlaneGeometry(0.95, 2.4);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: contactShadowTexture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const startX = -((totalProjects - 1) * spacing) / 2;
    const bookGroups: THREE.Group[] = [];
    const bookMeshes: THREE.Mesh[] = [];
    const shadowMeshes: THREE.Mesh[] = [];

    projects.forEach((project, idx) => {
      const bookGroup = new THREE.Group();
      (bookGroup as any).projectIndex = idx;

      const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat.clone());
      shadowMesh.rotation.x = -Math.PI / 2;
      shadowMesh.position.set(0, -1.76, 0.1);
      bookGroup.add(shadowMesh);
      shadowMeshes.push(shadowMesh);

      const spineTexture = createSpineTexture(project, idx);
      const spineMat = new THREE.MeshStandardMaterial({
        map: spineTexture,
        roughness: 0.35,
        metalness: 0.15,
      });

      const cachedImg = project.image ? imageCache.get(project.image) : undefined;
      const initialImg = cachedImg && cachedImg.naturalWidth > 0 ? cachedImg : undefined;

      const coverTexture = createCoverTexture(project, idx, initialImg);
      const coverMat = new THREE.MeshStandardMaterial({
        map: coverTexture,
        roughness: 0.32,
        metalness: 0.1,
      });

      if (project.image && (!initialImg || initialImg.naturalWidth === 0)) {
        const img = new Image();
        const onImageReady = () => {
          if (img.naturalWidth > 0) {
            imageCache.set(project.image, img);
            const upgraded = createCoverTexture(project, idx, img);
            upgraded.needsUpdate = true;
            coverMat.map = upgraded;
            coverMat.needsUpdate = true;
          }
        };
        img.onload = onImageReady;
        img.src = project.image;
        if (img.complete && img.naturalWidth > 0) {
          onImageReady();
        }
      }

      // Materials: [+X (Front Cover), -X (Back Cover), +Y (Top), -Y (Bottom), +Z (Spine), -Z (Edge)]
      const materials = [
        coverMat,
        coverMat,
        sharedPageEdgeMat,
        sharedPageEdgeMat,
        spineMat,
        sharedPageEdgeMat,
      ];

      const bookMesh = new THREE.Mesh(sharedBookGeo, materials);
      bookMesh.position.set(0, bookHeight / 2 - 1.76, 0);
      (bookMesh as any).projectIndex = idx;
      bookGroup.add(bookMesh);
      bookMeshes.push(bookMesh);

      // Angled gallery pose (-0.35 rad)
      const posX = startX + idx * spacing;
      const displayAngleY = -0.35;
      const naturalTiltZ = ((idx % 3) - 1) * 0.012;

      bookGroup.position.set(posX, 0, 0);
      bookGroup.rotation.y = displayAngleY;
      bookGroup.rotation.z = naturalTiltZ;

      (bookGroup as any).basePosition = new THREE.Vector3(posX, 0, 0);
      (bookGroup as any).baseRotation = new THREE.Euler(0, displayAngleY, naturalTiltZ);

      scene.add(bookGroup);
      bookGroups.push(bookGroup);
    });

    bookGroupsRef.current = bookGroups;
    bookMeshesRef.current = bookMeshes;
    shadowMeshesRef.current = shadowMeshes;

    // 6. RAYCASTING & INTERACTION
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    };

    let lastHovered = -1;

    const onPointerMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        const deltaX = (e.clientX - dragStartXRef.current) * 0.008;
        const maxPan = 3.8;
        targetCameraPosRef.current.x = Math.max(-maxPan, Math.min(maxPan, startCameraXRef.current - deltaX));
      } else {
        updatePointer(e.clientX, e.clientY);
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(bookMeshes, false);

        if (hits.length > 0) {
          const hitIndex = (hits[0].object as any).projectIndex;
          hoveredIndexRef.current = hitIndex;
          container.style.cursor = "pointer";

          if (hitIndex !== lastHovered) {
            lastHovered = hitIndex;
            setHoveredProjectTitle(projects[hitIndex].title);
          }
        } else {
          hoveredIndexRef.current = null;
          container.style.cursor = isDraggingRef.current ? "grabbing" : "grab";
          if (lastHovered !== -1) {
            lastHovered = -1;
            setHoveredProjectTitle(null);
          }
        }
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        isDraggingRef.current = true;
        dragStartXRef.current = e.clientX;
        startCameraXRef.current = targetCameraPosRef.current.x;
      }
    };

    const onMouseUp = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        const dragDist = Math.abs(e.clientX - dragStartXRef.current);
        if (dragDist < 6) {
          if (hoveredIndexRef.current !== null) {
            handleSelectBook(hoveredIndexRef.current);
          } else if (activeIndexRef.current !== null) {
            handleCloseDetail();
          }
        }
      }
    };

    // Mobile touch
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        dragStartXRef.current = e.touches[0].clientX;
        startCameraXRef.current = targetCameraPosRef.current.x;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current && e.touches.length === 1) {
        const deltaX = (e.touches[0].clientX - dragStartXRef.current) * 0.01;
        const maxPan = 3.8;
        targetCameraPosRef.current.x = Math.max(-maxPan, Math.min(maxPan, startCameraXRef.current - deltaX));
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        if (e.changedTouches.length > 0) {
          const touch = e.changedTouches[0];
          const dist = Math.abs(touch.clientX - dragStartXRef.current);
          if (dist < 8) {
            updatePointer(touch.clientX, touch.clientY);
            raycaster.setFromCamera(mouse, camera);
            const hits = raycaster.intersectObjects(bookMeshes, false);
            if (hits.length > 0) {
              const idx = (hits[0].object as any).projectIndex;
              handleSelectBook(idx);
            } else if (activeIndexRef.current !== null) {
              handleCloseDetail();
            }
          }
        }
      }
    };

    container.addEventListener("mousemove", onPointerMove);
    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd);

    // 7. RESIZE LISTENER
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      const zDistance = w < 768 ? 12.2 : (w < 1200 ? 10.8 : 9.8);
      if (activeIndexRef.current === null) {
        targetCameraPosRef.current.z = zDistance;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // 8. 60FPS FRAME-RATE INDEPENDENT RAF LOOP
    let rafId: number;
    let isVisible = true;
    const clock = new THREE.Clock();

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = Math.min(clock.getDelta(), 0.1);
      const lerpFactor = 1 - Math.exp(-12 * delta);

      currentCameraPosRef.current.lerp(targetCameraPosRef.current, lerpFactor);
      camera.position.copy(currentCameraPosRef.current);
      camera.lookAt(currentCameraPosRef.current.x * 0.8, 0.0, 0);

      const activeIdx = activeIndexRef.current;
      const hoveredIdx = hoveredIndexRef.current;

      for (let i = 0; i < totalProjects; i++) {
        const group = bookGroups[i];
        const shadow = shadowMeshes[i];
        if (!group) continue;

        const basePos = (group as any).basePosition;
        const baseRot = (group as any).baseRotation;

        if (hoveredIdx === i || activeIdx === i) {
          // Hovered or active book lifts and glides forward slightly (natural, subtle showcase)
          group.position.x += (basePos.x - group.position.x) * (1 - Math.exp(-16 * delta));
          group.position.y += (basePos.y + 0.28 - group.position.y) * (1 - Math.exp(-16 * delta));
          group.position.z += (basePos.z + 0.6 - group.position.z) * (1 - Math.exp(-16 * delta));

          group.rotation.y += (-0.52 - group.rotation.y) * (1 - Math.exp(-16 * delta));
          group.rotation.z += (0 - group.rotation.z) * (1 - Math.exp(-16 * delta));
          group.rotation.x += (0 - group.rotation.x) * (1 - Math.exp(-16 * delta));

          if (shadow) {
            (shadow.material as THREE.MeshBasicMaterial).opacity += (0.45 - (shadow.material as THREE.MeshBasicMaterial).opacity) * lerpFactor;
            shadow.scale.set(1.2, 1.2, 1.2);
          }
        } else {
          // Resting in bookcase
          group.position.x += (basePos.x - group.position.x) * (1 - Math.exp(-12 * delta));
          group.position.y += (basePos.y - group.position.y) * (1 - Math.exp(-12 * delta));
          group.position.z += (basePos.z - group.position.z) * (1 - Math.exp(-12 * delta));

          group.rotation.y += (baseRot.y - group.rotation.y) * (1 - Math.exp(-12 * delta));
          group.rotation.z += (baseRot.z - group.rotation.z) * (1 - Math.exp(-12 * delta));
          group.rotation.x += (0 - group.rotation.x) * (1 - Math.exp(-12 * delta));

          if (shadow) {
            (shadow.material as THREE.MeshBasicMaterial).opacity += (0.85 - (shadow.material as THREE.MeshBasicMaterial).opacity) * lerpFactor;
            shadow.scale.set(1.0, 1.0, 1.0);
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. CLEANUP
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", onPointerMove);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sharedBookGeo.dispose();
      sharedPageEdgeMat.dispose();
      pageEdgeTexture.dispose();
      woodTexture.dispose();
      contactShadowTexture.dispose();
    };
  }, [totalProjects, handleSelectBook]);

  return (
    <section id="shelf" className="relative w-full bg-[#08090c] py-20 border-t border-b border-white/[0.08] overflow-hidden select-none">
      {/* Subtle warm architectural glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[360px] bg-[#E44C1F]/[0.05] blur-[150px] pointer-events-none rounded-full" />

      {/* Header section */}
      <div className="max-w-7xl mx-auto px-6 mb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E44C1F]/10 border border-[#E44C1F]/30 text-[#E44C1F] text-xs font-medium tracking-wider uppercase mb-3">
            <span>OUR PORTFOLIO</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-editorial-serif">
            Our Work & <span className="italic text-[#E44C1F] font-normal">Live Websites</span>
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
            Click on any book below to view the website, client results, and live link. Explore all {totalProjects} projects we designed and built.
          </p>
        </div>

        {/* Bookcase Navigation Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrevBook}
            className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#E44C1F]/50 hover:bg-[#E44C1F]/10 text-white transition-all cursor-pointer"
            aria-label="Previous Volume"
            title="Previous Volume"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextBook}
            className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#E44C1F]/50 hover:bg-[#E44C1F]/10 text-white transition-all cursor-pointer"
            aria-label="Next Volume"
            title="Next Volume"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          {activeIndex !== null && (
            <button
              onClick={handleCloseDetail}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white text-xs font-mono tracking-wider transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#E44C1F]" />
              <span>OVERVIEW</span>
            </button>
          )}
        </div>
      </div>

      {/* 3D Realistic Architectural Bookcase Viewport */}
      <div className="relative w-full h-[620px] md:h-[680px] cursor-grab active:cursor-grabbing">
        <div ref={mountRef} className="w-full h-full" />

        {/* Creative Hover Inspection Capsule */}
        {hoveredProjectTitle && activeIndex === null && (
          <div
            onClick={() => {
              if (hoveredIndexRef.current !== null) {
                handleSelectBook(hoveredIndexRef.current);
              }
            }}
            className="group absolute bottom-7 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-[#0d0f14]/92 backdrop-blur-xl border border-white/15 hover:border-[#E44C1F]/60 text-white shadow-[0_12px_40px_rgba(0,0,0,0.85)] flex items-center gap-3.5 pointer-events-auto cursor-pointer transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 hover:scale-[1.03]"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E44C1F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E44C1F]" />
              </span>
              <span className="text-[13px] font-semibold tracking-tight text-white">
                {hoveredProjectTitle}
              </span>
            </div>

            <div className="h-3.5 w-[1px] bg-white/15" />

            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E44C1F] group-hover:text-white transition-colors">
              <span>View Details</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        )}

        {/* Backdrop Click / Touch Overlay — Tap anywhere to return book to shelf */}
        {activeProject && (
          <div
            onClick={handleCloseDetail}
            className="absolute inset-0 z-10 bg-black/40 md:bg-black/15 backdrop-blur-[1px] transition-all cursor-pointer"
            aria-label="Close book inspection and return to shelf"
          />
        )}

        {/* Active Selected Project Drawer */}
        {activeProject && (
          <div className="absolute inset-y-0 right-0 w-full md:w-[460px] bg-[#0c0d10]/95 backdrop-blur-xl border-l border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-2xl z-20 animate-in slide-in-from-right duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="text-xs font-mono text-[#E44C1F] uppercase tracking-wider">
                VOLUME {String((activeIndex ?? 0) + 1).padStart(2, "0")} OF {String(totalProjects).padStart(2, "0")}
              </div>
              <button
                onClick={handleCloseDetail}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all cursor-pointer"
                aria-label="Close Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="my-auto py-3 space-y-4 overflow-y-auto max-h-[68vh] pr-1 custom-scrollbar">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black/40">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-2.5 left-2.5 text-xs font-mono px-2 py-0.5 rounded bg-black/70 border border-white/10 text-white">
                  {activeProject.year} • {activeProject.category}
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-editorial-serif">
                  {activeProject.title}
                </h3>
                <p className="mt-1.5 text-xs md:text-sm text-white/70 leading-relaxed">
                  {activeProject.tagline}
                </p>
              </div>

              {/* Verified Result */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-[#E44C1F]/20 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-white/45 uppercase tracking-wide">Client Result</div>
                  <div className="text-base font-bold text-[#E44C1F]">{activeProject.impact}</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-mono text-white/45 uppercase tracking-wide">Client</div>
                  <div className="text-xs font-medium text-white/80 truncate max-w-[170px]">{activeProject.client}</div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-[11px] font-mono text-white/45 uppercase mb-1.5">Stack</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-xs text-white/75 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3.5 border-t border-white/10 flex flex-col gap-2.5">
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#E44C1F] hover:bg-[#d04217] text-white font-medium text-sm transition-all shadow-md shadow-[#E44C1F]/25 cursor-pointer"
                >
                  <span>Open Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <Link
                to="/work/$slug"
                params={{ slug: activeProject.slug }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-sm transition-all cursor-pointer"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-4 h-4 text-[#E44C1F]" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Sleek Project Quick Selector Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#E44C1F]" />
            <span className="font-semibold tracking-wider text-white/90 uppercase text-[12px]">
              All Projects
            </span>
            <span className="text-white/25">•</span>
            <span className="text-white/50 text-[12px]">
              {totalProjects} Live Client Websites
            </span>
          </div>
          <div className="text-[12px] text-white/50">
            {activeIndex !== null
              ? `Selected: Project ${activeIndex + 1} of ${totalProjects}`
              : "Click any project or book to view live site"}
          </div>
        </div>

        {/* Clean, No-Scrollbar Volume Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => handleSelectBook(idx)}
              className={cn(
                "group relative px-3.5 py-2 rounded-xl text-xs transition-all duration-200 border flex items-center gap-2.5 cursor-pointer whitespace-nowrap shrink-0",
                activeIndex === idx
                  ? "bg-[#E44C1F]/15 border-[#E44C1F] text-white shadow-[0_0_20px_rgba(228,76,31,0.25)] font-semibold"
                  : "bg-[#101216]/80 hover:bg-[#171920] text-white/70 border-white/[0.08] hover:border-white/20 hover:text-white"
              )}
            >
              <span
                className={cn(
                  "font-mono font-bold text-[10px] px-1.5 py-0.5 rounded",
                  activeIndex === idx
                    ? "bg-[#E44C1F] text-white"
                    : "bg-white/[0.06] text-white/45 group-hover:text-white"
                )}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="font-medium tracking-normal text-[13px] text-white">
                {project.title}
              </span>
              <span className="text-[11px] text-white/35 group-hover:text-white/55 transition-colors">
                {project.category.split("&")[0].trim()}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
