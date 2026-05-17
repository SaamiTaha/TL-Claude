import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const uploadPath = (formData.get('uploadPath') as string) || 'uploads';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const blobPath = `${uploadPath}/${file.name}`;
    const blob = await put(blobPath, buffer, {
      access: 'public',
    });

    return NextResponse.json({
      url: blob.url,
      size: file.size,
      type: file.type,
      name: file.name,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Upload failed' },
      { status: 500 }
    );
  }
}
