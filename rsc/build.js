import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

console.log('📦 Building client bundle with webpack...');

try {
  const { stdout, stderr } = await execAsync('npx webpack --config webpack.config.js');
  if (stdout) console.log(stdout);
  if (stderr) console.error(stderr);
  console.log('✅ Build complete!');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}
