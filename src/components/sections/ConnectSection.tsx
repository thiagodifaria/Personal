
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { SectionThemeUpdater } from "@/components/SectionThemeUpdater";
import type { ContactFormValues} from "@/lib/validators";
import { getContactFormSchema } from "@/lib/validators";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

export function ConnectSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const contactFormSchema = getContactFormSchema(t);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || t('contactForm.errorDescriptionDefault'));
      }

      toast({
        title: t('contactForm.successTitle'),
        description: t('contactForm.successDescription'),
      });
      form.reset();
    } catch (error: any) {
      toast({
        title: t('contactForm.errorTitle'),
        description: error.message || t('contactForm.errorDescriptionDefault'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SectionThemeUpdater 
      theme="dark" 
      className="bg-secondary text-foreground py-12 md:py-20 min-h-screen flex flex-col justify-center" 
      id="connect"
    >
      <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold font-headline mb-3">
            {t('homePage.connectSectionTitle')}
          </h2>
          <p className="text-base text-muted-foreground">
            {t('homePage.connectSectionDescription')}
          </p>
        </div>
        <Card className="shadow-lg border-border/70 bg-card text-card-foreground">
          <CardContent className="p-4 sm:p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">{t('contactForm.nameLabel')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('contactForm.namePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">{t('contactForm.emailLabel')}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t('contactForm.emailPlaceholder')} {...field} />
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
                      <FormLabel className="text-sm">{t('contactForm.messageLabel')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('contactForm.messagePlaceholder')}
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t('contactForm.submitButtonLoading')}
                    </>
                  ) : (
                    t('contactForm.submitButton')
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </SectionThemeUpdater>
  );
}
