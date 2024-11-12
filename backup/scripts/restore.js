const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  sections: [
    'hero',
    'transitions',
    'process',
    'content-pool',
    'testimonials',
    'faq',
    'cta'
  ],
  requiredFiles: [
    'app/page.tsx',
    'lib/utils.ts',
    'components/ui/button.tsx',
    'styles/globals.css'
  ],
  dependencies: [
    'framer-motion',
    'lucide-react',
    'tailwind-merge',
    'clsx'
  ]
};

// Utility functions
function verifyDirectory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyDirectory(src, dest) {
  verifyDirectory(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Main restore function
async function restore() {
  console.log('Starting restore process...');

  // Verify project structure
  console.log('Verifying project structure...');
  CONFIG.sections.forEach(section => {
    verifyDirectory(`./components/sections/${section}`);
  });

  // Copy files
  console.log('Copying files...');
  copyDirectory('./backup/components', './components');
  copyDirectory('./backup/lib', './lib');
  copyDirectory('./backup/styles', './styles');

  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install ' + CONFIG.dependencies.join(' '), { stdio: 'inherit' });

  // Verify installation
  console.log('Verifying installation...');
  CONFIG.requiredFiles.forEach(file => {
    if (!fs.existsSync(file)) {
      throw new Error(`Required file missing: ${file}`);
    }
  });

  console.log('Restore completed successfully!');
}

// Run restore
restore().catch(console.error);