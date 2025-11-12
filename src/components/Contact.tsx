'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import { FormData } from '@/types';

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
    const formData: FormData = {
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
  return (
    <div className="mt-8 w-[650px] max-[700px]:w-full">
      <h2 className="mb-6 text-3xl font-bold">Contacto</h2>
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
          <Button type="submit" className="mt-4 w-fit">
            Enviar Mensaje
          </Button>
        </form>
      </Form>
    </div>
  );
}
