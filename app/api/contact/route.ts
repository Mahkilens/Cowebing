import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = 'marquisprescott16@gmail.com';
const FROM_EMAIL = 'Cowebing Contact <onboarding@resend.dev>';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, businessName, websiteUrl, projectDescription } = body;

    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { error: 'Name, email, and project description are required.' },
        { status: 400 }
      );
    }

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: email,
        subject: `New Consultation Request — ${businessName || name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
            <h2 style="color:#7B2FF7;margin-bottom:4px;">New Consultation Request</h2>
            <p style="color:#888;font-size:14px;margin-top:0;">Submitted via cowebing.com</p>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;"/>
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:8px 0;color:#888;width:140px;">Name</td><td style="padding:8px 0;color:#111;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#888;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#7B2FF7;">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:8px 0;color:#888;">Phone</td><td style="padding:8px 0;color:#111;">${phone}</td></tr>` : ''}
              ${businessName ? `<tr><td style="padding:8px 0;color:#888;">Business</td><td style="padding:8px 0;color:#111;">${businessName}</td></tr>` : ''}
              ${websiteUrl ? `<tr><td style="padding:8px 0;color:#888;">Current Site</td><td style="padding:8px 0;"><a href="${websiteUrl}" style="color:#7B2FF7;">${websiteUrl}</a></td></tr>` : ''}
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;"/>
            <h3 style="font-size:14px;color:#888;margin-bottom:8px;">Project Description</h3>
            <p style="font-size:14px;color:#111;line-height:1.6;white-space:pre-wrap;">${projectDescription}</p>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;"/>
            <p style="font-size:12px;color:#aaa;">Received ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</p>
          </div>
        `,
      });
    } else {
      console.warn('[Contact] RESEND_API_KEY not set — email not sent. Form data:', {
        name, email, phone, businessName, websiteUrl, projectDescription,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { success: true, message: "Message received. We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch (err) {
    console.error('[Contact] Error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
