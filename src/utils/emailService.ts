// Email service utility for handling notifications
// In production, you would use a service like EmailJS, Resend, or your own backend

export interface BookingData {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  notes?: string
  amount: string
  timestamp: string
}

export interface ContactData {
  name: string
  email: string
  service: string
  message: string
}

export class EmailService {
  // In production, you would initialize with your email service credentials
  constructor() {
    // Initialize EmailJS or other service
  }

  async sendBookingConfirmation(bookingData: BookingData) {
    try {
      // Email to business owner
      const ownerEmailData = {
        to: 'tshiamokl@gmail.com',
        subject: `🚀 New Booking: ${bookingData.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f5; padding: 20px; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #0ea5e9; margin: 0;">🚀 New Booking Alert!</h1>
              <p style="color: #a3a3a3; margin: 10px 0;">A new booking has been confirmed on The Lift Co platform</p>
            </div>
            
            <div style="background: #171717; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9;">
              <h2 style="color: #f59e0b; margin-top: 0;">Booking Details</h2>
              <p><strong>Service:</strong> ${bookingData.service}</p>
              <p><strong>Amount:</strong> ${bookingData.amount}</p>
              <p><strong>Date:</strong> ${bookingData.date}</p>
              <p><strong>Time:</strong> ${bookingData.time}</p>
            </div>
            
            <div style="background: #171717; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <h3 style="color: #f59e0b; margin-top: 0;">Client Information</h3>
              <p><strong>Name:</strong> ${bookingData.name}</p>
              <p><strong>Email:</strong> ${bookingData.email}</p>
              <p><strong>Phone:</strong> ${bookingData.phone}</p>
              ${bookingData.notes ? `<p><strong>Notes:</strong> ${bookingData.notes}</p>` : ''}
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
              <p style="color: #a3a3a3; font-size: 12px;">Booking confirmed at ${new Date(bookingData.timestamp).toLocaleString()}</p>
            </div>
          </div>
        `
      }

      // Email to client
      const clientEmailData = {
        to: bookingData.email,
        subject: `🎉 Booking Confirmed - ${bookingData.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f5; padding: 20px; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #0ea5e9; margin: 0;">🎉 Booking Confirmed!</h1>
              <p style="color: #a3a3a3; margin: 10px 0;">Thank you for choosing The Lift Co</p>
            </div>
            
            <div style="background: #171717; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <h2 style="color: #f59e0b; margin-top: 0;">Your Booking Details</h2>
              <p><strong>Service:</strong> ${bookingData.service}</p>
              <p><strong>Date:</strong> ${bookingData.date}</p>
              <p><strong>Time:</strong> ${bookingData.time}</p>
              <p><strong>Amount:</strong> ${bookingData.amount}</p>
            </div>
            
            <div style="background: #171717; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <h3 style="color: #0ea5e9; margin-top: 0;">What's Next?</h3>
              <ul style="color: #d4d4d4;">
                <li>You'll receive a confirmation call within 24 hours</li>
                <li>Prepare for an amazing transformation experience</li>
                <li>Bring comfortable workout clothes and a positive attitude</li>
                <li>Contact us at +27 635432439 if you need to reschedule</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #a3a3a3;">Ready to get lifted? Let's do this! 🚀</p>
              <p style="color: #a3a3a3; font-size: 12px;">The Lift Co - Built to Boost</p>
            </div>
          </div>
        `
      }

      // In production, you would send these emails using your preferred service
      console.log('📧 Owner notification:', ownerEmailData)
      console.log('📧 Client confirmation:', clientEmailData)

      return { success: true, ownerEmail: ownerEmailData, clientEmail: clientEmailData }
    } catch (error) {
      console.error('Email sending failed:', error)
      return { success: false, error }
    }
  }

  async sendContactFormNotification(contactData: ContactData) {
    try {
      const emailData = {
        to: 'tshiamokl@gmail.com',
        subject: `💌 New Contact Form: ${contactData.service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f5; padding: 20px; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #0ea5e9; margin: 0;">💌 New Contact Message</h1>
              <p style="color: #a3a3a3; margin: 10px 0;">Someone reached out through The Lift Co website</p>
            </div>
            
            <div style="background: #171717; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <h2 style="color: #f59e0b; margin-top: 0;">Contact Details</h2>
              <p><strong>Name:</strong> ${contactData.name}</p>
              <p><strong>Email:</strong> ${contactData.email}</p>
              <p><strong>Service Interest:</strong> ${contactData.service}</p>
            </div>
            
            <div style="background: #171717; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <h3 style="color: #0ea5e9; margin-top: 0;">Message</h3>
              <p style="color: #d4d4d4; line-height: 1.6;">${contactData.message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #a3a3a3; font-size: 12px;">Submitted at ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `
      }

      console.log('📧 Contact form notification:', emailData)
      return { success: true, emailData }
    } catch (error) {
      console.error('Contact email sending failed:', error)
      return { success: false, error }
    }
  }
}

export const emailService = new EmailService()
