import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, businessName } = body;

    if (!name || !email || !businessName) {
      return NextResponse.json(
        { error: 'Name, email, and business name are required.' },
        { status: 400 }
      );
    }

    console.log('New audit request:', {
      name,
      email,
      businessName,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Audit request received. We\'ll review and reach out within 24 hours.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
