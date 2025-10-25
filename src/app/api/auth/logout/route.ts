import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    cookies().set('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: new Date(0),
      path: '/',
    });

    return new NextResponse('Logged out', { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse('Something went wrong', { status: 500 });
  }
}
