
import { z } from "zod";


type TFunction = (key: string, G_RAW_RETURN_TYPE_NEVER_USE_IN_PRODUCTION?: boolean) => string | any;

export const getContactFormSchema = (t: TFunction) => z.object({
  name: z.string()
    .min(2, { message: t('zodValidation.nameMin') as string })
    .max(50, { message: t('zodValidation.nameMax') as string }),
  email: z.string().email({ message: t('zodValidation.emailInvalid') as string }),
  message: z
    .string()
    .min(10, { message: t('zodValidation.messageMin') as string })
    .max(1000, { message: t('zodValidation.messageMax') as string }),
});

export type ContactFormValues = z.infer<ReturnType<typeof getContactFormSchema>>;


const serverT = (key: string): string => {
  const fallbackMessages: Record<string, string> = {
    "zodValidation.nameMin": "Name must be at least 2 characters.",
    "zodValidation.nameMax": "Name cannot exceed 50 characters.",
    "zodValidation.emailInvalid": "Please enter a valid email.",
    "zodValidation.messageMin": "Message must be at least 10 characters.",
    "zodValidation.messageMax": "Message cannot exceed 1000 characters.",
  };
  return fallbackMessages[key] || "Invalid input.";
};
export const contactFormSchemaServer = getContactFormSchema(serverT);
