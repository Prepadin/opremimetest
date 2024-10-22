import { NextRequest, NextResponse } from 'next/server';
import { getSubscriptionCount } from '@/lib/subscription';

export async function GET(request: NextRequest) {
  try {
    const subscriptionCount = await getSubscriptionCount();
    
    // Return a JSON response using NextResponse
    return NextResponse.json({ count: subscriptionCount }, { status: 200 });
  } catch (error) {
    // If there's an error, return a 500 status with the error message
    return NextResponse.json({ error: 'Failed to fetch subscription count' }, { status: 500 });
  }
}