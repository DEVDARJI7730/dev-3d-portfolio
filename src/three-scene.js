import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function initThreeScenes() {
  // Check if WebGL is available
  const hasWebGL = () => {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  };

  if (!hasWebGL()) {
    console.warn("WebGL not supported. 3D features disabled.");
    return;
  }

  // ==========================================
  // SCENE 1: Starfield Background Canvas
  // ==========================================
  const bgCanvas = document.getElementById('bg-canvas');
  const bgScene = new THREE.Scene();
  
  // Camera
  const bgCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  bgCamera.position.z = 30;

  // Renderer
  const bgRenderer = new THREE.WebGLRenderer({ canvas: bgCanvas, alpha: true, antialias: true });
  bgRenderer.setSize(window.innerWidth, window.innerHeight);
  bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particles/Stars Creation
  const starsGeometry = new THREE.BufferGeometry();
  const starsCount = 1500;
  const positions = new Float32Array(starsCount * 3);
  const colors = new Float32Array(starsCount * 3);

  const colorBlue = new THREE.Color('#0055ff');
  const colorPurple = new THREE.Color('#bd00ff');
  const colorCyan = new THREE.Color('#00f0ff');
  const colorsArray = [colorBlue, colorPurple, colorCyan];

  for (let i = 0; i < starsCount * 3; i += 3) {
    // Spread in a cube
    positions[i] = (Math.random() - 0.5) * 100;
    positions[i + 1] = (Math.random() - 0.5) * 100;
    positions[i + 2] = (Math.random() - 0.5) * 100;

    // Distribute star colors among theme palette
    const randColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
    colors[i] = randColor.r;
    colors[i + 1] = randColor.g;
    colors[i + 2] = randColor.b;
  }

  starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Custom Star Texture (drawn procedurally on a small canvas to make stars round/soft)
  const createStarTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 16);
    
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
  };

  const starsMaterial = new THREE.PointsMaterial({
    size: 0.25,
    sizeAttenuation: true,
    transparent: true,
    alphaTest: 0.01,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    map: createStarTexture()
  });

  const starParticles = new THREE.Points(starsGeometry, starsMaterial);
  bgScene.add(starParticles);

  // Mouse Parallax for BG Starfield
  let mouseX = 0;
  let mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
  });


  // ==========================================
  // SCENE 2: Hero Holographic 3D Workspace
  // ==========================================
  const heroCanvas = document.getElementById('hero-3d-canvas');
  if (!heroCanvas) return;

  const heroScene = new THREE.Scene();
  
  // Camera
  const heroCamera = new THREE.PerspectiveCamera(45, heroCanvas.clientWidth / heroCanvas.clientHeight, 0.1, 100);
  heroCamera.position.set(0, 5, 12);

  // Renderer
  const heroRenderer = new THREE.WebGLRenderer({ canvas: heroCanvas, alpha: true, antialias: true });
  heroRenderer.setSize(heroCanvas.clientWidth, heroCanvas.clientHeight);
  heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  heroScene.add(ambientLight);

  const dirLight1 = new THREE.DirectionalLight('#00f0ff', 2.0); // Cyan light
  dirLight1.position.set(5, 5, 2);
  heroScene.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight('#bd00ff', 2.5); // Purple light
  dirLight2.position.set(-5, 3, 5);
  heroScene.add(dirLight2);

  // Main group that will hold everything
  const workspaceGroup = new THREE.Group();
  heroScene.add(workspaceGroup);

  // --- PROCEDURAL HOLOGRAPHIC LAPTOP ---
  const laptopGroup = new THREE.Group();
  workspaceGroup.add(laptopGroup);

  // Base materials
  const wireframeCyanMat = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    wireframe: true,
    transparent: true,
    opacity: 0.55
  });

  const wireframePurpleMat = new THREE.MeshBasicMaterial({
    color: 0xbd00ff,
    wireframe: true,
    transparent: true,
    opacity: 0.4
  });

  const glowSolidMat = new THREE.MeshPhongMaterial({
    color: 0x0a0c20,
    emissive: 0x0055ff,
    emissiveIntensity: 0.15,
    shininess: 30,
    transparent: true,
    opacity: 0.7
  });

  // Laptop Base (Keyboard Part)
  const laptopBaseGeom = new THREE.BoxGeometry(4.5, 0.15, 3);
  const laptopBase = new THREE.Mesh(laptopBaseGeom, glowSolidMat);
  const laptopBaseWire = new THREE.Mesh(laptopBaseGeom, wireframeCyanMat);
  laptopBase.add(laptopBaseWire);
  laptopGroup.add(laptopBase);

  // Keyboard grid lines
  const keyboardGeom = new THREE.PlaneGeometry(3.8, 2.2, 10, 6);
  keyboardGeom.rotateX(-Math.PI / 2);
  const keyboardGrid = new THREE.Mesh(keyboardGeom, new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    wireframe: true,
    transparent: true,
    opacity: 0.65
  }));
  keyboardGrid.position.set(0, 0.08, 0.1);
  laptopGroup.add(keyboardGrid);

  // Laptop Screen
  const laptopScreenGroup = new THREE.Group();
  laptopScreenGroup.position.set(0, 0.07, -1.45); // hinge point
  
  const laptopScreenGeom = new THREE.BoxGeometry(4.5, 2.8, 0.1);
  laptopScreenGeom.translate(0, 1.4, 0); // move pivot to bottom edge
  
  const laptopScreen = new THREE.Mesh(laptopScreenGeom, glowSolidMat);
  const laptopScreenWire = new THREE.Mesh(laptopScreenGeom, wireframeCyanMat);
  laptopScreen.add(laptopScreenWire);
  laptopScreenGroup.add(laptopScreen);

  // Code grid representation on screen
  const screenContentGeom = new THREE.PlaneGeometry(4.2, 2.5, 12, 8);
  screenContentGeom.translate(0, 1.4, 0.06);
  const screenContent = new THREE.Mesh(screenContentGeom, new THREE.MeshBasicMaterial({
    color: 0xbd00ff,
    wireframe: true,
    transparent: true,
    opacity: 0.45
  }));
  laptopScreenGroup.add(screenContent);

  // Open the screen to a laptop angle (~115 degrees)
  laptopScreenGroup.rotation.x = THREE.MathUtils.degToRad(20);
  laptopGroup.add(laptopScreenGroup);

  // --- FLOATING AI ORBITERS ---
  const orbitersGroup = new THREE.Group();
  workspaceGroup.add(orbitersGroup);

  const numOrbiters = 3;
  const orbiters = [];
  const ringGeometries = [];

  // Define paths & sizes for AI engine rings
  for (let i = 0; i < numOrbiters; i++) {
    const radius = 3.5 + i * 1.2;
    const speed = 0.3 * (1 - i * 0.2);
    const yPos = (i - 1) * 0.8;

    // Ring path
    const ringGeom = new THREE.RingGeometry(radius, radius + 0.03, 64);
    ringGeom.rotateX(Math.PI / 2);
    const ringMesh = new THREE.Mesh(ringGeom, wireframePurpleMat);
    ringMesh.position.y = yPos;
    orbitersGroup.add(ringMesh);
    ringGeometries.push(ringMesh);

    // Orbiting node (Floating sphere/icosahedron representing AI agent node)
    const nodeGeom = i === 1 
      ? new THREE.OctahedronGeometry(0.35, 1) 
      : new THREE.IcosahedronGeometry(0.3, 0);
    
    const nodeMaterial = new THREE.MeshPhongMaterial({
      color: i === 1 ? 0x00f0ff : 0xbd00ff,
      emissive: i === 1 ? 0x00f0ff : 0xbd00ff,
      emissiveIntensity: 0.5,
      wireframe: true
    });
    
    const nodeMesh = new THREE.Mesh(nodeGeom, nodeMaterial);
    orbitersGroup.add(nodeMesh);
    
    orbiters.push({
      mesh: nodeMesh,
      radius: radius,
      speed: speed,
      yPos: yPos,
      angle: Math.random() * Math.PI * 2
    });
  }

  // --- INTERACTIVE ORBIT CONTROLS ---
  const controls = new OrbitControls(heroCamera, heroCanvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false; // Disable zooming so it doesn't hijack scroll page interactions
  controls.minPolarAngle = Math.PI / 6; // Limit rotation to look premium
  controls.maxPolarAngle = Math.PI / 2;

  // Let workspace rotate slowly by default
  workspaceGroup.rotation.y = -Math.PI / 6;
  workspaceGroup.position.y = -1;


  // ==========================================
  // RESPONSIVENESS AND TICK ANIMATIONS
  // ==========================================
  const clock = new THREE.Clock();

  const animate = () => {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // 1. Animate BG Stars
    starParticles.rotation.y = elapsedTime * 0.015;
    starParticles.rotation.x = elapsedTime * 0.005;

    // React BG Stars to mouse parallax
    starParticles.position.x += (mouseX * 5 - starParticles.position.x) * 0.05;
    starParticles.position.y += (-mouseY * 5 - starParticles.position.y) * 0.05;

    // 2. Animate Hero Workspace (slow breathing rotation & hover)
    const baseRotationSpeed = 0.08;
    // Don't auto-rotate if user is dragging controls
    if (!controls.state == -1) {
      workspaceGroup.rotation.y = -Math.PI / 6 + Math.sin(elapsedTime * 0.25) * 0.15;
    }
    
    // Smooth hover float
    laptopGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;
    laptopGroup.rotation.z = Math.cos(elapsedTime * 1.0) * 0.02;

    // Rotate screen contents to simulate rendering
    screenContent.rotation.y = elapsedTime * 0.05;

    // 3. Update Orbiting AI Nodes
    orbiters.forEach((orbiter) => {
      orbiter.angle += orbiter.speed * 0.015;
      orbiter.mesh.position.x = Math.cos(orbiter.angle) * orbiter.radius;
      orbiter.mesh.position.z = Math.sin(orbiter.angle) * orbiter.radius;
      orbiter.mesh.position.y = orbiter.yPos + Math.sin(elapsedTime * 2 + orbiter.radius) * 0.25;
      
      // Node spins on its own axis
      orbiter.mesh.rotation.x = elapsedTime * 0.5;
      orbiter.mesh.rotation.y = elapsedTime * 0.8;
    });

    // 4. Update Ring Geometries
    ringGeometries.forEach((ring, index) => {
      ring.rotation.y = elapsedTime * 0.05 * (index % 2 === 0 ? 1 : -1);
    });

    // 5. Scroll Triggered Camera Linkage
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    // Camera moves closer and revolves as page scrolls down
    workspaceGroup.position.x = -scrollPercent * 1.5;
    workspaceGroup.rotation.y = (-Math.PI / 6) + (scrollPercent * Math.PI * 0.35);

    controls.update();

    bgRenderer.render(bgScene, bgCamera);
    heroRenderer.render(heroScene, heroCamera);
  };

  animate();

  // Resize Handler
  window.addEventListener('resize', () => {
    // Background canvas resize
    bgCamera.aspect = window.innerWidth / window.innerHeight;
    bgCamera.updateProjectionMatrix();
    bgRenderer.setSize(window.innerWidth, window.innerHeight);
    bgRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Hero canvas resize
    if (heroCanvas.clientWidth > 0 && heroCanvas.clientHeight > 0) {
      heroCamera.aspect = heroCanvas.clientWidth / heroCanvas.clientHeight;
      heroCamera.updateProjectionMatrix();
      heroRenderer.setSize(heroCanvas.clientWidth, heroCanvas.clientHeight);
      heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
  });
}
