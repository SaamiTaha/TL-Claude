'use client';

import { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

interface ImageUploadProps {
  uploadPath: string;
  imageType: 'hero' | 'cta' | 'category-thumbnail';
  onUploadComplete?: (url: string) => void;
}

export function ImageUploadDropZone({ uploadPath, imageType, onUploadComplete }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      await uploadFile(files[0]);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      await uploadFile(files[0]);
    }
  };

  const uploadFile = async (file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setStatus('error');
      setMessage('Please select an image file');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setStatus('error');
      setMessage('File size must be less than 10MB');
      return;
    }

    setUploading(true);
    setStatus('idle');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('uploadPath', uploadPath);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      setStatus('success');
      setMessage(`✓ ${file.name} uploaded successfully`);

      if (onUploadComplete) {
        onUploadComplete(data.url);
      }

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setMessage('Upload failed. Please try again.');
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  const getTypeLabel = () => {
    switch (imageType) {
      case 'hero': return 'Homepage Hero (1920×1080px)';
      case 'cta': return 'Full Yard CTA Background (1920×1080px)';
      case 'category-thumbnail': return 'Category Thumbnail (600×400px)';
    }
  };

  return (
    <div className="w-full">
      <label
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center w-full h-64 rounded-lg border-2 border-dashed cursor-pointer transition-colors ${
          isDragging
            ? 'border-brand-green bg-brand-green/5'
            : 'border-brand-border bg-brand-surface hover:bg-brand-surface/50'
        }`}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4">
          <Upload className={`w-12 h-12 mb-3 ${isDragging ? 'text-brand-green' : 'text-brand-muted'}`} />
          <p className="mb-2 text-sm font-medium text-brand-text">
            {uploading ? 'Uploading...' : 'Drop image here or click to select'}
          </p>
          <p className="text-xs text-brand-muted">{getTypeLabel()}</p>
          <p className="text-xs text-brand-muted mt-2">WebP, JPG, PNG (Max 10MB)</p>
        </div>
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileSelect}
          disabled={uploading}
        />
      </label>

      {status === 'success' && (
        <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
          <CheckCircle className="w-4 h-4" />
          {message}
        </div>
      )}

      {status === 'error' && (
        <div className="mt-3 flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="w-4 h-4" />
          {message}
        </div>
      )}
    </div>
  );
}
