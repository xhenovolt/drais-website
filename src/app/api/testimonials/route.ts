import { NextRequest, NextResponse } from 'next/server';

// Static testimonials data (real users as per requirements)
const TESTIMONIALS = [
  {
    id: 1,
    name: "Ngobi Peter",
    position: "Director",
    school: "Northgate Schools",
    message:
      "DRAIS has completely transformed our attendance monitoring. The fingerprint system is incredibly fast and reliable. Our parents now have full confidence in our accountability systems because they receive real-time notifications when their children arrive or are absent.",
    photo_url: "/testimonial_photos/ngobi-peter.svg",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Wagogo Husama",
    position: "Headteacher", 
    school: "Albayan Quran Memorization Center",
    message:
      "As an Islamic school focused on Quran memorization, we needed a system that understood our unique needs. DRAIS not only handles our attendance perfectly but also helps us track our students' Quranic studies progress with specialized tools designed for Islamic education.",
    photo_url: "/testimonial_photos/wagogo-husama.svg",
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Shk Hassan Mwaita",
    position: "School Principal",
    school: "Excel Islamic Nursery and Primary School",
    message:
      "The setup process was remarkably straightforward, and the training was excellent. Our teachers adapted to DRAIS within days. The automated parent notifications have significantly improved our parent-school communication and trust levels.",
    photo_url: "/testimonial_photos/hassan-mwaita.svg",
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Mr Mwondha Hassan",
    position: "School Administrator",
    school: "Ibun Baz Educational Complex",
    message:
      "Managing attendance for over 400 students was a nightmare before DRAIS. Now, our morning routine is smooth and efficient. The detailed attendance reports save us hours every month, and parents love receiving instant arrival confirmations.",
    photo_url: "/testimonial_photos/mwondha-hassan.svg",
    created_at: new Date().toISOString(),
  },
];

// GET /api/testimonials — returns all testimonials (static data for marketing site)
export async function GET() {
  try {
    return NextResponse.json({ success: true, data: TESTIMONIALS });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

// POST /api/testimonials — accept testimonial submissions (marketing site)
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

    // For the marketing site, we'll just return a success message
    // In a real implementation, this would save to a database or send an email
    console.log('New testimonial submission:', { name, position, school, message });

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your testimonial! It will be reviewed and published soon.',
      data: { id: Date.now(), name, position, school, created_at: new Date().toISOString() }
    }, { status: 201 });
  } catch (error) {
    console.error('Error submitting testimonial:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit testimonial.' }, { status: 500 });
  }
}
