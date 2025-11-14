'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiCopyLight, PiLinkedinLogoThin } from 'react-icons/pi';
import { SiXing } from 'react-icons/si';
import { z } from 'zod';

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
import { FormData as ContactFormData } from '@/types';

export default function Contact() {
  const formSchema = z.object({
    firstName: z.string().min(1, { message: 'El nombre es obligatorio.' }),
    lastName: z.string().min(1, { message: 'El apellido es obligatorio.' }),
    email: z.string().email({ message: 'Ingrese un correo válido.' }),
    message: z
      .string()
      .min(5, { message: 'El mensaje debe tener al menos 5 caracteres.' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: '',
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData: ContactFormData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      message: values.message,
    };
    // setLoading(true);
    // const response = await sendEmail(token, formData);
    // setLoading(false);
    // if (response.success) {
    //   toast.success(
    //     response.message ||
    //       'Mensaje enviado correctamente. ¡Gracias por contactarnos!'
    //   );
    //   form.reset();
    // } else {
    //   toast.error(
    //     response.message ||
    //       'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
    //   );
    // }
    console.log(formData);
  };
  const [copied, setCopied] = useState(false);
  const currentDate = new Date();
  const timeToday = currentDate.getHours() + ':' + currentDate.getMinutes();
  const amPm = currentDate.getHours() >= 12 ? 'pm' : 'am';
  return (
    <div className="flex w-full flex-row gap-x-20 gap-y-8 max-[700px]:flex-wrap">
      <div className="flex flex-col gap-4 border-l-2 border-gray-900 pl-4 max-[700px]:w-full">
        <div className="flex gap-2 whitespace-nowrap">
          <p className="font-semibold">Time for me:</p>
          <p className="text-md font-light">
            {timeToday} {amPm}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Email:</p>
          <Button
            variant="ghost"
            size="icon-lg"
            className="text-md hover:bg- z-30 w-fit cursor-pointer text-sm font-light"
            onClick={async () => {
              await navigator.clipboard.writeText('mlizamaoliger@gmail.com');
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
          >
            <PiCopyLight size={14} />
            <p>{copied ? 'Copied!' : 'mlizamaoliger@gmail.com'}</p>
          </Button>
        </div>
        <div>
          <p className="font-semibold">Social Media</p>
          <div className="flex flex-col gap-1">
            <Button
              variant="ghost"
              size="icon-lg"
              className="z-30 w-fit cursor-pointer font-light hover:bg-none"
              onClick={() => {
                window.open(
                  'https://www.linkedin.com/in/mauriciolizama/',
                  '_blank'
                );
              }}
            >
              <PiLinkedinLogoThin size={20} /> <span>LinkedIn</span>
            </Button>
            <Button
              variant="ghost"
              size="icon-lg"
              className="z-30 w-fit cursor-pointer font-light hover:bg-none"
              onClick={() => {
                window.open(
                  'https://www.xing.com/profile/Mauricio_Lizama',
                  '_blank'
                );
              }}
            >
              <SiXing size={20} /> <span>Xing</span>
            </Button>
          </div>
        </div>
      </div>
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
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} />
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
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu apellido" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
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
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Escribe tu mensaje aquí..."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="mt-4 w-full cursor-pointer border border-black bg-black text-white hover:border-black hover:bg-white hover:text-black"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
