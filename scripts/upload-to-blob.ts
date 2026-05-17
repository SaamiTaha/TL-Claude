import fs from 'fs';
import path from 'path';
import { put } from '@vercel/blob';

// Load .env.local
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    if (line && !line.startsWith('#')) {
      const [key, value] = line.split('=');
      if (key && value) {
        process.env[key.trim()] = value.trim().replace(/^["']|["']$/g, '');
      }
    }
  });
}

interface UploadResult {
  filename: string;
  url: string;
  size: number;
  category: string;
}

const UPLOAD_PATHS = [
  {
    source: 'public/images/hero/',
    prefix: 'hero',
    extensions: ['.webp', '.jpg', '.jpeg', '.png']
  },
  {
    source: 'public/images/cta/',
    prefix: 'cta',
    extensions: ['.webp', '.jpg', '.jpeg', '.png']
  },
  {
    source: 'public/images/category-thumbnails/',
    prefix: 'category-thumbnails',
    extensions: ['.webp', '.jpg', '.jpeg', '.png']
  },
  {
    source: 'public/gallery/',
    prefix: 'gallery',
    extensions: ['.webp', '.jpg', '.jpeg', '.png'],
    recursive: true
  }
];

async function uploadToBlob(filePath: string, prefix: string): Promise<UploadResult | null> {
  try {
    const filename = path.basename(filePath);
    const fileBuffer = fs.readFileSync(filePath);
    const blobPath = `${prefix}/${filename}`;

    const blob = await put(blobPath, fileBuffer, {
      access: 'public',
    });

    return {
      filename,
      url: blob.url,
      size: fileBuffer.length,
      category: prefix
    };
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error);
    return null;
  }
}

async function batchUploadImagesToBlob() {
  console.log('📤 Starting image upload to Vercel Blob...\n');

  const uploadedFiles: UploadResult[] = [];

  for (const uploadConfig of UPLOAD_PATHS) {
    const sourcePath = path.join(process.cwd(), uploadConfig.source);

    if (!fs.existsSync(sourcePath)) {
      console.log(`⊘ Skipping ${uploadConfig.source}: directory not found`);
      continue;
    }

    console.log(`📁 Processing ${uploadConfig.source}`);

    if (uploadConfig.recursive) {
      const files = getAllFiles(sourcePath, uploadConfig.extensions);
      for (const file of files) {
        const result = await uploadToBlob(file, uploadConfig.prefix);
        if (result) {
          uploadedFiles.push(result);
          console.log(`✓ ${result.filename} → ${result.url}`);
        }
      }
    } else {
      const files = fs.readdirSync(sourcePath)
        .filter(f => uploadConfig.extensions.some(ext => f.toLowerCase().endsWith(ext)));

      for (const file of files) {
        const filePath = path.join(sourcePath, file);
        const result = await uploadToBlob(filePath, uploadConfig.prefix);
        if (result) {
          uploadedFiles.push(result);
          console.log(`✓ ${result.filename} → ${result.url}`);
        }
      }
    }
  }

  // Save upload manifest
  const manifestPath = path.join(process.cwd(), 'public', 'blob-uploads.json');
  fs.writeFileSync(manifestPath, JSON.stringify(uploadedFiles, null, 2));

  console.log(`\n✅ Upload complete!`);
  console.log(`📊 Uploaded ${uploadedFiles.length} files`);
  console.log(`📄 Manifest saved to: public/blob-uploads.json`);
}

function getAllFiles(dirPath: string, extensions: string[]): string[] {
  let files: string[] = [];

  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(itemPath, extensions));
    } else if (extensions.some(ext => item.toLowerCase().endsWith(ext))) {
      files.push(itemPath);
    }
  }

  return files;
}

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error('❌ Error: BLOB_READ_WRITE_TOKEN environment variable not set');
  console.error('Set it in .env.local or as an environment variable');
  process.exit(1);
}

batchUploadImagesToBlob().catch(console.error);
