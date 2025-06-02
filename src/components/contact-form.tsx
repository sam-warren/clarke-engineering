import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader, XCircle } from 'lucide-react'
import type { ChangeEvent, FormEvent } from 'react'
import React, { useState } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  honeypot: string
}

interface FormErrors {
  [key: string]: string
}

interface AlertState {
  type: 'success' | 'error'
  message: string
}

interface ApiResponse {
  success?: boolean
  error?: string
  data?: unknown
}

type FormField = keyof Omit<FormData, 'honeypot'>

interface ContactFormProps {
  onAlert?: (alert: AlertState | null) => void
}

const ContactForm: React.FC<ContactFormProps> = ({ onAlert }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const validateField = (name: FormField, value: string): string => {
    switch (name) {
      case 'name':
        return !value.trim() ? 'Name is required' : ''
      case 'email':
        return !value
          ? 'Email is required'
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ? 'Invalid email address'
            : ''
      case 'subject':
        return !value.trim() ? 'Subject is required' : ''
      case 'message':
        return !value.trim()
          ? 'Message is required'
          : value.length < 10
            ? 'Message must be at least 10 characters'
            : ''
      default:
        return ''
    }
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    // Honeypot check for spam protection
    if (formData.honeypot) {
      const alert = {
        type: 'error' as const,
        message: 'Form submission failed.',
      }
      onAlert?.(alert)
      return
    }

    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    }

    setErrors(newErrors)

    if (Object.values(newErrors).some((error) => error)) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const data: ApiResponse = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      const alert = {
        type: 'success' as const,
        message:
          "Message sent! We've sent you a confirmation email with the details. Check your inbox.",
      }
      onAlert?.(alert)

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      })
      setErrors({})
    } catch (error) {
      console.error('Contact form error:', error)
      const alert = {
        type: 'error' as const,
        message:
          error instanceof Error
            ? error.message
            : 'Failed to send message. Please try again later.',
      }
      onAlert?.(alert)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getInputClassName = (fieldName: string): string => {
    const baseClasses =
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
    return `${baseClasses} ${
      errors[fieldName] ? 'border-red-500 focus-visible:ring-red-500' : ''
    }`
  }

  const getTextAreaClassName = (fieldName: string): string => {
    const baseClasses =
      'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
    return `${baseClasses} ${
      errors[fieldName] ? 'border-red-500 focus-visible:ring-red-500' : ''
    }`
  }

  return (
    <Card className="shadow-lg h-fit">
      <CardHeader>
        <CardTitle className="text-2xl">Send Us a Message</CardTitle>
        <p className="text-muted-foreground">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot field - hidden from users but visible to bots */}
          <div className="hidden">
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={getInputClassName('name')}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <XCircle className="h-4 w-4 text-red-500" />
                  </div>
                )}
              </div>
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClassName('email')}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <XCircle className="h-4 w-4 text-red-500" />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Subject
            </label>
            <div className="relative">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={getInputClassName('subject')}
                placeholder="Project Inquiry"
              />
              {errors.subject && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <XCircle className="h-4 w-4 text-red-500" />
                </div>
              )}
            </div>
            {errors.subject && (
              <p className="text-sm text-red-500">{errors.subject}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={getTextAreaClassName('message')}
                placeholder="Tell us about your project or inquiry..."
              />
              {errors.message && (
                <div className="absolute right-3 top-3">
                  <XCircle className="h-4 w-4 text-red-500" />
                </div>
              )}
            </div>
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 text-primary-foreground hover:bg-red-700 h-10 px-4 py-2"
          >
            {isSubmitting ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm
