import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// GET /api/testimonials — returns all approved testimonials (public)
export async function GET() {
  try {
    const result = await query(
      `SELECT id, name, position, school, message, photo_url, created_at
       FROM testimonials
       WHERE approved = TRUE
       ORDER BY created_at DESC`
    );
    return NextResponse.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

// POST /api/testimonials — submit a new testimonial (pending approval)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, position, school, message } = body;

    if (!name || !position || !school || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields (name, position, school, message) are required.' },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { success: false, error: 'Message must be 1000 characters or fewer.' },
        { status: 400 }
      );
    }

    const result = await query(
      `INSERT INTO testimonials (name, position, school, message, approved)
       VALUES ($1, $2, $3, $4, FALSE)
       RETURNING id, name, position, school, created_at`,
      [name.trim(), position.trim(), school.trim(), message.trim()]
    );

    return NextResponse.json({ success: true, data: result.rows[0] }, { status: 201 });
  } catch (error) {
    console.error('Error submitting testimonial:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit testimonial.' }, { status: 500 });
  }
}
