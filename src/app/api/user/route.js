import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getAccessToken(request) {
  const authHeader = request.headers.get('authorization') || request.headers.get('x-access-token');
  if (!authHeader) return null;
  return authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : authHeader.trim();
}

export async function GET(request) {
  const accessToken = getAccessToken(request);
  if (!accessToken) {
    return NextResponse.json({ error: 'Unauthorized: access token required' }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { accessToken },
    });

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized: invalid access token' }, { status: 401 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user info:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
