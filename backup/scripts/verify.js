const fs = require('fs');
const path = require('path');

// Verification configuration
const VERIFY_CONFIG = {
  sections: {
    required: [
      'hero',
      'transitions',
      'process',
      'content-pool',
      'testimonials',
      'faq',
      'cta'
    ],
    transitions: [
      'ImagineTransition',
      'ProcessToContent'
    ]
  },
  files: {
    core: [
      'app/page.tsx',
      'lib/utils.ts',
      'components/ui/button.tsx',
      'styles/globals.css'
    ],
    design: [
      'lib/design-tokens.ts',
      'lib/design-system/index.ts',
      'styles/theme.css'
    ]
  },
  content: {
    sections: {
      hero: ['Hero.tsx'],
      process: ['Process.tsx', 'ProcessCard.tsx'],
      'content-pool': ['ContentPool.tsx', 'ContentPoolFeatures.tsx']
    }
  }
};

// Verification functions
function verifySection(section) {
  const sectionPath = path.join('components/sections', section);
  return fs.existsSync(sectionPath);
}

function verifyFile(file) {
  return fs.existsSync(file);
}

function verifyContent(section, files) {
  const sectionPath = path.join('components/sections', section);
  return files.every(file => fs.existsSync(path.join(sectionPath, file)));
}

// Main verification function
async function verify() {
  console.log('Starting verification process...');
  const results = {
    sections: {},
    files: {},
    content: {}
  };

  // Verify sections
  console.log('Verifying sections...');
  VERIFY_CONFIG.sections.required.forEach(section => {
    results.sections[section] = verifySection(section);
  });

  // Verify files
  console.log('Verifying core files...');
  VERIFY_CONFIG.files.core.forEach(file => {
    results.files[file] = verifyFile(file);
  });

  // Verify content
  console.log('Verifying section content...');
  Object.entries(VERIFY_CONFIG.content.sections).forEach(([section, files]) => {
    results.content[section] = verifyContent(section, files);
  });

  // Report results
  console.log('\nVerification Results:');
  console.log('--------------------');
  
  console.log('\nSections:');
  Object.entries(results.sections).forEach(([section, exists]) => {
    console.log(`${section}: ${exists ? '✅' : '❌'}`);
  });

  console.log('\nCore Files:');
  Object.entries(results.files).forEach(([file, exists]) => {
    console.log(`${file}: ${exists ? '✅' : '❌'}`);
  });

  console.log('\nSection Content:');
  Object.entries(results.content).forEach(([section, exists]) => {
    console.log(`${section}: ${exists ? '✅' : '❌'}`);
  });

  // Final status
  const allPassed = Object.values(results).every(category => 
    Object.values(category).every(result => result)
  );

  console.log('\nFinal Status:', allPassed ? '✅ All checks passed' : '❌ Some checks failed');
}

// Run verification
verify().catch(console.error);