import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { checkRateLimit } from '../../../lib/rateLimit';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_replace_me');

export async function POST(request) {
  try {
    // 1. Rate Limiting Check
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    // Limit to 5 emails per minute per IP to prevent spam
    const isAllowed = checkRateLimit(ip, 5); 

    if (!isAllowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // 3. Send Email via Resend
    // In production, the 'to' address should be the admin's email (e.g., info@slffa.com)
    // The 'from' address must be a verified domain on your Resend account (e.g., updates@slffa.com)
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Replace with your verified domain
      to: ['info@slffa.com'], // Replace with Admin Email
      subject: `New Inquiry from ${name}: ${subject || 'No Subject'}`,
      replyTo: email,
      html: `
        <h2>New Inquiry from Website Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Success response
    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: 'Failed to process request.' },
      { status: 500 }
    );
  }
}
