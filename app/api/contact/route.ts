import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_EMAIL = 'marquisprescott16@gmail.com';
const FROM = 'Cowebing <hello@cowebing.com>';

function adminEmailHtml(fields: {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  websiteUrl: string;
  projectDescription: string;
}) {
  const { name, email, phone, businessName, websiteUrl, projectDescription } = fields;
  const received = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#7B2FF7,#2563FF);padding:32px 40px;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,0.7);text-transform:uppercase;">Cowebing</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:800;color:#ffffff;">New Consultation Request</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">
            <p style="margin:0 0 24px;font-size:14px;color:#6b7280;">Submitted via cowebing.com &mdash; ${received} ET</p>

            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:12px 0;color:#9ca3af;width:140px;vertical-align:top;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Name</td>
                <td style="padding:12px 0;color:#111827;font-weight:600;">${name}</td>
              </tr>
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:12px 0;color:#9ca3af;vertical-align:top;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Email</td>
                <td style="padding:12px 0;"><a href="mailto:${email}" style="color:#7B2FF7;text-decoration:none;font-weight:600;">${email}</a></td>
              </tr>
              ${phone ? `<tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:12px 0;color:#9ca3af;vertical-align:top;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Phone</td><td style="padding:12px 0;color:#111827;">${phone}</td></tr>` : ''}
              ${businessName ? `<tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:12px 0;color:#9ca3af;vertical-align:top;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Business</td><td style="padding:12px 0;color:#111827;font-weight:600;">${businessName}</td></tr>` : ''}
              ${websiteUrl ? `<tr style="border-bottom:1px solid #f0f0f0;"><td style="padding:12px 0;color:#9ca3af;vertical-align:top;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Current Site</td><td style="padding:12px 0;"><a href="${websiteUrl}" style="color:#7B2FF7;text-decoration:none;">${websiteUrl}</a></td></tr>` : ''}
            </table>

            <div style="margin-top:28px;padding:20px;background:#fafafa;border-radius:8px;border-left:3px solid #7B2FF7;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:1px;color:#9ca3af;text-transform:uppercase;">Project Description</p>
              <p style="margin:0;font-size:14px;color:#111827;line-height:1.7;white-space:pre-wrap;">${projectDescription}</p>
            </div>

            <div style="margin-top:28px;">
              <a href="mailto:${email}?subject=Re: Your Cowebing Consultation Request" style="display:inline-block;background:linear-gradient(135deg,#7B2FF7,#2563FF);color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:14px 28px;border-radius:8px;">Reply to ${name}</a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;background:#f9fafb;border-top:1px solid #e5e7eb;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">Cowebing &mdash; cowebing.com</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function confirmationEmailHtml(name: string) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#7B2FF7,#2563FF);padding:32px 40px;text-align:center;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,0.7);text-transform:uppercase;">Cowebing</p>
            <h1 style="margin:10px 0 0;font-size:24px;font-weight:800;color:#ffffff;">We got your message!</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 16px;font-size:16px;color:#111827;font-weight:600;">Hi ${name},</p>
            <p style="margin:0 0 16px;font-size:15px;color:#374151;line-height:1.7;">
              Thank you for reaching out to Cowebing. Your consultation request has been received and Marquis will personally review your project details.
            </p>
            <p style="margin:0 0 28px;font-size:15px;color:#374151;line-height:1.7;">
              You can expect a response <strong>within 24 hours</strong> to discuss your project and schedule your free discovery call.
            </p>

            <div style="background:#f9fafb;border-radius:10px;padding:24px;margin-bottom:28px;">
              <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px;">What happens next</p>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:6px 0;vertical-align:top;">
                    <span style="display:inline-block;background:linear-gradient(135deg,#7B2FF7,#2563FF);color:#fff;font-size:11px;font-weight:800;border-radius:50%;width:20px;height:20px;text-align:center;line-height:20px;margin-right:12px;">1</span>
                  </td>
                  <td style="padding:6px 0;font-size:14px;color:#374151;">Marquis reviews your project details</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;vertical-align:top;">
                    <span style="display:inline-block;background:linear-gradient(135deg,#7B2FF7,#2563FF);color:#fff;font-size:11px;font-weight:800;border-radius:50%;width:20px;height:20px;text-align:center;line-height:20px;margin-right:12px;">2</span>
                  </td>
                  <td style="padding:6px 0;font-size:14px;color:#374151;">You receive a personal reply within 24 hours</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;vertical-align:top;">
                    <span style="display:inline-block;background:linear-gradient(135deg,#7B2FF7,#2563FF);color:#fff;font-size:11px;font-weight:800;border-radius:50%;width:20px;height:20px;text-align:center;line-height:20px;margin-right:12px;">3</span>
                  </td>
                  <td style="padding:6px 0;font-size:14px;color:#374151;">Free 30-minute discovery call to align on your goals</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;vertical-align:top;">
                    <span style="display:inline-block;background:linear-gradient(135deg,#7B2FF7,#2563FF);color:#fff;font-size:11px;font-weight:800;border-radius:50%;width:20px;height:20px;text-align:center;line-height:20px;margin-right:12px;">4</span>
                  </td>
                  <td style="padding:6px 0;font-size:14px;color:#374151;">Custom proposal and timeline delivered to you</td>
                </tr>
              </table>
            </div>

            <p style="margin:0 0 8px;font-size:14px;color:#6b7280;">In the meantime, explore our work:</p>
            <a href="https://cowebing.com/portfolio" style="display:inline-block;background:linear-gradient(135deg,#7B2FF7,#2563FF);color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:14px 28px;border-radius:8px;">View Portfolio</a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;background:#f9fafb;border-top:1px solid #e5e7eb;">
            <p style="margin:0 0 4px;font-size:12px;color:#9ca3af;">Cowebing &mdash; <a href="https://cowebing.com" style="color:#7B2FF7;text-decoration:none;">cowebing.com</a></p>
            <p style="margin:0;font-size:12px;color:#9ca3af;">Questions? Reply to this email or contact <a href="mailto:hello@cowebing.com" style="color:#7B2FF7;text-decoration:none;">hello@cowebing.com</a></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

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
      const resend = new Resend(process.env.RESEND_API_KEY);

      const [adminResult, confirmResult] = await Promise.allSettled([
        resend.emails.send({
          from: FROM,
          to: TO_EMAIL,
          replyTo: email,
          subject: `New Consultation Request — ${businessName || name}`,
          html: adminEmailHtml({ name, email, phone, businessName, websiteUrl, projectDescription }),
        }),
        resend.emails.send({
          from: FROM,
          to: email,
          subject: `We received your message — Cowebing`,
          html: confirmationEmailHtml(name),
        }),
      ]);

      if (adminResult.status === 'rejected') {
        console.error('[Contact] Admin email failed:', adminResult.reason);
        return NextResponse.json(
          { error: 'Something went wrong sending your message. Please try again.' },
          { status: 500 }
        );
      }

      if (confirmResult.status === 'rejected') {
        console.warn('[Contact] Confirmation email failed (non-critical):', confirmResult.reason);
      }
    } else {
      console.warn('[Contact] RESEND_API_KEY not set — skipping email. Payload:', {
        name, email, phone, businessName, websiteUrl, projectDescription,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { success: true, message: "Message received. We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch (err) {
    console.error('[Contact] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
