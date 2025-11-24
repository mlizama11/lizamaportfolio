'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Altcha from './Altcha';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ContactFormData } from '@/types';

export function ContactForm() {
  const [serverStatus, setServerStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const altchaRef = useRef<HTMLInputElement>(null);
  // State to force re-mounting the Altcha component
  const [altchaKey, setAltchaKey] = useState(0);

  const formSchema = z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    companyName: z.string(),
    email: z.email({ message: 'Please type a valid email address' }),
    message: z.string().min(10, {
      message: 'Your message should be at least 10 characters long',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData: ContactFormData = {
      firstName: values.firstName,
      lastName: values.lastName,
      companyName: values.companyName,
      email: values.email,
      message: values.message,
      altcha: altchaRef.current?.value || '',
    };

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to submit');

      setServerStatus('success');
      form.reset();
      setAltchaKey((prevKey) => prevKey + 1);
      setTimeout(() => {
        setServerStatus('idle');
      }, 1000);
    } catch (error) {
      console.error(error);
      setServerStatus('error');
      setAltchaKey((prevKey) => prevKey + 1);
      setTimeout(() => {
        setServerStatus('idle');
      }, 1000);
    }
  };
  return (
    <div className="flex grow items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-full gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormItem>
                  <FormLabel>Company Name (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Company name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your message here..."
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ALTCHA Field */}
          <div>
            <Altcha key={altchaKey} ref={altchaRef} />
          </div>

          <Button
            type="submit"
            className="mt-4 flex w-full cursor-pointer items-center justify-center border border-black bg-black text-white hover:border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-green-700 dark:hover:text-white"
          >
            Send Message
          </Button>

          {/* Status Feedback */}
          {serverStatus === 'success' && (
            <p className="mt-4 rounded-md border border-green-200 bg-green-50 p-3 text-center font-medium text-green-600">
              Message sent successfully!
            </p>
          )}
          {serverStatus === 'error' && (
            <p className="text-destructive mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-center font-medium">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </Form>
    </div>
  );
}
