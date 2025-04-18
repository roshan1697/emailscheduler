import z from 'zod'

export const MailOption = z.object({
    from: z.string().email(),
    to: z.string().email(),
    subject: z.string(),
    text: z.string()

})