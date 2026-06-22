'use client'

import { useState, useEffect, useRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Loader2, Mail, MapPin, Phone, Send, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '../components/SectionHeading'
import { useTranslations } from '@/src/contexts/LocaleContext'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

interface ContactFormData {
  fullName: string
  phoneNumber: string
  emailAddress: string
  message: string
}

interface FormMessage {
  type: 'success' | 'error' | ''
  text: string
}

export function Contact() {
  const t = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const [isLoading, setIsLoading] = useState(false)
  const [formMessage, setFormMessage] = useState<FormMessage>({ type: '', text: '' })

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('[data-contact="info"]', {
        x: -30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })

      gsap.from('[data-contact="form"]', {
        x: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: formRef.current, start: 'top 85%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      setIsLoading(true)
      setFormMessage({ type: '', text: '' })

      await emailjs.send(
        'service_ppiz6aj',
        'template_0igmfqr',
        data as unknown as Record<string, unknown>,
        { publicKey: '7Dmvhm5O04NbJA2Mw' }
      )

      setFormMessage({ type: 'success', text: t.contact.success })
      reset()
    } catch {
      setFormMessage({ type: 'error', text: t.contact.error })
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    { icon: Mail, label: t.contact.email, value: 'iminiaki@gmail.com', href: 'mailto:iminiaki@gmail.com' },
    { icon: Phone, label: t.contact.phone, value: t.contact.phoneValue },
    { icon: MapPin, label: t.contact.location, value: t.contact.locationValue },
  ]

  return (
    <section ref={sectionRef} id="contact" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-10">
            <SectionHeading
              label={t.contact.label}
              title={t.contact.title}
              description={t.contact.description}
            />

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} data-contact="info" className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider rtl:normal-case">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card data-contact="form" className="border-border/50 bg-card/40 backdrop-blur-sm">
            <CardContent className="p-6 lg:p-8">
              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t.contact.fullName}</Label>
                    <div className="relative">
                      <User className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="fullName"
                        placeholder={t.contact.namePlaceholder}
                        className="ps-10 bg-background/50"
                        disabled={isLoading}
                        {...register('fullName', { required: t.contact.nameRequired })}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-destructive text-xs">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">{t.contact.phoneField}</Label>
                    <div className="relative">
                      <Phone className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder={t.contact.phonePlaceholder}
                        className="ps-10 bg-background/50"
                        disabled={isLoading}
                        {...register('phoneNumber', {
                          required: t.contact.phoneRequired,
                          pattern: { value: /^\d+$/, message: t.contact.phoneInvalid },
                        })}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-destructive text-xs">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emailAddress">{t.contact.emailField}</Label>
                  <div className="relative">
                    <Mail className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="emailAddress"
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      className="ps-10 bg-background/50"
                      dir="ltr"
                      disabled={isLoading}
                      {...register('emailAddress', { required: t.contact.emailRequired })}
                    />
                  </div>
                  {errors.emailAddress && (
                    <p className="text-destructive text-xs">{errors.emailAddress.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.message}</Label>
                  <Textarea
                    id="message"
                    placeholder={t.contact.messagePlaceholder}
                    className="min-h-[120px] bg-background/50 resize-none"
                    disabled={isLoading}
                    {...register('message', { required: t.contact.messageRequired })}
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full rounded-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 rtl:rotate-180" />
                      {t.contact.send}
                    </>
                  )}
                </Button>

                {formMessage.text && (
                  <p
                    className={cn(
                      'text-center text-sm',
                      formMessage.type === 'success' ? 'text-green-500' : 'text-destructive'
                    )}
                  >
                    {formMessage.text}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
