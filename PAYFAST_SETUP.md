# PayFast Payment Integration Setup

This project includes a complete PayFast payment integration for The Lift Co personal training packages.

## Features

✅ **PayFast Integration**: Secure payment processing for South African customers
✅ **Real Payment Form**: Customer details collection with validation
✅ **Package Selection**: Three training packages with different pricing
✅ **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
✅ **Mobile Responsive**: Works perfectly on all devices
✅ **Success/Failure Pages**: Proper payment flow handling
�� **Webhook Support**: Payment notification handling

## Setup Instructions

### 1. Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# PayFast Configuration
NEXT_PUBLIC_PAYFAST_MERCHANT_ID=your_merchant_id
NEXT_PUBLIC_PAYFAST_MERCHANT_KEY=your_merchant_key
NEXT_PUBLIC_PAYFAST_PASSPHRASE=your_passphrase

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 2. PayFast Account Setup

1. **Create PayFast Account**: Visit [PayFast.co.za](https://www.payfast.co.za) and create a merchant account
2. **Get Credentials**: From your PayFast dashboard, get:
   - Merchant ID
   - Merchant Key
   - Passphrase (create a secure one)
3. **Set URLs**: Configure these URLs in your PayFast dashboard:
   - Return URL: `https://yourdomain.com/payment/success`
   - Cancel URL: `https://yourdomain.com/payment/cancelled`
   - Notify URL: `https://yourdomain.com/api/payment/notify`

### 3. Testing

For testing, the integration uses PayFast sandbox by default in development mode:
- Sandbox Merchant ID: `10004002`
- Sandbox Merchant Key: `q1cd2rdny4a53`

Use test card details provided by PayFast for testing payments.

### 4. Production Deployment

1. **Update Environment Variables**: Set production PayFast credentials
2. **SSL Certificate**: Ensure your site has SSL (PayFast requires HTTPS)
3. **Webhook Endpoint**: Verify webhook endpoint is accessible at `/api/payment/notify`

## Payment Flow

1. **Package Selection**: Customer selects a training package
2. **Customer Details**: Form collects name, email, phone, and consent
3. **PayFast Redirect**: Customer is redirected to PayFast payment page
4. **Payment Processing**: PayFast handles the secure payment
5. **Return Handling**: Customer is redirected to success/cancelled page
6. **Webhook Notification**: PayFast sends payment confirmation to webhook

## Training Packages

- **PT Intro Pack**: R624 (1 consultation + 2 × 45-min sessions)
- **PT Six Pack**: R1270 (1 consultation + 5 × 45-min sessions) 
- **Monthly One-on-One Pack**: R2160 (8 × 60-min sessions)

## Accessibility Features

- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ ARIA labels and roles
- ✅ Focus indicators
- ✅ Skip navigation links
- ✅ High contrast support
- ✅ Reduced motion support
- ✅ Semantic HTML structure

## Security Features

- ✅ PayFast signature verification
- ✅ Form validation and sanitization
- ✅ Secure payment processing
- ✅ Error handling
- ✅ HTTPS enforcement (production)

## Support

- **Technical Issues**: Contact development team
- **PayFast Issues**: Contact PayFast support
- **Customer Support**: tshiamokl@gmail.com or +27 635432439

## File Structure

```
src/
├── utils/payfast.ts           # PayFast integration utilities
├── components/
│   ├── PaymentForm.tsx        # Payment form component
│   ├── TrainingPackages.tsx   # Updated with payment integration
│   └── SkipNav.tsx           # Accessibility skip navigation
├── app/
│   ├── payment/
│   │   ├── success/page.tsx   # Payment success page
│   │   └── cancelled/page.tsx # Payment cancelled page
│   └── api/payment/notify/    # PayFast webhook handler
└── PAYFAST_SETUP.md          # This file
```

## Testing Checklist

- [ ] Payment form validation works
- [ ] PayFast redirect functions correctly
- [ ] Success page displays payment details
- [ ] Cancelled page handles cancellation
- [ ] Webhook receives and processes notifications
- [ ] Mobile responsiveness verified
- [ ] Accessibility tested with screen reader
- [ ] Keyboard navigation works throughout

## Troubleshooting

**Payment not redirecting to PayFast:**
- Check environment variables are set correctly
- Verify merchant credentials
- Ensure site URL is correct

**Webhook not receiving notifications:**
- Verify webhook URL is accessible
- Check PayFast dashboard configuration
- Review server logs for errors

**Accessibility issues:**
- Test with keyboard-only navigation
- Use screen reader testing tools
- Verify ARIA labels are present
