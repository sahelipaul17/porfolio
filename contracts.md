# Portfolio Backend Integration Contracts

## Contact Form API Contract

### Endpoint: `POST /api/contact`

#### Request Body:
```json
{
  "name": "string (required, min: 2, max: 100)",
  "email": "string (required, valid email format)",
  "subject": "string (required, min: 5, max: 200)",
  "message": "string (required, min: 10, max: 1000)"
}
```

#### Response:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "contact_message_id"
}
```

#### Error Response:
```json
{
  "success": false,
  "error": "Error message",
  "details": "Validation errors or system errors"
}
```

### Database Schema

#### Contact Messages Collection: `contact_messages`
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: Date,
  status: String (default: 'new'), // 'new', 'read', 'replied'
  ipAddress: String,
  userAgent: String
}
```

## Frontend Integration

### Current Mock Implementation
- Contact form in `/app/frontend/src/components/Contact.jsx`
- Mock form submission with setTimeout simulation
- Toast notifications using shadcn/ui toast component

### Backend Integration Changes
1. Replace mock `setTimeout` with actual API call
2. Add proper error handling for network failures
3. Add loading states and form validation
4. Implement retry mechanism for failed submissions

### API Call Implementation
```javascript
const response = await axios.post(`${API}/contact`, formData);
```

### Error Handling
- Network errors
- Validation errors
- Server errors
- Success notifications

## Security Considerations
- Input validation and sanitization
- Rate limiting for contact form submissions
- IP address logging for abuse prevention
- Email format validation
- XSS protection for message content

## Additional Features to Implement
1. Email notifications to admin when new contact received
2. Auto-reply email to user confirming message received
3. Admin dashboard to view/manage contact messages
4. Contact message status tracking